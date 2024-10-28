import React, { useEffect, useState } from "react";
import "./login.css";

const Login = () => {
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const toggleButton = document.querySelector('.img__btn');
    const container = document.querySelector('.cont');

    const toggleSignup = () => {
      container?.classList.toggle('s--signup');
    };

    if (toggleButton && container) {
      toggleButton.addEventListener('click', toggleSignup);

      // Clean up event listener when component unmounts
      return () => toggleButton.removeEventListener('click', toggleSignup);
    }
  }, []);

  const handleForgotPassword = () => {
    setForgotPasswordOpen(true);
  };

  const handleSendResetLink = () => {
    // Xử lý gửi liên kết đặt lại mật khẩu qua email
    alert(`Đã gửi liên kết đặt lại mật khẩu tới ${email}`);
    setForgotPasswordOpen(false);
  };

  return (
    <>
      <br />
      <br />
      <div className="cont">
        <div className="form sign-in">
          <h2>Chào mừng</h2>
          <label>
            <span>Tên đăng nhập</span>
            <input type="text" />
          </label>
          <label>
            <span>Mật khẩu</span>
            <input type="password" />
          </label>
          <p className="forgot-pass" onClick={handleForgotPassword}>
            Quên mật khẩu?
          </p>
          <button type="button" className="submit-nhap">
            Đăng nhập
          </button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h3>Bạn chưa có tài khoản? Hãy đăng ký!</h3>
            </div>
            <div className="img__text m--in">
              <h3>Nếu bạn đã có tài khoản, hãy đăng nhập.</h3>
            </div>
            <div className="img__btn">
              <span className="m--up">Đăng ký</span>
              <span className="m--in">Đăng nhập</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Tạo tài khoản của bạn</h2>
            <div className="form-grid">
              <div className="form-column">
                <label>
                  <span>Tên đăng nhập</span>
                  <input type="text" />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" />
                </label>
                <label>
                  <span>Mật khẩu</span>
                  <input type="password" />
                </label>
              </div>
              <div className="form-column">
                <label>
                  <span>Số điện thoại</span>
                  <input type="text" />
                </label>
                <label>
                  <span>Họ và tên</span>
                  <input type="text" />
                </label>
                <label>
                  <span>Địa chỉ</span>
                  <input type="text" />
                </label>
              </div>
            </div>
            <button type="button" className="submit-nhap">
              Đăng ký
            </button>
          </div>
        </div>
      </div>

      {/* Modal Quên mật khẩu */}
      {isForgotPasswordOpen && (
        <div className="modal">
          <div className="modal-content">
  <h2>Quên mật khẩu</h2>
  <p>Nhập địa chỉ email của bạn để nhận liên kết đặt lại mật khẩu.</p>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Nhập email của bạn"
  />
  <div className="button-group">
    <button onClick={handleSendResetLink}>Gửi liên kết</button>
    <button onClick={() => setForgotPasswordOpen(false)}>Đóng</button>
  </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
