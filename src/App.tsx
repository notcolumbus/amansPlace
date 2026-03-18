import { Routes, Route, useLocation } from 'react-router-dom';
import { TextMorph } from 'torph/react';
import HomePage from './components/pages/HomePage';
import CameraPage from './components/pages/CameraPage';

const pageTitles: Record<string, string> = {
  '/': "Aman's Place",
  '/photos': "Aman's Photos",
};

function App() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Aman's Place";

  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-6">
      <div className="md:grid md:grid-cols-5">
        <div className="col-span-1" />
        <main className="col-span-3">
          <TextMorph
            as="h1"
            className="rammetto-one-regular text-5xl text-white pt-13"
          >
            {title}
          </TextMorph>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/photos" element={<CameraPage />} />
          </Routes>
        </main>
        <div className="col-span-1" />
      </div>
    </div>
  )
}

export default App
