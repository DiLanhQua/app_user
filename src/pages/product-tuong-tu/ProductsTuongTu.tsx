import { useEffect, useState } from "react";
import "./productTuongTu.scss";
import axios from "axios";
import Card_pro from "../Card_pro";

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

const ProductsTuongTu: React.FC<{ idCategory: number }> = ({ idCategory }) => {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      const [productResponse, detailResponse] = await Promise.all([
        axios.get(`https://localhost:7048/api/Products/get-user?Pagesize=12`),
        axios.get(
          "https://localhost:7048/api/DetailProduct/get-all-detailproduct?Pagesize=1000"
        ),
      ]);
      const productsData: any[] = productResponse.data.data; // Dữ liệu sản phẩm
      const detailsData = detailResponse.data.data;
      console.log(idCategory);
      const filteredProducts = productsData.filter(
        (product: any) => product.categoryId === idCategory
      );

      const combinedProducts: ProductDetail[] = filteredProducts.map(
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
  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {products.length > 0 ? (
            products
              .slice(0, 8)
              .map((product) => <Card_pro key={product.Id} product={product} />)
          ) : (
            <div>Không có sản phẩm nào để hiển thị.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsTuongTu;
