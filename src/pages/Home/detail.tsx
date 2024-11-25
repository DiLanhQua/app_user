import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  details: DetailProductDTO[];
}

interface CategoryDetail {
  id: number;
  Image: string;
  CategoryName: string;
}

const chitiet: React.FC = () => {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const [category, setCategory] = useState<CategoryDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  const fetchProductsAndCategory = async () => {
    try {
      const [productResponse, detailResponse] = await Promise.all([
        axios.get(`https://localhost:7048/api/Products/get-product/${id}`),
        axios.get(`https://localhost:7048/api/DetailProduct/get-detailproduct/${id}`),
      ]);

      // Extracting product data
      const productData = productResponse.data;
      const detailsData = detailResponse.data;

      // Fetching category data
      const categoryResponse = await axios.get(
        `https://localhost:7048/api/Category/get-category-by-id/${productData.categoryId}`
      );
      const categoryData = categoryResponse.data;

      // Constructing combined product object
      const combinedProduct: ProductDetail = {
        id: productData.id,
        ProductName: productData.productName,
        Description: productData.description,
        CategoryId: productData.categoryId,
        BrandId: productData.brandId,
        details: detailsData
          .filter((detail: any) => detail.productId === productData.id)
          .map((detail: any) => ({
            id: detail.id,
            Size: detail.size || "N/A",
            Price: detail.price || 0,
            Quantity: detail.quantity || 0,
            Gender: detail.gender || "Unspecified",
            Status: detail.status || "Unknown",
            ColorId: detail.colorId || 0,
          })),
      };

      // Setting the state
      setProducts([combinedProduct]);
      setCategory({
        id: categoryData.id,
        Image: categoryData.image,
        CategoryName: categoryData.categoryName,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsAndCategory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const product = products[0];

  return (
    <>
      <section className="single_product_details_area d-flex align-items-center">
        {/* Hình Ảnh Sản Phẩm */}
        <div className="single_product_thumb clearfix">
          <div className="product_thumbnail_slides owl-carousel">
            <img src="src/assets/img/product-img/Anh1.jpg" alt="Product" />
          </div>
        </div>
        {/* Mô Tả Sản Phẩm */}
        <div className="single_product_desc clearfix">
          <span>Category: {category?.CategoryName}</span>
          <h2>{product.ProductName}</h2>
          <p className="product-price">
            <span className="old-price">1.890.000₫</span> 1.500.000₫
          </p>
          <p className="product-desc">{product.Description}</p>
          {/* Biểu Mẫu */}
          <form className="cart-form clearfix" method="post">
            {/* Hộp Chọn */}
            <div className="select-box d-flex mt-50 mb-30">
              <select name="select" id="productSize" className="mr-5">
                {product.details.map((detail) => (
                  <option key={detail.id} value={detail.Size}>
                    Kích Thước: {detail.Size}
                  </option>
                ))}
              </select>
              <select name="select" id="productColor">
                {product.details.map((detail) => (
                  <option key={detail.id} value={detail.ColorId}>
                    Màu: {detail.ColorId}
                  </option>
                ))}
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
  );
};

export default chitiet;
