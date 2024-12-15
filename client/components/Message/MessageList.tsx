import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MessageBubble from './MessageBubble';
import { messages } from '@/data/chatDetail';


const MessageList = () => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MessageBubble message={item} isSent={item.isSent} />
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
});

export default MessageList;
