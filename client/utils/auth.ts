// src/utils/auth.ts
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "access_token";

export const AuthService = {
  getToken: async (): Promise<string | null> => {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    if (!token) return null;
    return token;
  },

  setToken: async (token: string): Promise<void> => {
    if (!token || typeof token !== "string") {
      return;
    }
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  },

  isAuthenticated: async () => {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    return token ? true : false;
  },

  logout: async (): Promise<void> => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    router.navigate("/auth/login");
  },
};
