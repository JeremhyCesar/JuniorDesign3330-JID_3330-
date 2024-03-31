import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QuizQuestion } from "../pages/QuizQuestion"
import { QuizTopic } from "../pages/QuizTopic"
import { QuizScreen } from "../screens/QuizScreen"
import { QuizResults } from "../pages/Lessons/QuizResults"

const Stack = createNativeStackNavigator();

export function QuizNavigator() {
    return (
      <Stack.Navigator
        initialRouteName="QuizScreen"
        backBehavior="QuizScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="QuizQuestion" component={QuizQuestion} />
        <Stack.Screen name="QuizTopic" component={QuizTopic} />
        <Stack.Screen name="QuizResults" component={QuizResults} />
      </Stack.Navigator>
    );
}