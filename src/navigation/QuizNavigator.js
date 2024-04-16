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
  const screenOptions = {
    headerShown: true,
    headerStyle: {
      backgroundColor: "#e2480d",
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  return (
    <Stack.Navigator initialRouteName="QuizScreen" screenOptions={screenOptions}>
      <Stack.Screen name="My Quizzes" component={QuizScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="CreateRoomScreen"
        component={CreateRoomScreen}
        options={{
          title: "Create Quiz Room",
        }}
      />
      <Stack.Screen
        name="CreateQuiz"
        component={CreateQuiz}
        options={{
          title: "Create Quiz",
        }}
      />
      <Stack.Screen
        name="JoinOnlineQuizRoom"
        component={JoinOnlineQuizRoom}
        options={{
          title: "Join Online Quiz",
        }}
      />
      <Stack.Screen
        name="OnlineQuizRoom"
        component={OnlineQuizRoom}
        options={{
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
