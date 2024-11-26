import Card_pro from '../Card_pro.tsx'; 
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

const Index = () => {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      const [productResponse, detailResponse] = await Promise.all([
        axios.get("https://localhost:7048/api/Products/get-all-product"), 
        axios.get("https://localhost:7048/api/DetailProduct/get-all-detailproduct"), 
      ]);
      const productsData = productResponse.data.data; // Dữ liệu sản phẩm
      const detailsData = detailResponse.data.data; 
      const combinedProducts: ProductDetail[] = productsData.map((product: any) => ({
        Id: product.id,
        ProductName: product.productName,
        Description: product.description,
        CategoryId: product.categoryId,
        BrandId: product.brandId,
        details: detailsData
          .filter((detail: any) => detail.productId === product.id) 
          .map((detail: any) => ({
            Id: detail.id,
            Size: detail.size || "N/A",
            Price: detail.price || 0,
            Quantity: detail.quantity || 0,
            Gender: detail.gender || "Unspecified",
            Status: detail.status || "Unknown",
            ColorId: detail.colorId || 0,
          })),
      }));
      setProducts(combinedProducts); 
      console.log(combinedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }
  return (
  <div>

    <section
    >
          <div>
    <img src="../../../src/assets/img/bg-img/bg11.jpg" alt="" />
    </div>
    </section>
    {/* ##### Welcome Area End ##### */}
    {/* ##### Top Catagory Area Start ##### */}
    <div className="top_catagory_area section-padding-80 clearfix">
      <div className="container">
        <div className="row justify-content-center">
          {/* Single Catagory */}
          <div className="col-12 col-sm-6 col-md-4">
            <div
              className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
              style={{ backgroundImage: "url(../../../src/assets/img/product-img/image.png)" }}
            >
              <div className="catagory-content">
                <a href="#">Giày da</a>
              </div>
            </div>
          </div>
          {/* Single Catagory */}
          <div className="col-12 col-sm-6 col-md-4">
            <div
              className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
              style={{ backgroundImage: "url(../../../src/assets/img/bg-img/anh2.png)" }}
            >
              <div className="catagory-content">
                <a href="#">SNEAKER</a>
              </div>
            </div>
          </div>
          {/* Single Catagory */}
          <div className="col-12 col-sm-6 col-md-4">
            <div
              className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
              style={{ backgroundImage: "url(../../../src/assets/img/bg-img/b1.png)" }}
            >
              <div className="catagory-content">
                <a href="#">Giày SanDal</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ##### Top Catagory Area End ##### */}

{/* ##### CTA Area Start ##### */}
<div className="cta-area">
<div className="container">
  <div className="row">
    <div className="col-12">
      <div
        className="cta-content"
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        {/* Hình ảnh bên trái */}
        <div
          className="cta-image"
          style={{
            width: "50%",
          }}
        >
          <img
            src="../../../src/assets/img/bg-img/1.jpg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Nội dung bên phải */}
        <div
          className="cta-text d-flex align-items-center"
          style={{
            width: "50%",
            padding: "20px",
            marginLeft: "15px", 
          }}
        >
       <div>
  <h2
    style={{
      textAlign: "left",
      marginBottom: "10px",
      fontSize: "80px",
    }}
  >
    Giảm giá sản phẩm{" "}
    <span style={{ color: "red", fontWeight: "bold" }}>30%</span>
  </h2>
  <a
    href="#"
    style={{
      display: "flex", // Sử dụng flexbox
      alignItems: "center", // Căn giữa theo chiều dọc
      justifyContent: "center", // Căn giữa theo chiều ngang
      width: "70%",
      height: "70px",
      textAlign: "center",
      fontSize: "30px",
      margin: "0 auto", // Căn giữa toàn bộ nút trong container
    }}
    className="btn essence-btn"
  >
    Mua ngay
  </a>
</div>

        </div>
      </div>
    </div>
  </div>
</div>

</div>
{/* ##### CTA Area End ##### */}


    {/* ##### New Arrivals Area Start ##### */}
    <section className="new_arrivals_area section-padding-80 clearfix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2>Sản phẩm bán chạy</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
  <div className="row">
  {products.length > 0 ? (
  products.slice(0, 8).map((product) => (
    <Card_pro key={product.Id} product={product} />
  ))
) : (
  <div>Không có sản phẩm nào để hiển thị.</div>
)}
          </div>
      </div>
    </section>
    {/* ##### New Arrivals Area End ##### */}
    {/* ##### New Arrivals Area Start ##### */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2>Sản phẩm Hot</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
  <div className="row">
  {products.length > 0 ? (
  products.slice(0, 8).map((product) => (
    <Card_pro key={product.Id} product={product} />
  ))
) : (
  <div>Không có sản phẩm nào để hiển thị.</div>
)}
          </div>
      </div>
    {/* ##### New Arrivals Area End ##### */}
    {/* ##### Brands Area Start ##### */}
    <div style={{ height:"80px" }} className="brands-area d-flex align-items-center justify-content-between">
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../../../src/assets/img/core-img/1.png"  />
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../../../src/assets/img/core-img/2.png"  />
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../../../src/assets/img/core-img/3.png" />
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../../../src/assets/img/core-img/4.png" />
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../../../src/assets/img/core-img/5.png"/>
      </div>
      {/* Brand Logo */}
      <div className="single-brands-logo">
        <img src="../../../src/assets/img/core-img/6.png"  />
      </div>
    </div>
    {/* ##### Brands Area End ##### */}
    {/* ##### Footer Area Start ##### */}

  </div>
  )
}

export default Index

