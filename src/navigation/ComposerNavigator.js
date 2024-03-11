import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ComposersPage } from "../pages/Lessons/ComposersPage";
import { LessonScreen } from "../components/lessons/LessonScreenFormate";
import { VideoPage } from "../pages/Lessons/VideoPage";
import { Worksheet } from "../pages/Lessons/Worksheet";
import { ReviewSession } from "../pages/Lessons/ReviewSession";
import composerLessonData from "../data/composerLessons.json";

const Stack = createNativeStackNavigator();

const ComposerNavigator = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Composers" component={ComposersPage} />
      <Stack.Screen name="LessonScreen">
        {(props) => {
          const { composerName } = props.route.params;
          const lessonData = composerLessonData.find(
            (lesson) => lesson.composerName === composerName
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
      <Stack.Screen name="ReviewSession" component={ReviewSession} />
    </Stack.Navigator>
  );
};

export default ComposerNavigator;
