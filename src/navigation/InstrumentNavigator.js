import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InstrumentsPage } from "../pages/Lessons/InstrumentsPage";
import { LessonScreen } from "../components/Lessons/LessonScreenFormate";
import { VideoPage } from "../pages/Lessons/VideoPage";
import { Worksheet } from "../pages/Lessons/Worksheet";
import { ReviewSession } from "../pages/Lessons/ReviewSession";
import instrumentLessonData from "../data/instrumentsLessons.json";

const Stack = createNativeStackNavigator();

const InstrumentNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Instruments" component={InstrumentsPage} />
      <Stack.Screen name="LessonScreen">
        {(props) => {
          const { lessonData } = props.route.params;
          
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

export default InstrumentNavigator;