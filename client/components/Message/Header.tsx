import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

const Header = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/people-joy-happiness-concept-horizontal-happy-cheerful-fashionable-young-brunette-african-american-woman-grinning-broadly-feeling-happy-after-good-shopping-sale_344912-1002.jpg?semt=ais_hybrid",
          }}
          style={styles.avatar}
        />
        <ThemedView>
          <ThemedText style={styles.title}>Game 🎮</ThemedText>
          <ThemedText style={styles.subTitle}>3 members</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.icons}>
        <TouchableOpacity>
          <ThemedText style={styles.icon}>📷</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity>
          <ThemedText style={styles.icon}>📞</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  title: { fontWeight: "bold", fontSize: 16 },
  subTitle: { fontSize: 12, color: "gray" },
  icons: { flexDirection: "row" },
  icon: { fontSize: 20, marginLeft: 10 },
});

export default Header;
