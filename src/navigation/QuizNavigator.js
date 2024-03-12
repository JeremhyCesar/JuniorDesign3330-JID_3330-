import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, ScrollView, Text, View, Image } from "react-native";
import { QuizQuestion } from "../pages/QuizQuestion"
import { QuizTopic } from "../pages/QuizTopic"
import { QuizScreen } from "../screens/QuizScreen"
import { QuizResults } from "../pages/Lessons/QuizResults"

const Stack = createNativeStackNavigator();

export function QuizNavigator() {
    return (
      <Stack.Navigator
        initialRouteName="QuizScreen"
        backBehavior="history"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="QuizQuestion" component={QuizQuestion} />
        <Stack.Screen name="QuizTopic" component={QuizTopic} />
        <Stack.Screen name="QuizResults" component={QuizResults} />
      </Stack.Navigator>
    );
}