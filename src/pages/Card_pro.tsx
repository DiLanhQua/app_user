import React from "react";

interface DetailProductDTO {
  Id:number;
  Size: string;
  Price: number;
  Quantity: number;
  Gender: string;
  Status: string;
  ColorId: number;
}

interface ProductDetail {
  Id:number;
  ProductName: string;
  Description: string;
  CategoryId: number;
  BrandId: number;
  details: DetailProductDTO[];
}

interface CardProProps {
  product: ProductDetail;
}

const Card_pro: React.FC<CardProProps> = ({ product }) => {
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
        textAlign: "center",
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
      <div
        className="product-description"
        style={{ height: "35%", paddingTop: "10px" }}
      >
        <span>{product.Description}</span>
        <a href={`/detail/${product.Id}`}>
          <h6>{product.ProductName}</h6>
        </a>
        <p className="product-price">
          {product.details[0]?.Price?.toLocaleString("vi-VN")} VND
        </p>
        <div className="hover-content">
          <div className="add-to-cart-btn">
            <button className="btn essence-btn">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_pro;
