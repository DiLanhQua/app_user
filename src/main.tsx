import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/layuot/layout';
import Index from './pages/Home/Index';
import Blog from './pages/Blog/blog';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children: [
      {
        path: "/",
        element: <Index/>,
      
      },{
        path:"/blog",
        element: <Blog/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
