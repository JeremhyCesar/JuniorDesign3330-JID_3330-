import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MusicWorksPage } from "../pages/Lessons/MusicWorksPage";
import { LessonScreen } from "../components/lessons/LessonScreenFormat";
import { VideoPage } from "../pages/Lessons/VideoPage";
import { Worksheet } from "../pages/Lessons/Worksheet";
import { ReviewSession } from "../pages/Lessons/ReviewSession";
import compareAndContrastLessons from "../data/compareAndContrastLessons.json"

const Stack = createNativeStackNavigator();

const MusicWorksNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
};

export default MusicWorksNavigator;
