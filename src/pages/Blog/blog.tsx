import React from "react";

export const Blog = () => {
  return (
    <>
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
      {/* ##### Right Side Cart End ##### */}
      {/* ##### Breadcumb Area Start ##### */}
      <div
        className="breadcumb_area breadcumb-style-two bg-img"
        style={{ backgroundImage: "url(img/bg-img/breadcumb2.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Fashion Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### Breadcumb Area End ##### */}
      {/* ##### Blog Wrapper Area Start ##### */}
      <div className="blog-wrapper section-padding-80">
        <div className="container">
          <div className="row">
            {/* Single Blog Area */}
            <div className="col-12 col-lg-6">
              <div className="single-blog-area mb-50">
                <img src="img/bg-img/blog1.jpg" alt="" />
                {/* Post Title */}
                <div className="post-title">
                  <a href="#">
                    Vivamus sed nunc in arcu cursus mollis quis et orci.
                    Interdum et malesuada
                  </a>
                </div>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Post Title */}
                  <div className="hover-post-title">
                    <a href="#">
                      Vivamus sed nunc in arcu cursus mollis quis et orci.
                      Interdum et malesuada
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor. Phasellus purus dignissim convallis.
                  </p>
                  <a href="#">
                    Continue reading <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* Single Blog Area */}
            <div className="col-12 col-lg-6">
              <div className="single-blog-area mb-50">
                <img src="img/bg-img/blog2.jpg" alt="" />
                {/* Post Title */}
                <div className="post-title">
                  <a href="#">
                    Vivamus sed nunc in arcu cursus mollis quis et orci.
                    Interdum et malesuada
                  </a>
                </div>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Post Title */}
                  <div className="hover-post-title">
                    <a href="#">
                      Vivamus sed nunc in arcu cursus mollis quis et orci.
                      Interdum et malesuada
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor. Phasellus purus dignissim convallis.
                  </p>
                  <a href="#">
                    Continue reading <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* Single Blog Area */}
            <div className="col-12 col-lg-6">
              <div className="single-blog-area mb-50">
                <img src="img/bg-img/blog3.jpg" alt="" />
                {/* Post Title */}
                <div className="post-title">
                  <a href="#">
                    Vivamus sed nunc in arcu cursus mollis quis et orci.
                    Interdum et malesuada
                  </a>
                </div>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Post Title */}
                  <div className="hover-post-title">
                    <a href="#">
                      Vivamus sed nunc in arcu cursus mollis quis et orci.
                      Interdum et malesuada
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor. Phasellus purus dignissim convallis.
                  </p>
                  <a href="#">
                    Continue reading <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* Single Blog Area */}
            <div className="col-12 col-lg-6">
              <div className="single-blog-area mb-50">
                <img src="../../../src/assets/img/bg-img/blog4.jpg" alt="" />
                {/* Post Title */}
                <div className="post-title">
                  <a href="#">
                    Vivamus sed nunc in arcu cursus mollis quis et orci.
                    Interdum et malesuada
                  </a>
                </div>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Post Title */}
                  <div className="hover-post-title">
                    <a href="#">
                      Vivamus sed nunc in arcu cursus mollis quis et orci.
                      Interdum et malesuada
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor. Phasellus purus dignissim convallis.
                  </p>
                  <a href="#">
                    Continue reading <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* Single Blog Area */}
            <div className="col-12 col-lg-6">
              <div className="single-blog-area mb-50">
                <img src="img/bg-img/blog5.jpg" alt="" />
                {/* Post Title */}
                <div className="post-title">
                  <a href="#">
                    Vivamus sed nunc in arcu cursus mollis quis et orci.
                    Interdum et malesuada
                  </a>
                </div>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Post Title */}
                  <div className="hover-post-title">
                    <a href="#">
                      Vivamus sed nunc in arcu cursus mollis quis et orci.
                      Interdum et malesuada
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor. Phasellus purus dignissim convallis.
                  </p>
                  <a href="#">
                    Continue reading <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* Single Blog Area */}
            <div className="col-12 col-lg-6">
              <div className="single-blog-area mb-50">
                <img src="img/bg-img/blog6.jpg" alt="" />
                {/* Post Title */}
                <div className="post-title">
                  <a href="#">
                    Vivamus sed nunc in arcu cursus mollis quis et orci.
                    Interdum et malesuada
                  </a>
                </div>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Post Title */}
                  <div className="hover-post-title">
                    <a href="#">
                      Vivamus sed nunc in arcu cursus mollis quis et orci.
                      Interdum et malesuada
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce enim nulla, mollis eu metus in, sagittis fringilla
                    tortor. Phasellus purus dignissim convallis.
                  </p>
                  <a href="#">
                    Continue reading <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### Blog Wrapper Area End ##### */}
    </>
  );
};

export default Blog;
