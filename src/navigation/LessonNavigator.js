import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LessonHome } from "../screens/LessonScreen";
import { LessonScreen } from "../components/lessons/LessonScreenFormat";
import { ContemporaryMusicPage } from "../pages/Lessons/ContemporaryMusicPage";
import { CompareAndContrastPage } from "../pages/Lessons/CompareAndContrastPage";
import { ComposersPage } from "../pages/Lessons/ComposersPage";
import { InstrumentsPage } from "../pages/Lessons/InstrumentsPage";
import { VideoPage } from "../pages/Lessons/VideoPage";
import { Worksheet } from "../pages/Lessons/Worksheet";
import { ReviewSession } from "../pages/Lessons/ReviewSession";
import { MusicWorksPage } from "../pages/Lessons/MusicWorksPage";
import { ClassicalMusicPage } from "../pages/Lessons/ClassicalMusicPage";
import composerLessonData from "../data/composerLessons.json";
import instrumentLessonData from "../data/instrumentsLessons.json";
import compareAndContrastLessons from "../data/compareAndContrastLessons.json";

import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

function ClassicalMusicNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ClassicalMusic" component={ClassicalMusicPage} />
      <Stack.Screen name="ComposersHome" component={ComposerNavigator} />
      <Stack.Screen name="InstrumentsHome" component={InstrumentNavigator} />
    </Stack.Navigator>
  );
}

function ComposerNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Composers" component={ComposersPage} />
      <Stack.Screen
        name="LessonScreen"
        // options={({ route }) => ({
        //   headerShown: true,
        //   headerTitle: route.params.composerName,
        //   headerBackTitleVisible: false,
        //   headerBackButtonMenuEnabled: false,
        // })}
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
}

function InstrumentNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Instruments" component={InstrumentsPage} />
      <Stack.Screen name="LessonScreen">
        {(props) => {
          const { instrumentName } = props.route.params;
          const lessonData = instrumentLessonData.find(
            (lesson) => lesson.instrumentName === instrumentName
          );
          return <LessonScreen {...props} lessonData={lessonData} />;
        }}
      </Stack.Screen>
      <Stack.Screen name="VideoPage" component={VideoPage} />
      <Stack.Screen name="Worksheet">
        {(props) => (
          <Worksheet
            {...props}
            worksheetContent={props.route.params.worksheetContent}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="ReviewSession">
        {(props) => (
          <ReviewSession
            {...props}
            reviewContent={props.route.params.reviewContent}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function CompareAndContrastNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="CompareAndContrastHome"
        component={CompareAndContrastPage}
      />
      <Stack.Screen name="ComposersHome" component={ComposerNavigator} />
      <Stack.Screen name="MusicWorkHome" component={MusicWorksNavigator} />
    </Stack.Navigator>
  );
}

function MusicWorksNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MusicWorks" component={MusicWorksPage} />
      <Stack.Screen name="LessonScreen">
        {(props) => {
          const { comparedName } = props.route.params;
          const lessonData = compareAndContrastLessons.find(
            (lesson) => lesson.comparedName === comparedName
          );
          return <LessonScreen {...props} lessonData={lessonData} />;
        }}
      </Stack.Screen>
      <Stack.Screen name="VideoPage" component={VideoPage} />
      <Stack.Screen name="Worksheet">
        {(props) => (
          <Worksheet
            {...props}
            worksheetContent={props.route.params.worksheetContent}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="ReviewSession">
        {(props) => (
          <ReviewSession
            {...props}
            reviewContent={props.route.params.reviewContent}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export function LessonNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LessonHome" component={LessonHome} />
      <Stack.Screen
        name="ClassicalMusicHome"
        component={ClassicalMusicNavigator}
      />
      <Stack.Screen
        name="ContemporaryMusic"
        component={ContemporaryMusicPage}
      />
      <Stack.Screen
        name="CompareAndContrast"
        component={CompareAndContrastNavigator}
      />
    </Stack.Navigator>
  );
}

export default LessonNavigator;
