import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListenScreen from '../screens/ListenScreen';
import SearchResultsPage from '../pages/Listen/SearchResultsPage';
import SongDetailsPage from '../pages/Listen/SongDetailsPage';

const Stack = createNativeStackNavigator();

export function ListenNavigator() {
    return (
      <Stack.Navigator
        initialRouteName="ListenScreen"
        backBehavior="HomePage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ListenScreen" component={ListenScreen} />
        <Stack.Screen name="SongDetailsPage" component={SongDetailsPage} />
        {/* Use the component prop directly */}
        <Stack.Screen name="SearchResultsPage" component={SearchResultsPage} />
      </Stack.Navigator>
    );
}

export default ListenNavigator;
