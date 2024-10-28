import React from 'react';
const Card_pro = () => {
  return (
    <div
      className="single-product-wrapper"
      style={{
        width: "260px",
        height: "350px",
        padding: "15px",
        boxSizing: "border-box",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        margin: "10px",
        textAlign: "center"
      }}
    >
      {/* Hình ảnh sản phẩm */}
      <div className="product-img" style={{ height: "65%", overflow: "hidden" }}>
        <img
          src="../../../src/assets/img/product-img/sp1.jpg"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
      </div>
      {/* Mô tả sản phẩm */}
      <div  className="product-description" style={{ height: "35%", paddingTop: "10px" }}>
        <span>ADIDAS</span>
        <a href="/detail">
          <h6>GIÀY ADIDAS AB12</h6>
        </a>
        <p className="product-price">1200000 VND</p>
        <div className="hover-content">
          <div className="add-to-cart-btn">
            <a href="#" className="btn essence-btn">Thêm giỏ hàng</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_pro;
