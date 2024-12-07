import React from "react";
import "./card-products.scss";

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
      style={{
        width: "100%",
        border: "1px solid #ddd",
        borderRadius: "4px",
        overflow: "hidden",
        textAlign: "center",
        marginBottom: "0px",
        height: "auto",
      }}
    >
      <div
        className="product-img"
        style={{ height: "20rem", overflow: "hidden" }}
      >
        <img
          src={`https://localhost:7048/${product.Image}`}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "4px 4px 0px 0px",
          }}
        />
      </div>
      <div className="product-description">
        <a href={`/detail/${product.Id}`}>
          <h6>{product.ProductName}</h6>
        </a>
        <span> {product.BrandName} </span>
        <p className="product-price">
          {firstDetail?.Price?.toLocaleString("vi-VN")},000 VND
        </p>
        <div className="btn-add">
          <a href={`/detail/${product.Id}`} className="btn essence-btn">
            Thêm giỏ hàng
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card_pro;
