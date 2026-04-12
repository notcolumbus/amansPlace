import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar, { pages } from './components/Navbar';
import HomePage from './components/pages/HomePage';
import PhotoPage from './components/pages/PhotoPage';
import ArtPage from './components/pages/ArtPage';

function App() {
  const location = useLocation();
  const currentPage = pages.find(p => p.path === location.pathname) || pages[0];
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.backgroundColor = currentPage.bg;
  }, [currentPage.bg]);

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
    <div className="min-h-screen p-2 sm:p-4 md:p-6 lg:grid lg:grid-cols-10 lg:gap-6">
      <aside className="hidden lg:block col-span-3 sticky top-6 self-start">
        <Navbar views={views} />
      </aside>

      <div className="lg:col-span-7 lg:pt-15">
        <div className="lg:hidden">
          <Navbar views={views} />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photos" element={<PhotoPage />} />
          <Route path="/art" element={<ArtPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
