import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LessonScreen } from "../screens/LessonScreen";
import ClassicalMusicNavigator from './ClassicalMusicNavigator';
import { ContemporaryMusicPage } from "../pages/Lessons/ContemporaryMusicPage";
import CompareAndContrastNavigator from "./CompareAndContrastNavigator"

const Stack = createNativeStackNavigator();

export function LessonNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LessonHome" component={LessonScreen} />
      <Stack.Screen name="ClassicalMusicHome" component={ClassicalMusicNavigator} />
      <Stack.Screen
        name="ContemporaryMusic"
        component={ContemporaryMusicPage}
      />
      <Stack.Screen
        name="CompareAndContrast"
        component={CompareAndContrastNavigator}
      />
    </Stack.Navigator>
  );
}

export default LessonNavigator;
