import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <section style={{ position: 'relative', minHeight: '100vh' }}>
    <div style={{ height: '100%' }}>
      <BrowserRouter>

        <App />

      </BrowserRouter>
    </div>

  </section>


)
