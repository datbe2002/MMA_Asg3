import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavouritePageScreen from "../../screens/favouritepage";
import DetailPageScreen from "../../screens/detailpage";
import { screenOption } from "../../shared/helper";

const FavouriteStack = createNativeStackNavigator();

export default function FavouritePageStack() {
  return (
    <FavouriteStack.Navigator initialRouteName="FavouriteList">
      <FavouriteStack.Screen
        name="FavouriteList"
        component={FavouritePageScreen}
        options={{ headerShown: false }}
      />
      <FavouriteStack.Screen
        name="Detail"
        component={DetailPageScreen}
        options={screenOption}
      />
    </FavouriteStack.Navigator>
  );
}
