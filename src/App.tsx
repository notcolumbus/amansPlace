import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import CameraPage from './components/pages/CameraPage';

function App() {
  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-6">
      <div className="md:grid md:grid-cols-5">
        <div className="col-span-1" />
        <main className="col-span-3">
          <Navbar />
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
