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
import Chitiet from './pages/Home/detail';
import Login from './pages/Home/login';
import SanPham from './pages/Products/Products';
import DonHang from './pages/Order/Order';
import ThanhToan from './pages/ThanhToan/ThanhToan';
import Cart from './pages/ShoppingCart/ShoppingCart'



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
        path:"/detail/:id",
        element: <Chitiet/>
      },{
        path:"/login",
        element: <Login/>
      },{
        path:"/sanpham",
        element: <SanPham/>
      },{
        path:"/donhang",
        element: <DonHang/>
      },{
        path:"/thanhtoan",
        element: <ThanhToan/>
      },
      {
        path:"/Cart",
        element:<Cart/>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
