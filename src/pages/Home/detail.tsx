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

const Chitiet: React.FC = () => {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const [category, setCategory] = useState<CategoryDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [customerInfo, setCustomerInfo] = useState<any | null>(null);
  const { id } = useParams();

  // Lấy thông tin khách hàng từ localStorage
  useEffect(() => {
    const storedCustomerInfo = sessionStorage.getItem("user");
    if (storedCustomerInfo) {
      setCustomerInfo(JSON.parse(storedCustomerInfo));
    }
  }, []);

  const fetchProductsAndCategory = async () => {
    try {
      const [productResponse, detailResponse] = await Promise.all([
        axios.get(`https://localhost:7048/api/Products/get-product/${id}`),
        axios.get(
          `https://localhost:7048/api/DetailProduct/get-detailproduct/${id}`
        ),
      ]);

      const productData = productResponse.data;
      const detailsData = detailResponse.data;

      const categoryResponse = await axios.get(
        `https://localhost:7048/api/Category/get-category-by-id/${productData.categoryId}`
      );
      const categoryData = categoryResponse.data;

      const combinedProduct: ProductDetail = {
        id: productData.id,
        ProductName: productData.productName,
        Description: productData.description,
        CategoryId: productData.categoryId,
        BrandId: productData.brandId,
        details: detailsData
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .filter((detail: any) => detail.productId === productData.id)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  const handleAddToCart = (
    product: ProductDetail,
    size: string,
    colorId: number
  ) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log("====================================");
    console.log(product, "product");
    console.log("====================================");
    console.log(customerInfo, "customerInfo");

    const item = {
      productId: product.id,
      productName: product.ProductName,
      size,
      colorId,
      quantity: 1,
      price: product.details[0]?.Price,
      maKH: customerInfo.accountId, // Thêm thông tin khách hàng vào sản phẩm,
      productDetail: product.details[0],
    };
    console.log("====================================");
    console.log(item, "item");
    console.log("====================================");
    const existingIndex = cart.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (cartItem: any) =>
        cartItem.productId === item.productId &&
        cartItem.size === item.size &&
        cartItem.colorId === item.colorId
    );

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const product = products[0];

  return (
    <>
      <section className="single_product_details_area d-flex align-items-center">
        <div className="single_product_thumb clearfix">
          <div className="product_thumbnail_slides owl-carousel">
            <img
              src="../../../src/assets/img/product-img/Anh1.jpg"
              alt="Product"
            />
          </div>
        </div>
        <div className="single_product_desc clearfix">
          <span>{category?.CategoryName}</span>
          <h3>{product.ProductName}</h3>
          <p className="product-price">{product.details[0]?.Price} VND</p>
          <p className="product-desc">{product.Description}</p>
          <form className="cart-form clearfix" method="post">
            <div className="select-box d-flex mt-50 mb-30">
              <select id="productSize" className="mr-5">
                {product.details.map((detail) => (
                  <option key={detail.id} value={detail.Size}>
                    Kích Thước: {detail.Size}
                  </option>
                ))}
              </select>
              <select id="productColor">
                {product.details.map((detail) => (
                  <option key={detail.id} value={detail.ColorId}>
                    Màu: {detail.ColorId}
                  </option>
                ))}
              </select>
            </div>
            <div className="cart-fav-box d-flex align-items-center">
              <button
                type="button"
                onClick={() => {
                  const size = (
                    document.getElementById("productSize") as HTMLSelectElement
                  ).value;
                  const colorId = parseInt(
                    (
                      document.getElementById(
                        "productColor"
                      ) as HTMLSelectElement
                    ).value,
                    10
                  );
                  handleAddToCart(product, size, colorId);
                }}
                className="btn essence-btn"
              >
                Thêm vào giỏ
              </button>
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

export default Chitiet;
