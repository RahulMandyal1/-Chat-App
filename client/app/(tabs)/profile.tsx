import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";
import { FlatList, Switch } from "react-native-gesture-handler";
import ProfileHeader from "@/components/ProfileHeader";
import { SettingItem, settings } from "@/data/settingItems";


export default function Profile() {

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("access_token");
    router.navigate("/auth/login");
  };

  const renderItem = ({ item }: { item: SettingItem }) => (
    <Pressable
      style={styles.settingItem}
      onPress={() => console.log(`Pressed ${item.title}`)}
    >
      <ThemedView style={styles.leftContent}>
        <ThemedText style={[styles.title, item.danger && styles.dangerText]}>
          {item.title}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.rightContent}>
        {item.hasSwitch && (
          <Switch
            value={false}
            onValueChange={() => console.log(`Toggle ${item.title}`)}
          />
        )}
        {item.hasArrow && <ThemedText style={styles.arrow}>›</ThemedText>}
      </ThemedView>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <FlatList
          data={settings}
          ListHeaderComponent={ProfileHeader}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
        {/* 
        
        <Pressable  onPress={handleLogout}>
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
    paddingTop: 32,
    paddingBottom : 100
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E5EA",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    marginLeft: 12,
    color: "#000",
  },
  dangerText: {
    color: "#FF3B30",
  },
  arrow: {
    fontSize: 20,
    color: "#C7C7CC",
    marginLeft: 8,
  },
  list: {
    flex: 1,
  },
});
