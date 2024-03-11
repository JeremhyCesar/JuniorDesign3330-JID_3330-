import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import LessonNavigator from "./LessonNavigator";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LessonNavigator" component={LessonNavigator} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;