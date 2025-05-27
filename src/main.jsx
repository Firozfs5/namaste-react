import {lazy,Suspense} from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar';
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Contact from './components/contact';
import Error from './components/errorShow';
import CardDisplay from './components/foodDisplaying'
import Shimmer from "./components/shimmer";

const About=lazy(()=> import('./components/about'))

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
    element:<Suspense fallback={<Shimmer />}><About /></Suspense>,
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
