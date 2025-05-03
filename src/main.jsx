
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar';
import Body from "./components/Body"



let AppLayout=()=>(
  <div>
    <Navbar />
    <Body />
  </div>
)

createRoot(document.getElementById('root')).render(
  <AppLayout />
)
