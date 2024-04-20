import React, {useState, useEffect}from "react";
import { StyleSheet, Image, View, ScrollView, SafeAreaView, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { QuizNavigator } from "./QuizNavigator";
import LessonNavigator from "./LessonNavigator";
import { SocialNavigator } from "./SocialNavigator"
import { useNavigation } from "@react-navigation/native";
import ListenNavigator from "./ListenNavigator";
import { useUser, useObject } from "@realm/react";
import { User } from "../models/User";
import { BSON } from "realm";
import { ClassCreationScreen } from "../screens/ClassCreationScreen";
import { ClassInfoScreen } from "../screens/ClassInfoScreen";
import UserPage from "../screens/UserPage";
import AccountInfoScreen from "../screens/AccountInfoScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  const navigation = useNavigation();
  const user = useUser();

  const navigateToScreen = (screenName) => {
    navigation.navigate("Home");
    navigation.navigate(screenName);
  };
  let initialRoute = useObject(User, BSON.ObjectId(user.id)) === null ? "AccountInfo" : "Home";

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Stack.Navigator initialRouteName={initialRoute} screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/home-icon.png')}
                  style={styles.tabIcon}
                />
              ),
            }}
          />
          <Stack.Screen
            name="AccountInfo"
            component={AccountInfoScreen}
          />
          <Stack.Screen 
            name="ClassCreation"
            component={ClassCreationScreen}/>
          <Stack.Screen
            name="ClassInfo"
            component={ClassInfoScreen}/>
          <Stack.Screen
            name="Quizzes"
            component={QuizNavigator}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/quiz-nav-icon.png')}
                  style={styles.quizTabIcon}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Lessons"
            component={LessonNavigator}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/lesson-icon.png')}
                  style={styles.tabIcon}
                />
              ),
            }}
          />
         <Stack.Screen
            name="Listen"
            component={ListenNavigator}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/listen-nav-icon.png')}
                  style={styles.quizTabIcon}
                />
              ),
            }}
          />
          <Stack.Screen
            name="UserPage"
            component={UserPage}
            options={{
              title: 'User Page',
            }}
          />
          <Stack.Screen
            name="Social"
            component={SocialNavigator}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/social-icon.png')}
                  style={styles.tabIcon}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </ScrollView>
      {initialRoute == "Home" && 
      <SafeAreaView style={styles.bottomBar}>
        <View style={styles.boxContainer}>
          <Pressable onPress={() => navigateToScreen("Home")}>
            <Image source={require('../../assets/homebaricon4.png')} style={styles.box} />
          </Pressable>
          <Pressable onPress={() => navigateToScreen("Quizzes")}>
            <Image source={require('../../assets/quizbaricon.png')} style={styles.box} />
          </Pressable>
          <Pressable onPress={() => navigateToScreen("Social")}>
            <Image source={require('../../assets/socialbaricon.png')} style={styles.box} />
          </Pressable>
          <Pressable onPress={() => navigateToScreen("Listen")}>
            <Image source={require('../../assets/listenbaricon.png')} style={styles.box} />
          </Pressable>
          <Pressable onPress={() => navigateToScreen("Lessons")}>
            <Image source={require('../../assets/lessonsbaricon.png')} style={styles.box} />
          </Pressable>
        </View>
      </SafeAreaView> }
    </View>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
  quizTabIcon: {
    width: 22,
    height: 22,
    top: 3,
  },
  bottomBar: {
    height: 90,
    backgroundColor: '#e2480d',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  box: {
    width: 40,
    height: 40,
  }
});

export default HomeNavigator;