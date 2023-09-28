import AsyncStorage from "@react-native-async-storage/async-storage";

const screenOption = { headerShown: false };

const getItemsFromAsyncStorage = async (key) => {
  try {
    const items = await AsyncStorage.getItem(key);
    return items ? JSON.parse(items) : [];
  } catch (error) {
    console.error(`Error getting ${key}:`, error);
    return [];
  }
};

const addItemsToAsyncStorage = async (item, key) => {
  try {
    const items = await getItemsFromAsyncStorage(key);
    items.push(item);
    await AsyncStorage.setItem(key, JSON.stringify(items));
  } catch (error) {
    console.error(`Error adding to ${key}:`, error);
  }
};

const removeItemsFromAsyncStorage = async (id, key) => {
  try {
    const items = await getItemsFromAsyncStorage(key);
    const updated = items.filter((item) => item.id !== id);
    await AsyncStorage.setItem(key, JSON.stringify(updated));
  } catch (error) {
    console.error(`Error removing from ${key}`, error);
  }
};

const clearAsyncWithKey = async (key) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify([]));
  } catch (error) {
    console.error("Error clearing" + key, error);
  }
};

export {
  addItemsToAsyncStorage,
  clearAsyncWithKey,
  getItemsFromAsyncStorage,
  removeItemsFromAsyncStorage,
  screenOption,
};
