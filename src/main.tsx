import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ClickSpark from "./components/ClickSpark.tsx"
import GradualBlur from './components/GradualBlur.tsx';

createRoot(document.getElementById('root')!).render(
    <section style={{position: 'relative', minHeight: '100vh'}}>
  <div style={{ height: '100%',overflowY: 'auto'}}>
    <BrowserRouter>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={12}
        sparkRadius={20}
        sparkCount={10}
        duration={400}
      >
        <App />
      </ClickSpark>

    </BrowserRouter>
  </div>

  <div style={{position: 'fixed', bottom: 0, left: 0, right: 0, pointerEvents: 'none'}}>
    <GradualBlur
      strength={3}
      divCount={1}
    />
  </div>
</section>
    
  
)
