import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { COLORS } from "../../constant/theme";
import FavoriteLogic from "../../components/detail_favorites/FavoriteLogic";

export default function DetailPageScreen(props) {
  let item = props.route.params;

  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <ScrollView
      style={{
        backgroundColor: COLORS.primary,
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style="light"></StatusBar>
      {/* Orchid images */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Image
          source={item.orchidsImage}
          style={{
            width: 380,
            height: 400,
            marginVertical: 7,
            borderRadius: 53,
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 56,
        }}
      >
        {/* Back button */}
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 100,
            marginLeft: 20,
            backgroundColor: "white",
          }}
          onPress={() => props.navigation.goBack()}
        >
          <ChevronLeftIcon size={30} strokeWidth={4.5} color={COLORS.primary} />
        </TouchableOpacity>
        {/* Like button */}
        <FavoriteLogic
          setIsFavourite={setIsFavourite}
          isFavourite={isFavourite}
          item={item}
          mr={20}
        />
      </View>
      {/* Description */}
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 16,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            marginTop: 8,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold", flex: 1 }}>
            {item.orchidsName}
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 600,
              flex: 1,
              color: COLORS.darker,
            }}
          >
            {item.orchidsPrice} $
          </Text>
          <Text
            style={{ fontSize: 25, fontWeight: "bold", flex: 1, marginTop: 20 }}
          >
            Description
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "regular",
              flex: 1,
              marginTop: 10,
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
