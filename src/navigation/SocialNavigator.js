import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SocialPage } from '../pages/SocialPage';

const Stack = createNativeStackNavigator();

export function SocialNavigator() {
    return (
      <Stack.Navigator
        initialRouteName="SocialPage"
        backBehavior="SocialPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SocialPage" component={SocialPage} />
      </Stack.Navigator>
    );
}