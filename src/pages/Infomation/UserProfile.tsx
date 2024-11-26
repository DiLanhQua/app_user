import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById, AccountDto } from "./index";
import { toast } from "react-toastify";

const Information: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Lấy `id` từ URL
  const [user, setUser] = useState<AccountDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) return;
      setLoading(true);
      const userData = await getUserById(Number(id));
      setUser(userData);
      setLoading(false);
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <p>Đang tải thông tin người dùng...</p>;
  }

  if (!user) {
    toast.error("Không tìm thấy thông tin của bạn");
    return <p>Không tìm thấy thông tin người dùng.</p>;
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>Thông Tin Cá Nhân</h2>
      <p>
        <img src="/{user.imageUrl}" />
      </p>
      <input type="file" />
      <p>
        <strong>Tên đăng nhập:</strong> {user.userName}
      </p>
      <p>
        <strong>Họ và tên:</strong> {user.fullName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Số điện thoại:</strong> {user.phone}
      </p>
      <p>
        <strong>Địa chỉ:</strong> {user.address}
      </p>

      {user.imageUrl && (
        <div>
          <strong>Ảnh đại diện:</strong>
          <div>
            <img
              src={user.imageUrl}
              alt="Avatar"
              style={{ width: "150px", borderRadius: "50%" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;
