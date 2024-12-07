import React, { useEffect, useState } from "react";
import img from "./../../image/breadcumb.jpg";
import "./ShoppingCart.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface Order {
  id: number;
  total: number;
  timeOrder: string;
  statusOrder: number;
  paymentMethod: string;
  voucherId: number | null;
  accountId: number;
}

interface OrderDetail {
  detailProductId: number;
  quantity: number;
  orderId: number;
}

interface CartItem {
  productId: number;
  productName: string;
  size: string;
  colorId: number;
  quantity: number;
  maKH: string; // Account ID
  price: number;
  imageUrl: string; // Image URL
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productDetail: DetailProductDtos; // Product detail with ID
  link: string;
}

const GioHang: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [order, setOrder] = useState<Order | null>(null);
  const [customerInfo, setCustomerInfo] = useState<any | null>(null);
  const [vouchers, setVouchers] = useState<any[]>([]);
  const [selectedVoucher, setSelectedVoucher] = useState<any | null>(null);
  const [recipientName, setRecipientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    const fetchVouchers = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7048/api/Voucher/get-all-vouchers"
        );
        console.log(response.data.data, "vouchers");

        setVouchers(response.data.data);
      } catch (error) {
        console.error("Error fetching vouchers:", error);
      }
    };

    fetchVouchers();
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
    const storedCustomerInfo = sessionStorage.getItem("user");
    if (storedCustomerInfo) {
      setCustomerInfo(JSON.parse(storedCustomerInfo));
    }
  }, [cartItems]);

  const updateQuantity = (
    productId: number,
    productDetailId: number,
    newQuantity: number
  ) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId &&
        item.productDetail.id === productDetailId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeItem = (productIdDetail: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(
        (item) => item.productDetail.id !== productIdDetail
      );
      console.log("Updated Items:", updatedItems); // Debug xem có sản phẩm nào còn lại không
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      return [...updatedItems];
    });
  };

  const handleSubmit = (idOrder: number) => {
    // Dữ liệu từ các ô input
    const model: CreateDeliveryAddress = {
      address: address,
      note: note,
      phone: phoneNumber,
    };

    try {
      const response = axios.post(
        `https://localhost:7048/api/DeliveryAddress/${idOrder}`,
        model
      );

      console.log(response);
    } catch (error) {
      console.error("Error creating delivery address:", error);
    }

    // Xử lý logic tiếp theo tại đây (gửi API, kiểm tra dữ liệu, v.v.)
  };
  const createOrder = async () => {
    if (!customerInfo) {
      alert("Vui lòng đăng nhập trước khi đặt hàng!");
      navigate("/login");
      return;
    }
    try {
      const newOrder: Order = {
        id: 0,
        total: calculateTotal() - calculateDiscount(),
        timeOrder: new Date().toISOString(),
        statusOrder: 1,
        paymentMethod: "string", // Replace with actual payment method
        voucherId: selectedVoucher?.id || null,
        accountId: customerInfo.accountId, // Use real account ID
      };

      const response = await axios.post(
        "https://localhost:7048/api/Order/add-order",
        newOrder
      );
      console.log(response, "response");

      const createdOrder = response.data;
      console.log(createdOrder.orderId, "createdOrder");

      setOrder(createdOrder);
      addOrderDetails(createdOrder.orderId);
      handleSubmit(createdOrder.orderId);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const addOrderDetails = async (orderId: number) => {
    console.log(cartItems, "cartItems");
    console.log(orderId, "orderId");

    try {
      const promises = cartItems.map((item) => {
        const orderDetail: OrderDetail = {
          detailProductId: item.productDetail.id,
          quantity: item.quantity,
          orderId,
        };

        return axios.post(
          "https://localhost:7048/api/DetailOrder/add-detailorder",
          orderDetail
        );
      });

      // Đợi tất cả các request hoàn thành
      await Promise.all(promises);

      // Xóa giỏ hàng khỏi localStorage
      localStorage.removeItem("cart");
      console.log("Order details added and cart cleared from localStorage.");
      alert("Đơn đat mua hàng thành công!");
      location.reload();
    } catch (error) {
      console.error("Error adding order details:", error);
    }
  };

  const caculateItem = (item: any) => {
    return item.quantity * item.productDetail.Price * 1000;
  };
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + caculateItem(item), 0);
  };

  //   Hàm lọc các voucher hợp lệ
  const getFilteredVouchers = () => {
    const total = calculateTotal();
    console.log(total, "total");

    console.log(vouchers.filter((voucher) => voucher.min_Order_Value <= total));

    return vouchers.filter((voucher) => voucher.min_Order_Value <= total);
  };
  const calculateDiscount = () => {
    if (!selectedVoucher) return 0; // Nếu không có voucher, không giảm giá

    const total = calculateTotal();
    if (selectedVoucher.discountType == "Percentage") {
      console.log("giảm theo phần trăm");

      // Giảm theo phần trăm
      return (total * selectedVoucher.discount) / 100;
    } else {
      console.log(
        calculateTotal() - selectedVoucher.discount,
        "calculateTotal() - selectedVoucher.discount"
      );
      console.log(calculateTotal(), "calculateTotal()");
      console.log(selectedVoucher.discount, "selectedVoucher.discount");

      // Giảm theo số tiền cố định
      return selectedVoucher.discount * 1000;
    }
  };
  const handleVoucherChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const voucherId = event.target.value;
    console.log(voucherId, "voucherId");

    const voucher = vouchers.find(
      (v) => v.id.toString() === voucherId.toString()
    );
    setSelectedVoucher(voucher || null);
    console.log(voucher, "voucher selected");
  };
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
                <h2>Giỏ hàng</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg0 p-t-104 p-b-116" style={{ fontWeight: "bold" }}>
        <div className="flex-w flex-tr">
          <div className="cond bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
            <div
              className="row"
              style={{ marginLeft: 20, marginTop: 20, marginBottom: 20 }}
            >
              <div className="col-md-8">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Sản Phẩm</th>
                      <th>Size</th>
                      <th>Màu</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tổng</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr>
                        <td>
                          <div style={{ marginTop: 35 }}>{index + 1}</div>
                        </td>
                        <td style={{ width: 400 }}>
                          <div className="row">
                            <div className="col-4">
                              <img
                                src={`https://localhost:7048/${item.link}`}
                                className="cart-thumb"
                                alt=""
                                style={{
                                  width: "78px",
                                  height: "78px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                            <div className="col-8" style={{ marginTop: 10 }}>
                              {item.productName}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div style={{ marginTop: 10 }}>
                            SIZE {item.productDetail.Size}
                          </div>
                        </td>
                        <td>
                          <div style={{ marginTop: 10 }}>
                            {item.productDetail?.Color.nameColor}
                          </div>
                        </td>
                        <td>
                          <div style={{ marginTop: 10 }}>
                            {(item.productDetail.Price * 1000).toLocaleString(
                              "vi-VN",
                              {
                                style: "currency",
                                currency: "VND",
                              }
                            )}
                          </div>
                        </td>
                        <td>
                          <div
                            className="wrap-num-product flex-w m-l-auto m-r-0"
                            style={{ marginTop: 10 }}
                          >
                            <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                              <div className="fs-16 zmdi zmdi-minus" />
                            </div>
                            <input
                              className="mtext-104 cl3 txt-center num-product"
                              type="number"
                              min="1"
                              max="10"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.productId,
                                  item.productDetail.id,
                                  Number(e.target.value)
                                )
                              }
                              style={{ color: "black" }}
                            />

                            <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                              <div className="fs-16 zmdi zmdi-plus" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div style={{ marginTop: 10 }}>
                            {caculateItem(item).toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </div>
                        </td>
                        <td>
                          <div
                            style={{ marginTop: 10 }}
                            onClick={() => removeItem(item.productDetail.id)}
                          >
                            <svg
                              style={{ width: 20, height: 20 }}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="co-4 bro">
                <h4>Mã giảm giá</h4>
                <div className="row">
                  <div className="col-md-8">
                    <select
                      className="form-control"
                      onChange={handleVoucherChange}
                    >
                      <option value="">Chọn voucher</option>
                      {getFilteredVouchers().map((voucher, index) => (
                        <option key={index} value={voucher.id}>
                          {voucher.voucherName} - Giảm {voucher.discount}%
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <button
                      type="button"
                      style={{ width: 100, marginTop: 5 }}
                      className="btn btn-primary "
                    >
                      Áp dụng
                    </button>
                  </div>
                </div>
                <h4 style={{ marginTop: 20 }}>Thông tin nhận hàng</h4>
                <hr />
                <div className="container-form-delivery">
                  <div className="form-infor-delivery">
                    <strong>Tên người nhận:</strong>
                    <input
                      type="text"
                      placeholder="Nhập tên người nhận"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)} // Cập nhật state
                    />
                  </div>
                  <div className="form-infor-delivery">
                    <strong>Số điện thoại:</strong>
                    <input
                      type="text"
                      placeholder="Nhập số điện thoại"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)} // Cập nhật state
                    />
                  </div>
                  <div className="form-infor-delivery">
                    <strong>Địa chỉ:</strong>
                    <input
                      type="text"
                      placeholder="Nhập địa chỉ"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)} // Cập nhật state
                    />
                  </div>
                  <div className="form-infor-delivery">
                    <strong>Ghi chú:</strong>
                    <input
                      type="text"
                      placeholder="Nhập ghi chú"
                      value={note}
                      onChange={(e) => setNote(e.target.value)} // Cập nhật state
                    />
                  </div>
                </div>
                <hr />
                <h4 style={{ marginTop: 20 }}>Tổng giỏ hàng</h4>
                <hr />
                <div className="row">
                  <div className="col-md-9">
                    <p>Tạm tính</p>
                  </div>
                  <div className="col-md-3">
                    <p style={{ color: "blue" }}>
                      {calculateTotal().toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-9">
                    <p>Tổng</p>
                  </div>
                  <div className="col-md-3">
                    <p style={{ color: "blue" }}>
                      {(calculateTotal() - calculateDiscount()).toLocaleString(
                        "vi-VN",
                        { style: "currency", currency: "VND" }
                      )}
                    </p>
                  </div>
                </div>
                <div
                  className="container mt-3 justify-content-center"
                  style={{ marginLeft: 90 }}
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={createOrder}
                  >
                    Thanh Toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GioHang;
