import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QuizAnswers } from "../pages/Quizzes/QuizAnswers";
import { QuizQuestion } from "../pages/Quizzes/QuizQuestion";
import { QuizTopic } from "../pages/Quizzes/QuizTopic";
import { QuizScreen } from "../screens/QuizScreen";
import { QuizResults } from "../pages/Lessons/QuizResults";
import { CreateRoomScreen } from "../pages/Quizzes/CreateOnlineQuizRoom";
import { OnlineQuizRoom } from "../pages/Quizzes/OnlineQuizRoom";
import { JoinOnlineQuizRoom } from "../pages/Quizzes/JoinOnlineQuizRoom";
import { CreateQuiz } from "../pages/Quizzes/CreateQuiz";

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
        options={{
          headerShown: true,
          title: "Create Quiz Room",
          headerStyle: {
            backgroundColor: "#e2480d", 
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold", 
          },
        }}
      />
      <Stack.Screen
        name="CreateQuiz"
        component={CreateQuiz}
        options={{
          headerShown: true,
          title: "Create Quiz",
          headerStyle: {
            backgroundColor: "#e2480d", 
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold", 
          },
        }}
      />
      <Stack.Screen
        name="JoinOnlineQuizRoom"
        component={JoinOnlineQuizRoom}
        options={{
          headerShown: true,
          title: "Join Online Quiz",
          headerStyle: {
            backgroundColor: "#e2480d", 
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold", 
          },
        }}
      />
      <Stack.Screen
        name="OnlineQuizRoom"
        component={OnlineQuizRoom}
        options={{
          headerShown: true,
          title: "",
          gestureDirection: "horizontal",
          gestureEnabled: true,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen name="QuizQuestion" component={QuizQuestion} />
      <Stack.Screen name="QuizTopic" component={QuizTopic} />
      <Stack.Screen name="QuizResults" component={QuizResults} />
      <Stack.Screen name="QuizAnswers" component={QuizAnswers} />
    </Stack.Navigator>
  );
}
