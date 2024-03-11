import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LessonScreen } from "../screens/Lessons/LessonScreen";
import ClassicalMusicNavigator from './ClassicalMusicNavigator';
import { ContemporaryMusicScreen } from "../screens/Lessons/ContemporaryMusicScreen";
import { CompareAndContrastScreen } from "../screens/Lessons/CompareAndContrastScreen";

const Stack = createNativeStackNavigator();

export function LessonNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LessonHome" component={LessonScreen} />
      <Stack.Screen name="ClassicalMusicHome" component={ClassicalMusicNavigator} />
      <Stack.Screen
        name="ContemporaryMusic"
        component={ContemporaryMusicScreen}
      />
      <Stack.Screen
        name="CompareAndContrast"
        component={CompareAndContrastScreen}
      />
    </Stack.Navigator>
  );
}

export default LessonNavigator;
