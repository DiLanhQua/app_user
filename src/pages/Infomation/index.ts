import axios from 'axios';


export interface AccountDto {
  accountId: number;
  userName: string;
  email: string;
  phone: string;
  fullName: string;
  address: string;

  imageUrl?: string; 
}


export const getUserById = async (id: number): Promise<AccountDto | null> => {
  try {
    const response = await axios.get<AccountDto>(`https://localhost:7048/api/Login/get-login-by-id/${id}`);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy thông tin người dùng:', error);
    return null; 
  }
};
