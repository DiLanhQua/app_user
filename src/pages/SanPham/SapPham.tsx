import React from "react";
import img from"./../../image/breadcumb.jpg";
const SanPham: React.FC = () => {
    
    return (
        <>
  <div className="cart-bg-overlay" />
  <div className="right-side-cart-area">
    <div className="cart-button">
      <a href="#" id="rightSideCart">
        <img src="img/core-img/bag.svg" alt="" /> <span>3</span>
      </a>
    </div>
    <div className="cart-content d-flex">
      <div className="cart-list">
        <div className="single-cart-item">
          <a href="#" className="product-image">
            <img
              src="https://myshoes.vn/image/cache/catalog/2023/lacoste/086/giay-lacoste-nivolor-0721-nam-xanh-navy-01-800x800.jpg.webp"
              className="cart-thumb"
              alt=""
            />
            <div className="cart-item-desc">
              <span className="product-remove">
                <i className="fa fa-close" aria-hidden="true" />
              </span>
              <span className="badge">Nike</span>
              <h6>Giày Nike Court Vision Low Nam - Xanh Dương</h6>
              <p className="size">Kích thước: S</p>
              <p className="color">Màu sắc: Xanh Dương</p>
              <p className="price">1.500.000₫</p>
            </div>
          </a>
        </div>
        <div className="single-cart-item">
          <a href="#" className="product-image">
            <img
              src="https://myshoes.vn/image/cache/catalog/2023/nike/nk1/giay-nike-air-max-ap-nam-trang-navy-01-800x800.jpg.webp"
              className="cart-thumb"
              alt=""
            />
            <div className="cart-item-desc">
              <span className="product-remove">
                <i className="fa fa-close" aria-hidden="true" />
              </span>
              <span className="badge">Nike</span>
              <h6>Giày Nike Air Max AP Nam - Trắng Navy</h6>
              <p className="size">Kích thước: S</p>
              <p className="color">Màu sắc: Trắng Navy</p>
              <p className="price">1.500.000₫</p>
            </div>
          </a>
        </div>
        <div className="single-cart-item">
          <a href="#" className="product-image">
            <img
              src="https://myshoes.vn/image/cache/catalog/2024/puma/pm1/giay-puma-aviate-nam-den-trang-01-800x800.jpg.webp"
              className="cart-thumb"
              alt=""
            />
            <div className="cart-item-desc">
              <span className="product-remove">
                <i className="fa fa-close" aria-hidden="true" />
              </span>
              <span className="badge">Puma</span>
              <h6>Giày Puma Aviate Nam - Đen Trắng</h6>
              <p className="size">Kích thước: S</p>
              <p className="color">Màu sắc:  Đen Trắng</p>
              <p className="price">1.500.000₫</p>
            </div>
          </a>
        </div>
      </div>
      <div className="cart-amount-summary">
        <h2>Tóm tắt</h2>
        <ul className="summary-table">
          <li>
            <span>Tạm tính:</span> <span>4.500.000₫</span>
          </li>
          <li>
            <span>Vận chuyển:</span> <span>Miễn phí</span>
          </li>
          <li>
            <span>Giảm giá:</span> <span>-15%</span>
          </li>
          <li>
            <span>Tổng cộng:</span> <span>4.300.000₫</span>
          </li>
        </ul>
        <div className="checkout-btn mt-100">
          <a href="checkout.html" className="btn essence-btn">
            Thanh toán
          </a>
        </div>
      </div>
    </div>
  </div>

  <div
    className="breadcumb_area bg-img"
    style={{ backgroundImage: `url(${img})` }}
  >
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12">
          <div className="page-title text-center">
            <h2>Sản Phẩm
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="shop_grid_area section-padding-80">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <div className="shop_sidebar_area">
          <div className="widget catagory mb-50">
    <h6 className="widget-title mb-30">Danh mục</h6>
    <div className="catagories-menu">
        <ul id="menu-content2" className="menu-content collapse show">
            <li data-toggle="collapse" data-target="#sneakers">
                <a href="#">Giày Sneaker</a>
                <ul className="sub-menu collapse show" id="sneakers">
                    <li><a href="#">Tất cả</a></li>
                    <li><a href="#">Giày Thể Thao</a></li>
                    <li><a href="#">Giày Chạy Bộ</a></li>
                    <li><a href="#">Giày Bóng Rổ</a></li>
                    <li><a href="#">Giày Tennis</a></li>
                </ul>
            </li>
            <li data-toggle="collapse" data-target="#boots" className="collapsed">
                <a href="#">Giày Boot</a>
                <ul className="sub-menu collapse" id="boots">
                    <li><a href="#">Tất cả</a></li>
                    <li><a href="#">Boot Cổ Cao</a></li>
                    <li><a href="#">Boot Cổ Ngắn</a></li>
                    <li><a href="#">Boot Da</a></li>
                    <li><a href="#">Boot Lội Nước</a></li>
                </ul>
            </li>
            <li data-toggle="collapse" data-target="#formal" className="collapsed">
                <a href="#">Giày Tây</a>
                <ul className="sub-menu collapse" id="formal">
                    <li><a href="#">Tất cả</a></li>
                    <li><a href="#">Giày Oxfords</a></li>
                    <li><a href="#">Giày Derby</a></li>
                    <li><a href="#">Giày Loafers</a></li>
                    <li><a href="#">Giày Brogues</a></li>
                </ul>
            </li>
            <li data-toggle="collapse" data-target="#sandals" className="collapsed">
                <a href="#">Dép và Sandals</a>
                <ul className="sub-menu collapse" id="sandals">
                    <li><a href="#">Tất cả</a></li>
                    <li><a href="#">Dép Xỏ Ngón</a></li>
                    <li><a href="#">Dép Quai Hậu</a></li>
                    <li><a href="#">Sandals Bệt</a></li>
                    <li><a href="#">Sandals Cao Gót</a></li>
                </ul>
            </li>
            <li data-toggle="collapse" data-target="#casual" className="collapsed">
                <a href="#">Giày Thường Ngày</a>
                <ul className="sub-menu collapse" id="casual">
                    <li><a href="#">Tất cả</a></li>
                    <li><a href="#">Giày Slip-On</a></li>
                    <li><a href="#">Giày Mọi</a></li>
                    <li><a href="#">Giày Cổ Thấp</a></li>
                    <li><a href="#">Giày Canvas</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>


<div className="widget price mb-50">
    <h6 className="widget-title mb-30">Lọc theo</h6>
    <p className="widget-title2 mb-30">Giá</p>
    <div className="widget-desc">
        <div className="slider-range">
            <div
                data-min={49}
                data-max={360}
                data-unit="₫"
                className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                data-value-min={49}
                data-value-max={360}
                data-label-result="Khoảng giá:"
            >
                <div className="ui-slider-range ui-widget-header ui-corner-all" />
                <span
                    className="ui-slider-handle ui-state-default ui-corner-all"
                    tabIndex={0}
                />
                <span
                    className="ui-slider-handle ui-state-default ui-corner-all"
                    tabIndex={0}
                />
            </div>
            <div className="range-price">Khoảng giá: ₫49.00 - ₫360.00</div>
        </div>
    </div>
</div>

<div className="widget color mb-50">
    <p className="widget-title2 mb-30">Màu sắc</p>
    <div className="widget-desc">
        <ul className="d-flex">
            <li>
                <a href="#" className="color1" />
            </li>
            <li>
                <a href="#" className="color2" />
            </li>
            <li>
                <a href="#" className="color3" />
            </li>
            <li>
                <a href="#" className="color4" />
            </li>
            <li>
                <a href="#" className="color5" />
            </li>
            <li>
                <a href="#" className="color6" />
            </li>
            <li>
                <a href="#" className="color7" />
            </li>
            <li>
                <a href="#" className="color8" />
            </li>
            <li>
                <a href="#" className="color9" />
            </li>
            <li>
                <a href="#" className="color10" />
            </li>
        </ul>
    </div>
</div>

<div className="widget brands mb-50">
    <p className="widget-title2 mb-30">Thương hiệu</p>
    <div className="widget-desc">
        <ul>
            <li>
                <a href="#">Asos</a>
            </li>
            <li>
                <a href="#">Mango</a>
            </li>
            <li>
                <a href="#">River Island</a>
            </li>
            <li>
                <a href="#">Topshop</a>
            </li>
            <li>
                <a href="#">Zara</a>
            </li>
        </ul>
    </div>
</div>

          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-9">
          <div className="shop_grid_product_area">
            <div className="row">
                <div className="col-12">
    <div className="product-topbar d-flex align-items-center justify-content-between">
        <div className="total-products">
            <p>
                <span>186</span> sản phẩm được tìm thấy
            </p>
        </div>
        <div className="product-sorting d-flex">
            <p>Sắp xếp theo:</p>
            <form action="#" method="get">
                <select name="select" id="sortByselect">
                    <option value="value">Đánh giá cao nhất</option>
                    <option value="value">Mới nhất</option>
                    <option value="value">Giá: $$ - $</option>
                    <option value="value">Giá: $ - $$</option>
                </select>
                <input type="submit" className="d-none" defaultValue="" />
            </form>
        </div>
    </div>
</div>

            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  <div className="product-img">
                    <img src="https://myshoes.vn/image/cache/catalog/2024/nike/nk6/giay-nike-court-vision-low-nam-xanh-duong-01-800x800.jpg.webp" alt="" />
                    <img
                      className="hover-img"
                      src="https://myshoes.vn/image/cache/catalog/2024/nike/nk6/giay-nike-court-vision-low-nam-xanh-duong-04-800x800.jpg.webp"
                      alt=""
                    />
                    <div className="product-badge offer-badge">
                      <span>-30%</span>
                    </div>
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  <div className="product-description">
                    <span>Nike</span>
                    <a href="single-product-details.html">
                      <h6>Giày Nike Court Vision Low Nam - Xanh Dương</h6>
                    </a>
                    <p className="product-price">
                      <span className="old-price">1.890.000₫</span> 1.500.000₫
                    </p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Thêm vào giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="https://myshoes.vn/image/cache/catalog/2023/nike/nk1/giay-nike-air-max-ap-nam-trang-navy-01-800x800.jpg.webp" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="https://myshoes.vn/image/cache/catalog/2023/nike/nk1/giay-nike-air-max-ap-nam-trang-navy-04-800x800.jpg.webp"
                      alt=""
                    />
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>Nike</span>
                    <a href="single-product-details.html">
                      <h6>Giày Nike Air Max AP Nam - Trắng Navy</h6>
                    </a>
                    <p className="product-price">
                      <span className="old-price">1.890.000₫</span> 1.500.000₫
                    </p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Thêm vào giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="https://myshoes.vn/image/cache/catalog/2024/puma/pm1/giay-puma-aviate-nam-den-trang-01-800x800.jpg.webp" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="https://myshoes.vn/image/cache/catalog/2024/puma/pm1/giay-puma-aviate-nam-den-trang-04-800x800.jpg.webp"
                      alt=""
                    />
                    {/* Product Badge */}
                    <div className="product-badge new-badge">
                      <span>New</span>
                    </div>
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>Puma</span>
                    <a href="single-product-details.html">
                      <h6>Giày Puma Aviate Nam - Đen Trắng</h6>
                    </a>
                    <p className="product-price">
                      <span className="old-price">1.890.000₫</span> 1.500.000₫
                    </p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Thêm vào giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="https://myshoes.vn/image/cache/catalog/2023/lacoste/086/giay-lacoste-nivolor-0721-nam-xanh-navy-01-800x800.jpg.webp" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="https://myshoes.vn/image/cache/catalog/2023/lacoste/086/giay-lacoste-nivolor-0721-nam-xanh-navy-02-800x800.jpg.webp"
                      alt=""
                    />
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>Lacoste</span>
                    <a href="single-product-details.html">
                      <h6>Giày Lacoste Nivolor 0721 Nam - Xanh Navy</h6>
                    </a>
                    <p className="product-price">
                      <span className="old-price">1.890.000₫</span> 1.500.000₫
                    </p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Thêm vào giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="https://myshoes.vn/image/cache/catalog/2023/lacoste/086/giay-lacoste-angular-textile-nam-trang-nau-01-800x800.jpg.webp" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="
                      https://myshoes.vn/image/cache/catalog/2023/lacoste/086/giay-lacoste-angular-textile-nam-trang-nau-02-800x800.jpg.webp"
                      alt=""
                    />
                    {/* Product Badge */}
                    <div className="product-badge offer-badge">
                      <span>-30%</span>
                    </div>
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>Lacoste</span>
                    <a href="single-product-details.html">
                      <h6>Giày Lacoste Angular Textile Nam - Trắng Nâu</h6>
                    </a>
                    <p className="product-price">
                      <span className="old-price">2.890.000₫</span> 1.800.000₫
                    </p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Thêm vào giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="https://myshoes.vn/image/cache/catalog/2024/nike/nk6/giay-nike-revolution-7-nam-den-cam-04-800x800.jpg.webp" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="https://myshoes.vn/image/cache/catalog/2024/nike/nk6/giay-nike-revolution-7-nam-den-cam-01-800x800.jpg.webp"
                      alt=""
                    />
                    {/* Product Badge */}
                    <div className="product-badge offer-badge">
                      <span>-30%</span>
                    </div>
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>Nike</span>
                    <a href="single-product-details.html">
                      <h6>Giày Nike Revolution 7 Nam - Đen Cam</h6>
                    </a>
                    <p className="product-price">
                      <span className="old-price">1.690.000₫</span> 1.300.000₫
                    </p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Thêm vào giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="https://myshoes.vn/image/cache/catalog/2024/nike/nk6/giay-nike-dunk-low-nam-trang-camo-04-800x800.jpg.webp" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="https://myshoes.vn/image/cache/catalog/2024/nike/nk6/giay-nike-dunk-low-nam-trang-camo-01-800x800.jpg.webp"
                      alt=""
                    />
                    {/* Product Badge */}
                    <div className="product-badge offer-badge">
                      <span>-30%</span>
                    </div>
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>Nike</span>
                    <a href="single-product-details.html">
                      <h6>Giày Nike Dunk Low Retro Nam - Trắng Camo</h6>
                    </a>
                    <p className="product-price">
                      <span className="old-price">2.890.000₫</span> 2.500.000₫
                    </p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Thêm vào giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="https://myshoes.vn/image/cache/catalog/2024/nike/nk4/giay-nike-air-zoom-vomero-17-nam-trang-xam-do.05-800x800.jpg.webp" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="https://myshoes.vn/image/cache/catalog/2024/nike/nk4/giay-nike-air-zoom-vomero-17-nam-trang-xam-do.01-800x800.jpg.webp"
                      alt=""
                    />
                    {/* Product Badge */}
                    <div className="product-badge offer-badge">
                      <span>-30%</span>
                    </div>
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>Nike</span>
                    <a href="single-product-details.html">
                      <h6>Giày Nike Vomero 17 Nam - Trắng Xám Đỏ</h6>
                    </a>
                    <p className="product-price">
                      <span className="old-price">1.890.000₫</span> 1.500.000₫
                    </p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Thêm vào giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="https://myshoes.vn/image/cache/catalog/2024/nike/nk4/giay-nike-downshifter-13-nu-tim-01-800x800.jpg.webp" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="https://myshoes.vn/image/cache/catalog/2024/nike/nk4/giay-nike-downshifter-13-nu-tim-05-800x800.jpg.webp"
                      alt=""
                    />
                    {/* Product Badge */}
                    <div className="product-badge offer-badge">
                      <span>-30%</span>
                    </div>
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>Nike</span>
                    <a href="single-product-details.html">
                      <h6>Giày Nike DownShifter 13 Nữ - Tím</h6>
                    </a>
                    <p className="product-price">
                      <span className="old-price">1.890.000₫</span> 1.500.000₫
                    </p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Thêm vào giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <nav aria-label="navigation">
            <ul className="pagination mt-50 mb-70">
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fa fa-angle-left" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  21
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</>

    );
};

export default SanPham;
