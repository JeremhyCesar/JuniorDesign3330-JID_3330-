import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './src/pages/Home.js'

import { Lessons } from './src/pages/LessonHome.js';
import { Social } from './src/pages/SocialPage.js';
import { Quizzes } from './src/pages/QuizSelection.js'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer screenOptions>
      <Tab.Navigator 
        screenOptions={{headerShown: false, tabBarActiveTintColor: '#ffffff', tabBarInactiveTintColor: '#ffffff', tabBarStyle: {backgroundColor: '#e2480d'}}}
        backBehavior='history'>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarIcon: () => {return (<Image source={require('./assets/home-icon.png')} style={styles.tabIcon} />)}}}/>
        <Tab.Screen
          name="Quizzes"

          component={Quizzes}
          options={{tabBarIcon: () => {return (<Image source={require('./assets/lesson-icon.png')}/>)}}}/>
        <Tab.Screen
          name="Lessons"

          component={Lessons}
          options={{tabBarIcon: () => {return (<Image source={require('./assets/lesson-icon.png')}/>)}}}/>
        <Tab.Screen
          name="Social"

          component={Social}
          options={{tabBarIcon: () => {return (<Image source={require('./assets/social-icon.png')} style={styles.tabIcon} />)}}}/>
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
  tabIcon: {
    width: 30, 
    height: 30, 
  },
});
