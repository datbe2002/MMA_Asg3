import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { HeartIcon } from "react-native-heroicons/solid";
import { COLORS } from "../../constant/theme";
import {
  addItemsToAsyncStorage,
  getItemsFromAsyncStorage,
  removeItemsFromAsyncStorage,
} from "../../shared/helper";

export default function FavoriteLogic({ setIsFavourite, isFavourite, item }) {
  useFocusEffect(
    React.useCallback(() => {
      checkIfFavourited();
    }, [])
  );

  const handleChangeFavourite = async () => {
    let key = "favorites";
    if (isFavourite) {
      //remove
      await removeItemsFromAsyncStorage(item.id, key);
    } else {
      await addItemsToAsyncStorage(item, key);
    }
    setIsFavourite(!isFavourite);
  };

  const checkIfFavourited = async () => {
    const fav = await getItemsFromAsyncStorage("favorites");
    const isAlreadyFavorited = fav.some((i) => i.id === item.id);
    setIsFavourite(isAlreadyFavorited);
  };

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        borderRadius: 100,
        marginRight: 20,
        backgroundColor: "white",
      }}
      onPress={handleChangeFavourite}
    >
      <HeartIcon
        size={30}
        strokeWidth={4.5}
        color={isFavourite ? COLORS.red : COLORS.darker}
      />
    </TouchableOpacity>
  );
}
