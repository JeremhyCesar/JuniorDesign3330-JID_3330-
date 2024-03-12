import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CompareAndContrastPage } from "../pages/Lessons/CompareAndContrastPage";
import ComposerNavigator from "./ComposerNavigator";
import MusicWorksNavigator from "./MusicWorksNavigator";

const Stack = createNativeStackNavigator();

const CompareAndContrastStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CompareAndContrastHome" component={CompareAndContrastPage} />
      <Stack.Screen name="ComposersHome" component={ComposerNavigator} />
      <Stack.Screen name='MusicWorkHome' component={MusicWorksNavigator} />
    </Stack.Navigator>
  );
};

export default CompareAndContrastStack;