import React from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { QuizNavigator } from "./QuizNavigator"
import LessonNavigator from "./LessonNavigator";
import { Social } from "../pages/SocialPage";

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions={{headerShown: false, tabBarActiveTintColor: '#ffffff', tabBarInactiveTintColor: '#ffffff', tabBarStyle: {backgroundColor: '#e2480d'}}}
        backBehavior='history'>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarIcon: () => {return (<Image source={require('../../assets/home-icon.png')} style={styles.tabIcon} />)}}}/>
        <Tab.Screen
          name="Quizzes"
          component={QuizNavigator}
          options={{tabBarIcon: () => {return (<Image source={require('../../assets/quiz-nav-icon.png')} style={styles.quizTabIcon}/>)}}}/>
        <Tab.Screen
          name="Lessons"

          component={LessonNavigator}
          options={{tabBarIcon: () => {return (<Image source={require('../../assets/lesson-icon.png')}/>)}}}/>
        <Tab.Screen
          name="Social"

          component={Social}
          options={{tabBarIcon: () => {return (<Image source={require('../../assets/social-icon.png')} style={styles.tabIcon} />)}}}/>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 30, 
    height: 30, 
  },
  quizTabIcon: {
    width: 22, 
    height: 22, 
    top: 3
  }
});

export default HomeNavigator;