import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import CameraPage from './components/pages/CameraPage';

function App() {
  return (
    <div className="min-h-screen p-15">
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photos" element={<CameraPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
