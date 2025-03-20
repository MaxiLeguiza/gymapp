import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar.tsx'
import { SubNavBar } from './components/SubNavBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <NavBar/>
   <SubNavBar/>
  </StrictMode>,
)
