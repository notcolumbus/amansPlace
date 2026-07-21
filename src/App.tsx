import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import MusicDisk from './components/MusicDisk';
import { CLOSE_UNMOUNT_MS } from './lib/motion';
import { pages } from './config/pages';
import { projects } from './data/projects';
import HomePage from './components/pages/HomePage';
import PhotoPage from './components/pages/PhotoPage';
import ArtPage from './components/pages/ArtPage';
import ProjectPage from './components/pages/ProjectPage';

function App() {
  const location = useLocation();
  const currentPage = pages.find(p => p.path === location.pathname) || pages[0];
  const [views, setViews] = useState<number | null>(null);

  const isProjectPage = location.pathname.startsWith('/work/');
  const slugFromUrl = isProjectPage ? location.pathname.split('/')[2] : null;
  const currentProject = isProjectPage
    ? projects.find(p => p.slug === slugFromUrl)
    : null;

  // The overlay's mount state lags the URL on close so it can fade out first.
  // (AnimatePresence exit never completes in this tree, so unmount is managed
  // manually — same approach as michelle-liu's site.)
  const [overlaySlug, setOverlaySlug] = useState<string | null>(slugFromUrl);
  if (slugFromUrl && slugFromUrl !== overlaySlug) {
    setOverlaySlug(slugFromUrl);
  }
  const closing = overlaySlug !== null && slugFromUrl === null;

  useEffect(() => {
    if (slugFromUrl || overlaySlug === null) return;
    const t = setTimeout(() => setOverlaySlug(null), CLOSE_UNMOUNT_MS);
    return () => clearTimeout(t);
  }, [slugFromUrl, overlaySlug]);

  useEffect(() => {
    if (isProjectPage && currentProject) {
      document.body.style.backgroundColor = currentProject.color;
    } else {
      document.body.style.backgroundColor = currentPage.bg;
    }
  }, [currentPage.bg, isProjectPage, currentProject]);

  useEffect(() => {
    document.title = currentProject
      ? `${currentProject.title} · Aman's Place`
      : currentPage.title;
  }, [currentProject, currentPage.title]);

  useEffect(() => {
    const controller = new AbortController();
    const loadViews = async () => {
      try {
        const response = await fetch('https://abacus.jasoncameron.dev/hit/amananwar/key', {
          signal: controller.signal,
        });
        if (!response.ok) return;
        const data: { value?: number } = await response.json();
        if (typeof data.value === 'number') setViews(data.value - 200);
      } catch (error) {
        if ((error as DOMException).name === 'AbortError') return;
      }
    };
    void loadViews();
    return () => controller.abort();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <MusicDisk />
      {/* The main layout stays mounted underneath project pages so the card
          expand/collapse morph always has a live card to animate to/from,
          and scroll position survives opening a project. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="min-h-screen p-2 sm:p-4 md:p-6 lg:grid lg:grid-cols-10 lg:gap-6"
      >
        <aside className="hidden lg:block col-span-3 sticky top-6 self-start">
          <Navbar views={views} />
        </aside>

        <div className="lg:col-span-7 lg:pt-15">
          <div className="lg:hidden">
            <Navbar views={views} />
          </div>
          <Routes location={isProjectPage ? '/' : location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/photos" element={<PhotoPage />} />
            <Route path="/art" element={<ArtPage />} />
          </Routes>
        </div>
      </motion.div>

      {overlaySlug && (
        <ProjectPage key={overlaySlug} slug={overlaySlug} closing={closing} />
      )}
    </MotionConfig>
  )
}

export default App
