import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { categoryData } from "../../assets/database/Database";
import { COLORS } from "../../constant/theme";

export default function CategorySection({ activeCategory, setActiveCategory }) {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          paddingHorizontal: 15,
          paddingBottom: 10,
        }}
      >
        Categories
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categoryData.map((cat, index) => {
          let isActive = cat.name == activeCategory;
          let activeButtonClass = isActive ? COLORS.secondary : COLORS.primary;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCategory(cat.name)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: 20,
              }}
            >
              <View
                style={{
                  borderRadius: 100,
                  padding: 6,
                  backgroundColor: activeButtonClass,
                }}
              >
                <Image
                  source={{ uri: cat.image }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                  }}
                ></Image>
              </View>
              <Text style={{ color: COLORS.black }}>{cat.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
