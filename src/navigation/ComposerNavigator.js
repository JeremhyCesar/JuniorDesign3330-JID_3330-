import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ComposersScreen } from "../screens/Lessons/ComposersScreen";
import { LessonScreen } from "../components/lessons/LessonScreen";
import { VideoPage } from "../pages/VideoPage";
import { Worksheet } from "../pages/Worksheet";
import { ReviewSession } from "../pages/ReviewSession";
import composerLessonData from "../data/composerLessons.json";

const Stack = createStackNavigator();

const ComposerNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Composers" component={ComposersScreen} />
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
      <Stack.Screen name="Worksheet" component={Worksheet} />
      <Stack.Screen name="ReviewSession" component={ReviewSession} />
    </Stack.Navigator>
  );
};

export default ComposerNavigator;
