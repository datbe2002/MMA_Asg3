import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../constant/theme";
import FavouritePageStack from "../favourite_stacks";
import HomepageStack from "../home_stacks";
import { resetTabStacksOnBlur } from "../../shared/helper";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  height: 80,
  paddingTop: 20,
};

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      activeColor={COLORS.primary}
      tabBarHideKeyBoard={true}
      barStyle={{ paddingBottom: 0 }}
      screenOptions={() => ({
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Homepage"
        component={HomepageStack}
        listeners={resetTabStacksOnBlur}
        options={{
          headerShown: false,
          tabBarStyle: tabBarStyle,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={focused ? COLORS.primary : COLORS.cream}
              size={35}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouritePageStack}
        listeners={resetTabStacksOnBlur}
        options={{
          headerShown: false,
          tabBarStyle: tabBarStyle,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-circle"}
              color={focused ? COLORS.primary : COLORS.cream}
              size={35}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
