import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import posthog from 'posthog-js'
import './index.css'
import App from './App.tsx'


posthog.init('phc_dm0MKxple1slxSnfnC70E4IR8bOH0Zjq2wWVieRw6Yh', {
  api_host: 'https://peep.amans.place',
  defaults: '2026-01-30'
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
