import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import posthog from 'posthog-js'
import './index.css'
import App from './App.tsx'

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  autocapture: false,
})

createRoot(document.getElementById('root')!).render(
  <section style={{ position: 'relative', minHeight: '100vh' }}>
    <div style={{ height: '100%' }}>
      <BrowserRouter>

        <App />

      </BrowserRouter>
    </div>

  </section>


)
