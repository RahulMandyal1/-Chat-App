import axios from "axios";

interface User {
  _id: string;
  fullName: string;
  email: string;
  profilePic: string;
  accessToken: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

const API_URL = "http://localhost:3000/api/v1/auth/"; //TODO: change this later

export const registerUser = async ({
  fullName,
  email,
  password,
}: {
  fullName: string;
  email: string;
  password: string;
}): Promise<User> => {
  const response = await axios.post(API_URL, {
    fullName,
    email,
    password,
  });
  return response.data;
};

export const login = async ({
  email,
  password,
}: LoginCredentials): Promise<User> => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
};
