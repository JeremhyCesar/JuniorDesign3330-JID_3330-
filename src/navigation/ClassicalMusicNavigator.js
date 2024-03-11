import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClassicalMusicPage } from "../pages/Lessons/ClassicalMusicPage";
import ComposerNavigator from "./ComposerNavigator";
// import MusicalWorksScreen from './screens/MusicalWorksScreen';
// import InstrumentsScreen from './screens/InstrumentsScreen';

const Stack = createNativeStackNavigator();

const ClassicalMusicStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ClassicalMusic" component={ClassicalMusicPage} />
      <Stack.Screen name="ComposersHome" component={ComposerNavigator} />
      {/* <Stack.Screen name="MusicalWorks" component={MusicalWorksScreen} />
      <Stack.Screen name="Instruments" component={InstrumentsScreen} /> */}
    </Stack.Navigator>
  );
};

export default ClassicalMusicStack;
