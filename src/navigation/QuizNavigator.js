import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QuizQuestion } from "../pages/Quizzes/QuizQuestion";
import { QuizTopic } from "../pages/Quizzes/QuizTopic";
import { QuizScreen } from "../screens/QuizScreen";
import { QuizResults } from "../pages/Lessons/QuizResults";
import { CreateRoomScreen } from "../pages/Quizzes/CreateOnlineQuizRoom";

const Stack = createNativeStackNavigator();

export function QuizNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="QuizScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="My Quizzes" component={QuizScreen} />
      <Stack.Screen
        name="CreateRoomScreen"
        component={CreateRoomScreen}
        options={{ headerShown: true, title: "" }}
      />
      <Stack.Screen name="QuizQuestion" component={QuizQuestion} />
      <Stack.Screen name="QuizTopic" component={QuizTopic} />
      <Stack.Screen name="QuizResults" component={QuizResults} />
    </Stack.Navigator>
  );
}
