import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { TrashIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constant/theme";
import {
  clearAsyncWithKey,
  removeItemsFromAsyncStorage,
} from "../../shared/helper";

import {
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { HeartIcon } from "react-native-heroicons/solid";

export default function FavouritePageScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);
  const isFocused = useIsFocused();
  const key = "favorites";
  useEffect(() => {
    // Call only when screen open or when back on screen
    if (isFocused) {
      loadFavorites();
    }
  }, [isFocused]);

  const checkAsyncStorage = async () => {
    try {
      const data = await AsyncStorage.getItem(key);
      console.log("Data in AsyncStorage:", data);
    } catch (error) {
      console.error("Error reading AsyncStorage:", error);
    }
  };

  const loadFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem(key);
      if (favorites) {
        setFavorites(JSON.parse(favorites));
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  };

  const handleRemoveFavorite = async (itemId) => {
    try {
      await removeItemsFromAsyncStorage(itemId, key);
      setFavorites((prevFavorites) =>
        prevFavorites.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  const handleConfirm = async () => {
    Alert.alert("Delete", "Are you sure to delete all ?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: handleDeleteAll },
    ]);
  };

  const handleDeleteAll = async () => {
    try {
      await clearAsyncWithKey(key);
      setFavorites(() => []);
    } catch (error) {
      console.error("Error removing all favorites:", error);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.primary,
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.white,
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Pressable onPress={handleConfirm}>
          <TrashIcon size={30} />
        </Pressable>
        <Button
          title="check async storage with console.log"
          onPress={checkAsyncStorage}
        />
        <StatusBar style="dark" />
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            color: "purple",
          }}
        >
          FAVORITES
        </Text>
        <FlatList
          style={styles.container}
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("Detail", { ...item })}
            >
              <View style={styles.itemContainer}>
                <Image source={item.orchidsImage} style={styles.image} />
                <View style={styles.detailsContainer}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>{item.orchidsName}</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{item.orchidsPrice} $</Text>
                  </View>
                  <Pressable
                    style={styles.deleteContainer}
                    onPress={() => handleRemoveFavorite(item.id)}
                  >
                    <HeartIcon size={30} strokeWidth={4.5} color={COLORS.red} />
                  </Pressable>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 12,
    backgroundColor: COLORS.cream,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    height: 130,
    marginLeft: 16,
    flexDirection: "column",
  },
  nameContainer: {
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.black,
  },
  priceContainer: {
    marginTop: 0,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.darker,
  },
  deleteContainer: {
    bottom: 0,
    right: 0,
    position: "absolute",
  },
});
