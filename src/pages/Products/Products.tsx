import img from "./../../image/breadcumb.jpg";
import "./Products.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
interface DetailProductDTO {
  id: number;
  Size: string;
  Price: number;
  Quantity: number;
  Gender: string;
  Status: string;
  ColorId: number;
}

interface ProductDetail {
  id: number;
  ProductName: string;
  Description: string;
  CategoryId: number;
  BrandId: number;
  imagePrimary: string;
  categoryName: string;
  brandName: string;
  details: DetailProductDTO[];
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [brands, setBrands] = useState<BrandDtos[]>([]);
  const [categorys, setCategorys] = useState<CategoryDtos[]>([]);
  const [actionPrice, setActionPrice] = useState<number>(0);
  const [actionBrand, setActionBrand] = useState<number>(0);
  const [actionCategory, setActionCategory] = useState<number>(0);

  const addData = (productsData: any, detailsData: any) => {
    const combinedProducts: ProductDetail[] = productsData.map(
      (product: any) => ({
        id: product.id,
        ProductName: product.productName,
        Description: product.description,
        CategoryId: product.categoryId,
        BrandId: product.brandId,
        imagePrimary: product.imagePrimary,
        categoryName: product.categoryName,
        brandName: product.brandName,
        details: detailsData
          .filter((detail: any) => detail.productId === product.id) // Lọc chi tiết phù hợp với sản phẩm
          .map((detail: any) => ({
            id: detail.id,
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
  };
  const fetchProducts = async () => {
    try {
      const [productResponse, detailResponse] = await Promise.all([
        axios.get("https://localhost:7048/api/Products/get-user?Pagesize=16"),
        axios.get(
          "https://localhost:7048/api/DetailProduct/get-all-detailproduct?Pagesize=1000"
        ),
      ]);
      const productsData = productResponse.data.data;
      const detailsData = detailResponse.data.data;

      addData(productsData, detailsData);
      setActionBrand(0);
      setActionCategory(0);
      setActionPrice(0);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const sapXepSanPham = (action: number) => {
    setActionPrice(action);
    if (action === 1) {
      const sortedProducts = [...products].sort(
        (a, b) => a.details[0].Price - b.details[0].Price
      );
      setProducts(sortedProducts);
    } else if (action === 2) {
      const sortedProducts = [...products].sort(
        (a, b) => b.details[0].Price - a.details[0].Price
      );
      setProducts(sortedProducts);
    }
  };

  const sortByBrand = async (brandId: number) => {
    try {
      const [productResponse, detailResponse] = await Promise.all([
        axios.get("https://localhost:7048/api/Products/get-user?Pagesize=16"),
        axios.get(
          "https://localhost:7048/api/DetailProduct/get-all-detailproduct?Pagesize=1000"
        ),
      ]);
      const productsData: any[] = productResponse.data.data;
      const detailsData = detailResponse.data.data;

      const filteredProducts = productsData.filter(
        (a) => a.brandId === brandId
      );
      addData(filteredProducts, detailsData);
      setActionBrand(brandId);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const sortByCategory = async (categoryId: number) => {
    try {
      const [productResponse, detailResponse] = await Promise.all([
        axios.get("https://localhost:7048/api/Products/get-user?Pagesize=16"),
        axios.get(
          "https://localhost:7048/api/DetailProduct/get-all-detailproduct?Pagesize=1000"
        ),
      ]);
      const productsData: any[] = productResponse.data.data;
      const detailsData = detailResponse.data.data;

      const filteredProducts = productsData.filter(
        (a) => a.categoryId === categoryId
      );
      addData(filteredProducts, detailsData);
      setActionCategory(categoryId);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadDataFilter = async () => {
    try {
      const [category, brand] = await Promise.all([
        axios.get(
          "https://localhost:7048/api/Category/get-all-category?Pagesize=1000"
        ),
        axios.get(
          "https://localhost:7048/api/Brand/get-all-brand?Pagesize=1000"
        ),
      ]);
      setBrands(brand.data.data);
      setCategorys(category.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // bỏ dấu của chuỗi
  const removeVietnameseTones = (str: string): string => {
    return str
      .normalize("NFD") // Chuẩn hóa chuỗi thành dạng tổ hợp (decomposed)
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các ký tự dấu
      .replace(/đ/g, "d") // Thay thế chữ "đ" thường
      .replace(/Đ/g, "D"); // Thay thế chữ "Đ" hoa
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(async () => {
      const value = event.target.value;
      try {
        const [productResponse, detailResponse] = await Promise.all([
          axios.get("https://localhost:7048/api/Products/get-user?Pagesize=16"),
          axios.get(
            "https://localhost:7048/api/DetailProduct/get-all-detailproduct?Pagesize=1000"
          ),
        ]);
        const productsData: any[] = productResponse.data.data;
        const detailsData = detailResponse.data.data;

        const filteredProducts = productsData.filter((a) => {
          const normalizedValue = removeVietnameseTones(
            value.toLowerCase().trim()
          );

          const productName = removeVietnameseTones(
            a.productName.toLowerCase().trim()
          );
          return productName.includes(normalizedValue);
        });
        addData(filteredProducts, detailsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }, 200);
  };

  useEffect(() => {
    fetchProducts();
    loadDataFilter();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }
  return (
    <>
      <div
        className="breadcumb_area bg-img"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Sản Phẩm</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="shop_grid_area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-2">
              <div className="container-filter">
                <button
                  onClick={fetchProducts}
                  className={
                    actionPrice === 0 &&
                    actionCategory === 0 &&
                    actionBrand === 0
                      ? "btn-active"
                      : ""
                  }
                >
                  Tất cả
                </button>
                <div className="filer-content">
                  <h5>Khoảng giá:</h5>
                  <button
                    onClick={() => sapXepSanPham(1)}
                    className={actionPrice === 1 ? "btn-active" : ""}
                  >
                    Từ thấp đến cao
                  </button>
                  <button
                    onClick={() => sapXepSanPham(2)}
                    className={actionPrice === 2 ? "btn-active" : ""}
                  >
                    Từ cao đến thấp
                  </button>
                </div>
                <div className="filer-content">
                  <h5>Loại sản phẩm:</h5>
                  {categorys.map((category) => (
                    <button
                      onClick={() => sortByCategory(category.id)}
                      className={
                        actionCategory === category.id ? "btn-active" : ""
                      }
                    >
                      {" "}
                      {category.categoryName}{" "}
                    </button>
                  ))}
                </div>
                <div className="filer-content">
                  <h5>Thương hiệu:</h5>
                  {brands.map((brand) => (
                    <button
                      onClick={() => sortByBrand(brand.id)}
                      className={actionBrand === brand.id ? "btn-active" : ""}
                    >
                      {brand.brandName}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-10">
              <div className="shop_grid_product_area">
                <div className="row">
                  <div className="col-12">
                    <div className="product-topbar d-flex align-items-center justify-content-between">
                      <div className="total-products">
                        <p>
                          <span> {products.length} </span>
                          sản phẩm được tìm thấy
                        </p>
                      </div>

                      <div className="content-search">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Tìm kiếm sản phẩm"
                          onChange={handleChange}
                        />
                        <button>
                          <i className="ri-search-line"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {products.length === 0 ? (
                  <div className="text-center">
                    <h3>Không tìm thấy sản phẩm</h3>
                  </div>
                ) : (
                  <div className="">
                    {/* Load data */}
                    <div className="row">
                      {products.map((product) => (
                        <div className="col-12 col-sm-6 col-lg-3">
                          <div
                            key={product.id}
                            className="single-product-wrapper list-products"
                          >
                            <div className="product-img">
                              <img
                                src={`https://localhost:7048/${product.imagePrimary}`}
                                alt="Hình sản phẩm"
                                style={{
                                  width: "100%",
                                  height: "20rem",
                                  objectFit: "cover",
                                }}
                              />
                              <img
                                className="hover-img"
                                src={`https://localhost:7048/${product.imagePrimary}`}
                                style={{
                                  width: "100%",
                                  height: "20rem",
                                  objectFit: "cover",
                                }}
                                alt="Hình ảnh"
                              />
                              <div className="product-badge offer-badge">
                                <span>-30%</span>
                              </div>
                              <div className="product-favourite">
                                <a href="#" className="favme fa fa-heart" />
                              </div>
                            </div>
                            <div className="product-description">
                              <span className="btn-name">
                                <a href={`/detail/${product.id}`}>
                                  {product.ProductName}
                                </a>
                              </span>
                              <a className="product-brad">
                                {product.brandName}
                              </a>
                              {product.details.map((detail) => (
                                <p key={detail.id} className="product-price">
                                  {detail.Price.toLocaleString("vi-en")},000VND
                                </p>
                              ))}
                              {/* Hover Content */}
                              <div className="add-to-cart-btn">
                                <a
                                  href={`/detail/${product.id}`}
                                  className="btn essence-btn"
                                >
                                  Thêm vào giỏ hàng
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
