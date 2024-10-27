// src/pages/DonHangUse.tsx
import React from "react";
import './DonHang.css';
import img from "./../../image/breadcumb.jpg";

const DonHangUse: React.FC = () => {

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
                <h2>Đơn hàng
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg0 p-t-104 p-b-116" style={{ textAlign: "center", fontWeight: "bold", marginLeft: "5%" }}>
        <div className="container-fluid">
          <div className="flex-w flex-tr">
            <div className="condh bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
              <div>

                <div className="pagination">
                  <button className="btn btn-outline-info "  >Đang xác nhận</button>
                  <button className="btn btn-outline-info" >Đang giao</button>
                  <button
                    className="btn btn-outline-info"
                  >
                    Hoàn thành
                  </button>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Hình Ảnh</th>
                      <th>Tên Sản Phẩm</th>
                      <th>Tên Khách Hàng</th>
                      <th>Địa Chỉ</th>
                      <th>Số Điện Thoại</th>
                      <th>Tình Trạng</th>
                      <th>Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <td>1</td>
                      <td>
                        <img
                          src="https://myshoes.vn/image/cache/catalog/2023/nike/nk1/giay-nike-air-max-ap-nam-trang-navy-01-800x800.jpg.webp"
                          className="cart-thumb"
                          alt=""

                          style={{ width: "250px", height: "250px" }}
                        />
                      </td>
                      <td>Giày Nike Court Vision Low Nam - Xanh Dương</td>
                      <td>Nguyen Văn A</td>
                      <td>
                        Thôn Đông - Buôn Ma Thuột
                      </td>
                      <td>0235898589</td>
                      <td>Đang xác nhận</td>
                    </tr>
                    <tr >
                      <td>2</td>
                      <td>
                        <img
                          src="https://myshoes.vn/image/cache/catalog/2024/puma/pm1/giay-puma-aviate-nam-den-trang-01-800x800.jpg.webp"
                          className="cart-thumb"
                          alt=""

                          style={{ width: "250px", height: "250px" }}
                        />
                      </td>
                      <td>Giày Puma Aviate Nam - Đen Trắng</td>
                      <td>Nguyen Văn A</td>
                      <td>
                        Thôn Đông - Buôn Ma Thuột
                      </td>
                      <td>0235898589</td>
                      <td>Đang xác nhận</td>
                    </tr>
                  </tbody>
                </table>
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
            </div>
          </div>
        </div>


      </section>{" "}
    </>
  );
};

export default DonHangUse;
