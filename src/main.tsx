import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App'
import Tech from './pages/technologies'
import About from './pages/About'
import Portifolio from './pages/Portifolio'
import Footer from './pages/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='max-phone:-mb-8'><App /></div>
    <div id='tech' className='max-phone:-mb-8'><Tech /></div>
    <div id='about' className='max-phone:-mb-8'><About /></div>
    <div id='portfolio' className='max-phone:-mb-8'><Portifolio /></div>
    <Footer />
  </StrictMode>,
)
