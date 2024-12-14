import { StyleSheet, FlatList } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import ChatItem from '@/components/ChatItem';
import { chatGroups } from "../../data/chatDummy"

export default function HomeScreen() {

  const renderItem = ({ item }) => <ChatItem item={item} onPress={() => { }} />;


  return (
    <ThemedView>
      <FlatList
        data={chatGroups}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerTitle: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
  },
  addIcon: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  avatarContainer: {
    marginRight: 10,
    flexDirection: 'row',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginLeft: -10,
  },
  chatContent: {
    flex: 1,
  },
  chatTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    fontSize: 13,
    marginTop: 2,
  },
  chatMeta: {
    alignItems: 'flex-end',
  },
  chatDate: {
    fontSize: 12,
    color: '#999',
  },
  unreadBadge: {
    backgroundColor: '#357AF5',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 5,
  },
  unreadCount: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
