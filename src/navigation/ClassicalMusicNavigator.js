import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClassicalMusicPage } from "../pages/Lessons/ClassicalMusicPage";
import ComposerNavigator from "./ComposerNavigator";
import InstrumentNavigator from "./InstrumentNavigator";

const Stack = createNativeStackNavigator();

const ClassicalMusicStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ClassicalMusic" component={ClassicalMusicPage} />
      <Stack.Screen name="ComposersHome" component={ComposerNavigator} />
      <Stack.Screen name="InstrumentsHome" component={InstrumentNavigator} />
    </Stack.Navigator>
  );
};

export default ClassicalMusicStack;
