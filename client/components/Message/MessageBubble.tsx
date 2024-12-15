import React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

type Message = {
  text: string;
  time: string;
};

type MessageBubbleProps = {
  message: Message;
  isSent: boolean;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isSent }) => {
  return (
    <ThemedView
      style={[styles.container, isSent ? styles.sent : styles.received]}
    >
      <ThemedText style={styles.messageText(isSent)}>{message.text}</ThemedText>
      <ThemedText style={styles.time(isSent)}>{message.time}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "70%",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  sent: {
    backgroundColor: "#1565C0",
    alignSelf: "flex-end",
    marginRight: 10,
  },
  received: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  messageText: (isSent: boolean) => {
    return { color: isSent ? "white" : "#2C2D3A", fontSize: 14 };
  },
  time: (isSent: boolean) => {
    return {
      alignSelf: "flex-end",
      fontSize: 10,
      color: isSent ? "white" : "#2C2D3A",
      marginTop: 5,
    };
  },
});

export default MessageBubble;
