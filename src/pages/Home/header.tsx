import React from "react";

export const Header = () => {
  return (
    <div>
      <header className="header_area">
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
          {/* Classy Menu */}
          <nav className="classy-navbar" id="essenceNav">
            {/* Logo */}
            <a className="nav-brand" href="/">
              COZAStore
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
                    <a href="/sanpham">Sản phẩm</a>
                  </li>
                  {/* <li>
                    <a href="#">Pages</a>                    
                  </li> */}
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/donhang">Đơn hàng</a>
                  </li>
                </ul>
              </div>
              {/* Nav End */}
            </div>
          </nav>
          {/* Header Meta Data */}
          <div className="d-flex clearfix justify-content-end">
            {/* Search Area */}
            <div className="search-area">
              <form action="#" method="post">
                <input style={{marginRight: "35px"}}
                  type="search"
                  name="search"
                  id="headerSearch"
                  placeholder="   Tìm kiếm"
                />
              </form>
            </div>
            {/* Favourite Area */}
            <div className="favourite-area">
              <a href="/thanhtoan">
                <img src="../../../src/assets/img/core-img/heart.svg" alt="" />
              </a>
            </div>
            {/* User Login Info */}
            <div className="user-login-info">
              <a href="/login">
                <img src="../../../src/assets/img/core-img/user.svg" alt="" />
              </a>
            </div>
            {/* Cart Area */}
            <div className="cart-area">
              <a href="/Cart  " id="essenceCartBtn">
                <img src="../../../src/assets/img/core-img/bag.svg" alt="" />{" "}
                <span>3</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* ##### Header Area End ##### */}
      {/* ##### Right Side Cart Area ##### */}
      <div className="cart-bg-overlay" />
      <div className="right-side-cart-area">
        {/* Cart Button */}
        <div className="cart-button">
          <a href="#" id="rightSideCart">
            <img src="img/core-img/bag.svg" alt="" /> <span>3</span>
          </a>
        </div>
        <div className="cart-content d-flex">
          {/* Cart List Area */}
          <div className="cart-list">
            {/* Single Cart Item */}
            <div className="single-cart-item">
              <a href="#" className="product-image">
                <img
                  src="img/product-img/product-1.jpg"
                  className="cart-thumb"
                  alt=""
                />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true" />
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">$45.00</p>
                </div>
              </a>
            </div>
            {/* Single Cart Item */}
            <div className="single-cart-item">
              <a href="#" className="product-image">
                <img
                  src="img/product-img/product-2.jpg"
                  className="cart-thumb"
                  alt=""
                />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true" />
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">$45.00</p>
                </div>
              </a>
            </div>
            {/* Single Cart Item */}
            <div className="single-cart-item">
              <a href="#" className="product-image">
                <img
                  src="img/product-img/product-3.jpg"
                  className="cart-thumb"
                  alt=""
                />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true" />
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">$45.00</p>
                </div>
              </a>
            </div>
          </div>
          {/* Cart Summary */}
          <div className="cart-amount-summary">
            <h2>Summary</h2>
            <ul className="summary-table">
              <li>
                <span>subtotal:</span> <span>$274.00</span>
              </li>
              <li>
                <span>delivery:</span> <span>Free</span>
              </li>
              <li>
                <span>discount:</span> <span>-15%</span>
              </li>
              <li>
                <span>total:</span> <span>$232.00</span>
              </li>
            </ul>
            <div className="checkout-btn mt-100">
              <a href="checkout.html" className="btn essence-btn">
                check out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
