import React, { useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import {
  View,
  Text,
  Pressable,
  Image,
  Button,
  ImageBackground,
} from "react-native";
import {
  epiphyticOrchids,
  orchids,
  terrestrialOrchids,
} from "../../assets/database/Database";
import { COLORS } from "../../constant/theme";
import { useNavigation } from "@react-navigation/native";
import FavoriteLogic from "../detail_favorites/FavoriteLogic";

const OrchidCard = ({ item, index, nav }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  let isEven = index % 2 == 0;
  return (
    <View>
      <Pressable
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 15,
          paddingTop: index === 1 ? 10 : 0,
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        onPress={() => nav.navigate("Detail", { ...item })}
      >
        <ImageBackground
          source={item.orchidsImage}
          style={{
            width: "100%",
            height: index % 3 == 0 ? 180 : 260,

            alignItems: "flex-end",
          }}
          imageStyle={{ borderRadius: 35 }}
        >
          <View
            style={{
              paddingTop: 10,
            }}
          >
            <FavoriteLogic
              setIsFavourite={setIsFavourite}
              isFavourite={isFavourite}
              item={item}
              mr={10}
            />
          </View>
        </ImageBackground>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 10,
            fontWeight: 600,
            color: COLORS.black,
          }}
        >
          {item.orchidsName}
        </Text>
      </Pressable>
    </View>
  );
};

export default function OrchidsSection({ activeCategory }) {
  const nav = useNavigation();
  return (
    <View style={{ margin: 20, justifyContent: "space-between" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Orchids</Text>
      <View style={{ height: "100%" }}>
        <MasonryList
          style={{
            alignSelf: "stretch",
          }}
          data={
            activeCategory === "Epiphytic"
              ? epiphyticOrchids
              : terrestrialOrchids
          }
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignSelf: "stretch",
          }}
          renderItem={({ item, i }) => (
            <OrchidCard item={item} index={i} nav={nav} />
          )}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  );
}
