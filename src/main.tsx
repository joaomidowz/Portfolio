import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App'
import Tech from './pages/technologies'
import About from './pages/About'
import Portifolio from './pages/Portifolio'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
    <Tech />
    <About />
    <Portifolio />
  </StrictMode>,
)
