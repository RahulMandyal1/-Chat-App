import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Image } from "expo-image";

const ProfileHeader = () => {
  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
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
});

export default ProfileHeader;
