import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar, { pages } from './components/Navbar';
import HomePage from './components/pages/HomePage';
import CameraPage from './components/pages/CameraPage';
import ArtPage from './components/pages/ArtPage';

function App() {
  const location = useLocation();
  const currentPage = pages.find(p => p.path === location.pathname) || pages[0];

  useEffect(() => {
    document.body.style.backgroundColor = currentPage.bg;
  }, [currentPage.bg]);

  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-6">
      <div className="md:grid md:grid-cols-5">
        <div className="col-span-1" />
        <main className="col-span-3">
          <Navbar />
          <Routes key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/photos" element={<CameraPage />} />
            <Route path="/art" element={<ArtPage />} />
          </Routes>
        </main>
        <div className="col-span-1" />
      </div>
    </div>
  )
}

export default App
