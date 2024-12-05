import Card_pro from "../Card_pro.tsx";
import axios from "axios";
import React, { useEffect, useState } from "react";
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

const Index = () => {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      const [productResponse, detailResponse] = await Promise.all([
        axios.get(`https://localhost:7048/api/Products/get-user?Pagesize=12`),
        axios.get(
          "https://localhost:7048/api/DetailProduct/get-all-detailproduct"
        ),
      ]);
      const productsData = productResponse.data.data; // Dữ liệu sản phẩm
      const detailsData = detailResponse.data.data;
      const combinedProducts: ProductDetail[] = productsData.map(
        (product: any) => ({
          Id: product.id,
          ProductName: product.productName,
          Description: product.description,
          CategoryId: product.categoryId,
          BrandId: product.brandId,
          Image: product.imagePrimary,
          BrandName: product.brandName,
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
        })
      );
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
      <section>
        <div>
          <img
            src="../../../src/assets/img/bg-img/bg11.jpg"
            alt=""
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
        </div>
      </section>
      {/* ##### Welcome Area End ##### */}

      <div className="row">
        <div className="col-3">
          <div className="row san">
            <div className="col-3">
              <svg
                aria-hidden="true"
                className="e-font-icon-svg e-fas-shipping-fast"
                viewBox="0 0 640 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" />
              </svg>
            </div>
            <div className="col-9">
              <h5>Vận chuyển toàn quốc</h5>
              <p>Đồng giá 50k</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row san">
            <div className="col-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M36.8 192l566.3 0c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0L121.7 0c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224l0 160 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-80 0-160-64 0 0 160-192 0 0-160-64 0zm448 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256-64 0z" />
              </svg>
            </div>
            <div className="col-9">
              <h5>Hệ thống cửa hàng</h5>
              <p>100 cửa hàng trên toàn hệ thống</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row san">
            <div className="col-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </div>
            <div className="col-9">
              <h6>Hotline: (+84)0313-728-397</h6>
              <p>Hỗ trợ khách hàng tận tâm</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row san">
            <div className="col-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z" />
              </svg>
            </div>
            <div className="col-9">
              <h6>7 ngày đổi trả sản phẩm</h6>
              <p>Nếu sản phẩm lỗi</p>
            </div>
          </div>
        </div>
      </div>

      {/* ##### Top Catagory Area Start ##### */}
      <div className="top_catagory_area section-padding-80 clearfix">
        <div className="container">
          <div className="row justify-content-center">
            {/* Single Catagory */}
            <div className="col-12 col-sm-6 col-md-4">
              <div
                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{
                  backgroundImage:
                    "url(../../../src/assets/img/product-img/image.png)",
                }}
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
                style={{
                  backgroundImage:
                    "url(../../../src/assets/img/bg-img/anh2.png)",
                }}
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
                style={{
                  backgroundImage: "url(../../../src/assets/img/bg-img/b1.png)",
                }}
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
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        30%
                      </span>
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
              products
                .slice(0, 8)
                .map((product) => (
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
            products
              .slice(0, 8)
              .map((product) => <Card_pro key={product.Id} product={product} />)
          ) : (
            <div>Không có sản phẩm nào để hiển thị.</div>
          )}
        </div>
      </div>
      {/* ##### New Arrivals Area End ##### */}
      {/* ##### Brands Area Start ##### */}
      <div
        style={{ height: "80px" }}
        className="brands-area d-flex align-items-center justify-content-between"
      >
        {/* Brand Logo */}
        <div className="single-brands-logo">
          <img src="../../../src/assets/img/core-img/1.png" />
        </div>
        {/* Brand Logo */}
        <div className="single-brands-logo">
          <img src="../../../src/assets/img/core-img/2.png" />
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
          <img src="../../../src/assets/img/core-img/5.png" />
        </div>
        {/* Brand Logo */}
        <div className="single-brands-logo">
          <img src="../../../src/assets/img/core-img/6.png" />
        </div>
      </div>
      {/* ##### Brands Area End ##### */}
      {/* ##### Footer Area Start ##### */}
    </div>
  );
};

export default Index;
