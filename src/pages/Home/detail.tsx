import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.scss";

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
  const [images, setImages] = useState<ImageDtos[]>([]);
  const [imagePrimary, setImagePrimary] = useState<ImageDtos>({} as ImageDtos);
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      const [productResponse, detailResponse, arrImage] = await Promise.all([
        axios.get(`https://localhost:7048/api/Products/get-product/${id}`),
        axios.get(
          `https://localhost:7048/api/DetailProduct/get-detailproduct/${id}`
        ),
        axios.get(`https://localhost:7048/api/Medias/get-all-medias/${id}`),
      ]);

      const productData = productResponse.data;
      const detailsData = detailResponse.data;
      setImages(arrImage.data);
      setImagePrimary(arrImage.data.find((a: ImageDtos) => a.isImage === true));
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
    const image: ImageDtos = images.find(
      (a: ImageDtos) => a.isImage === true
    ) as ImageDtos;
    const item = {
      productId: product.id,
      productName: product.ProductName,
      size,
      colorId,
      quantity: 1,
      price: product.details[0]?.Price,
      maKH: customerInfo?.accountId, // Thêm thông tin khách hàng vào sản phẩm,
      productDetail: product.details[0],
      link: image.link,
    };
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
  const changeImagePrimary = (image: ImageDtos) => {
    setImagePrimary(image);
  };
  const product = products[0];
  return (
    <div className="container-detail">
      <div className="container-detail-image">
        <div className="container-detail-image-main">
          <img src={`https://localhost:7048/${imagePrimary.link}`} alt="" />
        </div>
        <div className="container-detail-image-other">
          {images.map((item) =>
            item.id === imagePrimary.id ? null : (
              <img
                onClick={() => changeImagePrimary(item)}
                key={item.id} // Đảm bảo `key` duy nhất
                src={`https://localhost:7048/${item.link}`}
                alt="hình ảnh"
              />
            )
          )}
        </div>
      </div>
      <div className="container-detail-info">
        <div className="">
          <div className="">
            <h4>{product.ProductName}</h4>
            <h5>
              {product.details[0]?.Price},000 VND <span>700.000VND</span>
            </h5>
            <p className="brand">Brand</p>
            <div className="">
              <select id="productSize" className="mr-5">
                {product.details.map((detail) => (
                  <option key={detail.id} value={detail.Size}>
                    Kích Thước: {detail.Size}
                  </option>
                ))}
              </select>

              <select id="productColor" className="mr-5">
                {product.details.map((detail) => (
                  <option key={detail.id} value={detail.ColorId}>
                    Màu: {detail.ColorId}
                  </option>
                ))}
              </select>
            </div>
            <p className="des">{product.Description}</p>
          </div>
          <div className="group-btn">
            <button
              onClick={() => {
                const size = (
                  document.getElementById("productSize") as HTMLSelectElement
                ).value;
                const colorId = parseInt(
                  (document.getElementById("productColor") as HTMLSelectElement)
                    .value,
                  10
                );
                handleAddToCart(product, size, colorId);
              }}
            >
              Thêm vào giỏ hàng
            </button>
            <button>Mua ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chitiet;
