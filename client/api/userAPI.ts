import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:3000/api/v1/user";

interface User {
  _id: string;
  name: string;
  email: string;
  profilePic?: string;
}

export const getUser = async (): Promise<User | null> => {
  const token = await SecureStore.getItem("access_token");
  if (token) {
    const { userId } = jwtDecode<{ userId: string }>(token);
    const response = await axios.get(`${API_URL}?id=${userId}`);
    return response.data;
  }
  return null;
};
