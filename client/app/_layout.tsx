import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import SocketProvider from "@/context/SocketProvider";
import { HeaderBackButton } from "@react-navigation/elements";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 2000,
  fade: true,
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.otf"),
  });

  const queryClient = new QueryClient();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SocketProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack
            screenOptions={{
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
            <Stack.Screen
              name="auth"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="chat"
              options={{
                headerShown: true,
                headerTitle: "Message",
                headerLeft: () => <HeaderBackButton onPress={router.back} />,
              }}
            />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </SocketProvider>
    </QueryClientProvider>
  );
}
