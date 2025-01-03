// src/utils/auth.ts
import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";

const TOKEN_KEY = "access_token";

export const AuthService = {
  getToken: async (): Promise<string | null> => {
    return await SecureStore.getItemAsync(TOKEN_KEY);
  },

  setToken: async (token: string): Promise<void> => {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  },

  isAuthenticated: async (): Promise<boolean> => {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    if (!token) return false;

    const decoded = jwt_decode(token);
    return decoded.exp * 1000 > Date.now();
  },

  logout: async (): Promise<void> => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  },
};
