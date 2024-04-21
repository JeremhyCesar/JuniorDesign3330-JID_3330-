import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ComposersPage } from "../pages/Lessons/ComposersPage";
import { LessonScreen } from "../components/lessons/LessonScreenFormat";
import { VideoPage } from "../pages/Lessons/VideoPage";
import { Worksheet } from "../pages/Lessons/Worksheet";
import { ReviewSession } from "../pages/Lessons/ReviewSession";
import composerLessonData from "../data/composerLessons.json";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createNativeStackNavigator();

const ComposerNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Composers" component={ComposersPage} />
      <Stack.Screen
        name="LessonScreen"
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params.composerName,
          headerBackTitleVisible: false,
          headerBackButtonMenuEnabled: false,
        })}
      >
        {(props) => {
          const { composerName } = props.route.params;
          const lessonData = composerLessonData.find(
            (lesson) => lesson.composerName === composerName
          );
          console.log(lessonData);
          return <LessonScreen {...props} lessonData={lessonData} />;
        }}
      </Stack.Screen>
      <Stack.Screen
        name="VideoPage"
        component={VideoPage}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={25} color="white" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#e2480d",
          },
          headerTintColor: "white",
        })}
      />
      <Stack.Screen
        name="Worksheet"
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={25} color="white" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#e2480d",
          },
          headerTintColor: "white",
        })}
      >
        {(props) => (
          <Worksheet
            {...props}
            worksheetContent={props.route.params.worksheetContent}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="ReviewSession"
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={25} color="white" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#e2480d",
          },
          headerTintColor: "white",
        })}
      >
        {(props) => (
          <ReviewSession
            {...props}
            reviewContent={props.route.params.reviewContent}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default ComposerNavigator;
