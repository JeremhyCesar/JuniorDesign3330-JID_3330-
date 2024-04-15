import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListenScreen from '../screens/ListenScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen'; 

const Stack = createNativeStackNavigator();

export function ListenNavigator() {
    return (
      <Stack.Navigator
        initialRouteName="ListenScreen"
        backBehavior="HomePage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ListenScreen" component={ListenScreen} />
        {/* Use the component prop directly */}
        <Stack.Screen name="SearchResultsScreen" component={SearchResultsScreen} />
      </Stack.Navigator>
    );
}

export default ListenNavigator;
