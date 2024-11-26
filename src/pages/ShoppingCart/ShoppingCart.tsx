import React from "react";
import img from "./../../image/breadcumb.jpg";
import "./ShoppingCart.css";
const GioHang: React.FC = () => {

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
                                <h2>Giỏ hàng
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg0 p-t-104 p-b-116" style={{ fontWeight: "bold" }}>
                <div className="flex-w flex-tr">
                    <div className="cond bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                        <div className="row" style={{ marginLeft: 20, marginTop: 20, marginBottom: 20 }}>
                            <div className="col-md-8">

                                <table className="table" >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Sản Phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Tổng</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td>
                                                <div style={{ marginTop: 35 }}>
                                                    1
                                                </div>
                                            </td>
                                            <td style={{ width: 400 }}>
                                                <div className="row">
                                                    <div className="col-4">

                                                        <img
                                                            src="https://myshoes.vn/image/cache/catalog/2023/nike/nk1/giay-nike-air-max-ap-nam-trang-navy-01-800x800.jpg.webp"
                                                            className="cart-thumb"
                                                            alt=""

                                                            style={{ width: "78px", height: "78px" }}
                                                        />
                                                    </div>
                                                    <div className="col-8" style={{ marginTop: 10 }}>
                                                        Giày Nike Court Vision Low Nam - Xanh Dương

                                                    </div>
                                                </div>
                                            </td>
                                            <td >
                                                <div style={{ marginTop: 10 }}>1.500.000₫</div>
                                            </td>
                                            <td >
                                                <div className="wrap-num-product flex-w m-l-auto m-r-0" style={{ marginTop: 10 }}>
                                                    <div
                                                        className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"

                                                    >
                                                        <i className="fs-16 zmdi zmdi-minus" />
                                                    </div>
                                                    <input
                                                        className="mtext-104 cl3 txt-center num-product"
                                                        type="number"
                                                        min="1"
                                                        max="10"
                                                        defaultValue={1}
                                                        style={{ color: "black" }}

                                                    />

                                                    <div
                                                        className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"

                                                    >
                                                        <i className="fs-16 zmdi zmdi-plus" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div style={{ marginTop: 10 }}>1.500.000₫</div></td>
                                            <td>
                                                <div style={{ marginTop: 10 }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                        {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                                                        <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                                                    </svg>
                                                </div>

                                            </td>
                                        </tr>
                                        <tr >
                                            <td>
                                                <div style={{ marginTop: 35 }}>
                                                    2
                                                </div>
                                            </td>
                                            <td style={{ width: 400 }}>
                                                <div className="row">
                                                    <div className="col-4">

                                                        <img
                                                            src="https://myshoes.vn/image/cache/catalog/2023/lacoste/086/giay-lacoste-angular-textile-nam-trang-nau-01-800x800.jpg.webp"
                                                            alt=""
                                                            style={{ width: "78px", height: "78px" }}
                                                        />

                                                    </div>
                                                    <div className="col-8" style={{ marginTop: 10 }}>
                                                        Giày Lacoste Angular Textile Nam - Trắng Nâu

                                                    </div>
                                                </div>
                                            </td>
                                            <td >
                                                <div style={{ marginTop: 10 }}>1.500.000₫</div>
                                            </td>
                                            <td >
                                                <div className="wrap-num-product flex-w m-l-auto m-r-0" style={{ marginTop: 10 }}>
                                                    <div
                                                        className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"

                                                    >
                                                        <i className="fs-16 zmdi zmdi-minus" />
                                                    </div>
                                                    <input
                                                        className="mtext-104 cl3 txt-center num-product"
                                                        type="number"
                                                        min="1"
                                                        max="10"
                                                        defaultValue={1}
                                                        style={{ color: "black" }}

                                                    />

                                                    <div
                                                        className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"

                                                    >
                                                        <i className="fs-16 zmdi zmdi-plus" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div style={{ marginTop: 10 }}>1.500.000₫</div></td>
                                            <td>
                                                <div style={{ marginTop: 10 }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                        {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                                                        <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                                                    </svg>
                                                </div>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr />
                                <div className="row container mt-50 bro">
                                    <div className="col-8">
                                        <button
                                            type="button" className="btn btn-primary"
                                        >
                                            Tiếp tục mua hàng
                                        </button>
                                    </div>
                                    <div className="col-4">
                                        <button
                                            type="button" className="btn btn-secondary"
                                        >
                                            Cập nhật giỏ hàng
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="co-4 bro">
                                <h4>Mã giảm giá</h4>
                                <div className="row">
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" placeholder="Mã ưu đãi" />

                                    </div>
                                    <div className="col-md-4">
                                        <button type="button" style={{ width: 100, marginTop: 5 }} className="btn btn-primary ">Áp dụng </button>

                                    </div>
                                </div>
                                <h4 style={{ marginTop: 20 }}>Tổng giỏ hàng</h4>
                                <hr />
                                <div className="row">
                                    <div className="col-md-9">
                                        <p>Tạm tính</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p style={{ color: "blue" }} >3.000.000₫</p>

                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-9">
                                        <p>Tổng</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p style={{ color: "blue" }}>3.000.000₫</p>

                                    </div>
                                </div>
                                <div  className="container mt-3 justify-content-center" style={{ marginLeft: 90 }}>
                                    <button 
                                        type="button" className="btn btn-primary"
                                    >
                                        Thanh Toán
                                    </button>
                                </div>

                            </div>

                        </div>

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
                                            {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
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

                    </div>
                </div>


            </section>{" "}


        </>
    );
};

export default GioHang;
