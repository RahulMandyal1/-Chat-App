// src/utils/auth.ts

import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "access_token";

async function setToken(value: string): Promise<void> {
  await SecureStore.setItemAsync(TOKEN_KEY, value);
}

async function getToken(): Promise<string | null> {
  const result = await SecureStore.getItem(TOKEN_KEY);
  return result ? result : null;
}

async function isAuthenticated(): Promise<boolean> {
  const token = await SecureStore.getItem(TOKEN_KEY);
  return token ? true : false;
}

async function logout(): Promise<void> {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
  router.navigate("/auth/login");
}

export { setToken, getToken, isAuthenticated, logout };
