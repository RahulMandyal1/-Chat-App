import { Alert, Button, Pressable, StyleSheet, TextInput, Text } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";



export default function TabTwoScreen() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue) {
      Alert.alert("Data Submitted", `You submitted: ${inputValue}`);
      setInputValue(""); // Reset input field after submission
    } else {
      Alert.alert("Error", "Please enter some data");
    }
  };


  const handleLogout =  async() => { 
    await SecureStore.deleteItemAsync("access_token");
    router.navigate("/auth/login");
    
  }

  return (
    <SafeAreaView>
      <ThemedView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter some text"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <Pressable style={styles.button} onPress={handleSubmit}>
          <ThemedText>
            Submit it
          </ThemedText>
        </Pressable>

     <Pressable style={styles.button} onPress={handleLogout}>
          <ThemedText>
            Logout
          </ThemedText>
        </Pressable>


      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
