import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './src/pages/Home.js'
import { Lessons } from './src/pages/LessonHome.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer screenOptions>
      <Tab.Navigator 
        screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: '#e2480d'}}}
        backBehavior='history'>
        <Tab.Screen
          name="Home"
          component={Home}/>
        <Tab.Screen
          name="Lessons"
          component={Lessons}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
