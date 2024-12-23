
import { Stack } from "expo-router";

export default function AuthLayout() {


    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                headerShown: false
            }}
        >
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
        </Stack>
    );
}
