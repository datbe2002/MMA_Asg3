import React from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { View, Text, Pressable, Image } from "react-native";
import { orchids } from "../../assets/database/Database";
import { COLORS } from "../../constant/theme";
import { useNavigation } from "@react-navigation/native";

const OrchidCard = ({ item, index, nav }) => {
  let isEven = index % 2 == 0;
  return (
    <View>
      <Pressable
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 15,
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        onPress={() => nav.navigate("Detail", { ...item })}
      >
        <Image
          source={item.orchidsImage}
          style={{
            width: "100%",
            height: index % 3 == 0 ? 180 : 260,
            borderRadius: 35,
          }}
        />
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

export default function OrchidsSection() {
  const nav = useNavigation();

  return (
    <View style={{ margin: 20, justifyContent: "space-between" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Orchids</Text>
      <View style={{ height: "100%" }}>
        <MasonryList
          data={orchids}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => (
            <OrchidCard item={item} index={i} nav={nav} />
          )}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  );
}
