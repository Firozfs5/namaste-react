
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar';
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import About from './components/about'
import Contact from './components/contact';
import Error from './components/errorShow';
import CardDisplay from './components/foodDisplaying'



let AppLayout=()=>{

  return(
  <div>
    <Navbar />
    <Outlet />
  </div>
)}

let appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
     {
      path:"/",
      element:<Body />
     }
      ,
      {
    path:'/About',
    element:<About />,
    errorElement:<Error />
     },
     {
    path:'/Contact',
    element:<Contact />
     },
     {
      path:'/resource/:foodID',
      element:<CardDisplay />
     }
    ],
    errorElement:<Error />

  },


])

createRoot(document.getElementById('root'))
.render(
  <RouterProvider router={appRouter} />
)
