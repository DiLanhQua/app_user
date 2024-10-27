const chitiet = () => {
    return (
        <>
        <div className="right-side-cart-area">
          {/* Nút Giỏ Hàng */}
          <div className="cart-button">
            <a href="#" id="rightSideCart">
            <img src="src/assets/img/product-img/giay-nike-air-force-1-nam-chinh-hang-tai-tphcm-AJ7747-100-king-shoes-sneaker-authentic-2.jpg"  />
            </a>
          </div>
          <div className="cart-content d-flex">
            {/* Khu Vực Danh Sách Giỏ Hàng */}
            <div className="cart-list">
              {/* Sản Phẩm Trong Giỏ */}
              <div className="single-cart-item">
                <a href="#" className="product-image">
                <img src="src/assets/img/product-img/giay-nike-air-force-1-nam-chinh-hang-tai-tphcm-AJ7747-100-king-shoes-sneaker-authentic-2.jpg"  />
                  <div className="cart-item-desc">
                    <span className="product-remove">
                      <i className="fa fa-close" aria-hidden="true" />
                    </span>
                    <span className="badge">Mango</span>
                    <h6>Đầm Ngắn Xẻ Vai</h6>
                    <p className="size">Kích Thước: S</p>
                    <p className="color">Màu: Đỏ</p>
                    <p className="price">$45.00</p>
                  </div>
                </a>
              </div>
              {/* Sản Phẩm Trong Giỏ */}
              <div className="single-cart-item">
                <a href="#" className="product-image">
                <img src="src/assets/img/product-img/giay-nike-air-force-1-nam-chinh-hang-tai-tphcm-AJ7747-100-king-shoes-sneaker-authentic-2.jpg"  />
                  {/* Mô Tả Sản Phẩm */}
                  <div className="cart-item-desc">
                    <span className="product-remove">
                      <i className="fa fa-close" aria-hidden="true" />
                    </span>
                    <span className="badge">Mango</span>
                    <h6>Đầm Ngắn Xẻ Vai</h6>
                    <p className="size">Kích Thước: S</p>
                    <p className="color">Màu: Đỏ</p>
                    <p className="price">$45.00</p>
                  </div>
                </a>
              </div>
              {/* Sản Phẩm Trong Giỏ */}
              <div className="single-cart-item">
                <a href="#" className="product-image">
                <img src="src/assets/img/product-img/Anh1.jpg"  />
                  {/* Mô Tả Sản Phẩm */}
                  <div className="cart-item-desc">
                    <span className="product-remove">
                      <i className="fa fa-close" aria-hidden="true" />
                    </span>
                    <span className="badge">Mango</span>
                    <h6>Đầm Ngắn Xẻ Vai</h6>
                    <p className="size">Kích Thước: S</p>
                    <p className="color">Màu: Đỏ</p>
                    <p className="price">$45.00</p>
                  </div>
                </a>
              </div>
            </div>
            {/* Tóm Tắt Giỏ Hàng */}
            <div className="cart-amount-summary">
              <h2>Tóm Tắt</h2>
              <ul className="summary-table">
                <li>
                  <span>Tạm Tính:</span> <span>$274.00</span>
                </li>
                <li>
                  <span>Phí Vận Chuyển:</span> <span>Miễn Phí</span>
                </li>
                <li>
                  <span>Giảm Giá:</span> <span>-15%</span>
                </li>
                <li>
                  <span>Tổng Cộng:</span> <span>$232.00</span>
                </li>
              </ul>
              <div className="checkout-btn mt-100">
                <a href="checkout.html" className="btn essence-btn">
                  Thanh Toán
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Kết Thúc Khu Vực Giỏ Hàng Bên Phải ##### */}
        {/* ##### Khu Vực Chi Tiết Sản Phẩm ##### */}
        <section className="single_product_details_area d-flex align-items-center">
          {/* Hình Ảnh Sản Phẩm */}
          <div className="single_product_thumb clearfix">
            <div className="product_thumbnail_slides owl-carousel">
            <img src="src/assets/img/product-img/Anh1.jpg"  />

              
            </div>
          </div>
          {/* Mô Tả Sản Phẩm */}
          <div className="single_product_desc clearfix">
            <span>Mango</span>
            <a href="cart.html">
              <h2>Đầm Dài Lấp Lánh Một Vai</h2>
            </a>
            <p className="product-price">
              <span className="old-price">$65.00</span> $49.00
            </p>
            <p className="product-desc">
              Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante.
              Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.
            </p>
            {/* Biểu Mẫu */}
            <form className="cart-form clearfix" method="post">
              {/* Hộp Chọn */}
              <div className="select-box d-flex mt-50 mb-30">
                <select name="select" id="productSize" className="mr-5">
                  <option value="value">Kích Thước: XL</option>
                  <option value="value">Kích Thước: X</option>
                  <option value="value">Kích Thước: M</option>
                  <option value="value">Kích Thước: S</option>
                </select>
                <select name="select" id="productColor">
                  <option value="value">Màu: Đen</option>
                  <option value="value">Màu: Trắng</option>
                  <option value="value">Màu: Đỏ</option>
                  <option value="value">Màu: Tím</option>
                </select>
              </div>
              {/* Hộp Giỏ Hàng & Yêu Thích */}
              <div className="cart-fav-box d-flex align-items-center">
                {/* Giỏ Hàng */}
                <button
                  type="submit"
                  name="addtocart"
                  value={5}
                  className="btn essence-btn"
                >
                  Thêm vào giỏ
                </button>
                {/* Yêu Thích */}
                <div className="product-favourite ml-4">
                  <a href="#" className="favme fa fa-heart" />
                </div>
              </div>
            </form>
          </div>
        </section>
      </>
  )
}

export default chitiet;
