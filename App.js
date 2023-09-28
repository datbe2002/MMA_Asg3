import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOption } from "./shared/helper";
import BottomTabs from "./navigation/bottom_tabs";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen
          name="BottomTab"
          component={BottomTabs}
          options={screenOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
