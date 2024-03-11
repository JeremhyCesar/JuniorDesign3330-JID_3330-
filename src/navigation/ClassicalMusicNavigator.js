import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ClassicalMusicScreen } from "../screens/Lessons/ClassicalMusicScreen";
import ComposerNavigator from "./ComposerNavigator";
// import MusicalWorksScreen from './screens/MusicalWorksScreen';
// import InstrumentsScreen from './screens/InstrumentsScreen';

const Stack = createStackNavigator();

const ClassicalMusicStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ClassicalMusic" component={ClassicalMusicScreen} />
      <Stack.Screen name="ComposersHome" component={ComposerNavigator} />
      {/* <Stack.Screen name="MusicalWorks" component={MusicalWorksScreen} />
      <Stack.Screen name="Instruments" component={InstrumentsScreen} /> */}
    </Stack.Navigator>
  );
};

export default ClassicalMusicStack;
