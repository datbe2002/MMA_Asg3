import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../constant/theme";
import FavouritePageStack from "../favourite_stacks";
import HomepageStack from "../home_stacks";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  paddingTop: 20,
  borderRadius: 50,
  height: 100,
  position: "absolute",
  bottom: 40,
  marginHorizontal: 40,
};

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      activeColor={COLORS.primary}
      tabBarHideKeyBoard={true}
      barStyle={{ paddingBottom: 48 }}
    >
      <Tab.Screen
        name="Homepage"
        component={HomepageStack}
        options={{
          headerShown: false,
          tabBarStyle: tabBarStyle,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={focused ? COLORS.primary : COLORS.cream}
              size={34}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouritePageStack}
        options={{
          headerShown: false,
          tabBarStyle: tabBarStyle,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-circle"}
              color={focused ? COLORS.primary : COLORS.cream}
              size={34}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
