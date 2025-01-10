import { Pressable, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

import { Image } from "expo-image";

export default function Profile() {
  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("access_token");
    router.navigate("/auth/login");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source="https://picsum.photos/seed/696/3000/2000"
            contentFit="cover"
            transition={1000}
          />
        </ThemedView>
        <ThemedText style={styles.usernameText} type="defaultSemiBold">
          Rahul Thakur
        </ThemedText>

        <ThemedText style={styles.emailText}>
          rahulthakurcoder@gmail.com
        </ThemedText>

        {/* 
        
        <Pressable style={styles.button} onPress={handleLogout}>
          <ThemedText>Logout</ThemedText>
        </Pressable> */}
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    flex: 1,
  },
  avatarContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 100,
  },
  usernameText: {
    textAlign: "center",
    fontSize: 22,
    paddingTop: 24,
  },
  emailText: {
    textAlign: "center",
    paddingTop: 12,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
