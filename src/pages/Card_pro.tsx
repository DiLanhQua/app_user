import React from "react";

interface DetailProductDTO {
  Id: number;
  Size: string;
  Price: number;
  Quantity: number;
  Gender: string;
  Status: string;
  ColorId: number;
}

interface ProductDetail {
  Id: number;
  ProductName: string;
  Description: string;
  CategoryId: number;
  BrandId: number;
  Image: string;
  BrandName: string;
  details: DetailProductDTO[];
}

interface CardProProps {
  product: ProductDetail;
}

const Card_pro: React.FC<CardProProps> = ({ product }) => {
  const firstDetail = product.details[0];
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
      <div
        className="product-img"
        style={{ height: "65%", overflow: "hidden" }}
      >
        <img
          src={`https://localhost:7048/${product.Image}`}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
      <div
        className="product-description"
        style={{ height: "35%", paddingTop: "10px" }}
      >
        <a href={`/detail/${product.Id}`}>
          <h6 style={{ fontWeight: "bold" }}>{product.ProductName}</h6>
        </a>
        <span> {product.BrandName} </span>
        <p
          className="product-price"
          style={{ color: "#ff4500", fontWeight: "bold" }}
        >
          {firstDetail?.Price?.toLocaleString("vi-VN")},000 VND
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
