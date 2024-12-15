import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons

const InputBox = () => {
  return (
    <View style={styles.container}>
      {/* Plus Icon */}
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="add" size={24} color="#1E90FF" />
      </TouchableOpacity>

      {/* Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Type a message ..."
      />

      {/* Send Button */}
      <TouchableOpacity style={styles.sendButton}>
        <Ionicons name="paper-plane" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
  },
  iconButton: {
    padding: 10,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    marginHorizontal: 10,
  },
  sendButton: {
    backgroundColor: "#1E90FF",
    borderRadius: 25,
    padding: 12,
    elevation: 2, // Adds subtle shadow on Android
    shadowColor: "#000", // Shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
});

export default InputBox;
