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
import SanPham from './pages/SanPham/SapPham';
import GioHang from './pages/GioHang/GioHang';
import DonHang from './pages/DonHang/DonHang';
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
      },{
        path:"/sanpham",
        element: <SanPham/>
      },{
        path:"/giohang",
        element: <GioHang/>
      },{
        path:"/donhang",
        element: <DonHang/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
