import React from 'react'
export const Header = () => {

  
  return (
    <div>
            <header className="header_area">
      <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
        {/* Classy Menu */}
        <nav className="classy-navbar" id="essenceNav">
          {/* Logo */}
          <a className="nav-brand" href="index.html">
            <img src="../../../src/assets/img/core-img/logo.png" alt="" />
          </a>
          {/* Navbar Toggler */}
          <div className="classy-navbar-toggler">
            <span className="navbarToggler">
              <span />
              <span />
              <span />
            </span>
          </div>
          {/* Menu */}
          <div className="classy-menu">
            {/* close btn */}
            <div className="classycloseIcon">
              <div className="cross-wrap">
                <span className="top" />
                <span className="bottom" />
              </div>
            </div>
            {/* Nav Start */}
            <div className="classynav">
  <ul>
    <li>
      <a href="/sanpham">Sản Phẩm</a>
      <div className="megamenu">
        <ul className="single-mega cn-col-4">
          <li className="title">Giày Sneaker</li>
          <li><a href="shop.html">Giày Thể Thao</a></li>
          <li><a href="shop.html">Giày Chạy Bộ</a></li>
          <li><a href="shop.html">Giày Bóng Rổ</a></li>
          <li><a href="shop.html">Giày Tennis</a></li>
        </ul>
        <ul className="single-mega cn-col-4">
          <li className="title">Giày Boot</li>
          <li><a href="shop.html">Boot Cổ Cao</a></li>
          <li><a href="shop.html">Boot Cổ Ngắn</a></li>
          <li><a href="shop.html">Boot Da</a></li>
          <li><a href="shop.html">Boot Lội Nước</a></li>
        </ul>
        <ul className="single-mega cn-col-4">
          <li className="title">Giày Tây</li>
          <li><a href="shop.html">Giày Oxfords</a></li>
          <li><a href="shop.html">Giày Derby</a></li>
          <li><a href="shop.html">Giày Loafers</a></li>
          <li><a href="shop.html">Giày Brogues</a></li>
        </ul>
        <ul className="single-mega cn-col-4">
          <li className="title">Dép và Sandals</li>
          <li><a href="shop.html">Dép Xỏ Ngón</a></li>
          <li><a href="shop.html">Dép Quai Hậu</a></li>
          <li><a href="shop.html">Sandals Bệt</a></li>
          <li><a href="shop.html">Sandals Cao Gót</a></li>
        </ul>
        <div className="single-mega cn-col-4">
          <img src="../../../src/assets/img/bg-img/bg-6.jpg" alt="Giày thời trang" />
        </div>
      </div>
    </li>
    <li>
      <a>Pages</a>
      <ul className="dropdown">
        <li><a href="index.html">Home</a></li>
        <li><a href="/sanpham">Shop</a></li>
        <li><a href="single-product-details.html">Product Details</a></li>
        <li><a href="checkout.html">Checkout</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="single-blog.html">Single Blog</a></li>
        <li><a href="regular-page.html">Regular Page</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="/donhang">Contact</a></li>
  </ul>
</div>

            {/* Nav End */}
          </div>
        </nav>
        {/* Header Meta Data */}
        <div className="header-meta d-flex clearfix justify-content-end">
          {/* Search Area */}
          <div className="search-area">
            <form action="#" method="post">
              <input
                type="search"
                name="search"
                id="headerSearch"
                placeholder="Type for search"
              />
              <button type="submit">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>
          {/* Favourite Area */}
          <div className="favourite-area">
            <a href="#">
              <img src="../../../src/assets/img/core-img/heart.svg" alt="" />
            </a>
          </div>
          {/* User Login Info */}
          <div className="user-login-info">
            <a href="#">
              <img src="../../../src/assets/img/core-img/user.svg" alt="" />
            </a>
          </div>
          {/* Cart Area */}
          <div className="cart-area">
            <a href="#" id="essenceCartBtn">
              <img src="../../../src/assets/img/core-img/bag.svg" alt="" /> <span>3</span>
            </a>

            
          </div>
        </div>
      </div>
    </header>
    {/* ##### Header Area End ##### */}
    </div>
  )
}

export default Header