import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOption } from "../../shared/helper";
import DetailPageScreen from "../../screens/detailpage";
import HomepageScreen from "../../screens/homepage";

const HomeStack = createNativeStackNavigator();

export default function HomepageStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomepageScreen}
        options={screenOption}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailPageScreen}
        options={screenOption}
      />
    </HomeStack.Navigator>
  );
}
