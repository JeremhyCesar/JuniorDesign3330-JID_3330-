import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Pressable,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import { ClassicalLessons } from "./ClassicalLessons";
import { ContemporaryLessons } from "./ContemporaryLessons";
import { CompareAndContrastLessons } from "./CompareAndContrastLessons";
import { ClassicalComposers } from "./ClassicalComposers";
import { ChopinScreen } from "./ChopinScreen"; // Import the Chopin screen
import { ClassicalComposers } from './ClassicalComposers';

export function Lessons() {
  const Stack = createNativeStackNavigator();
  return (
    // By setting the initial toute home, fix the bug that click "Learn" in home page may lead to the page on the stack but may not be the lesson home
    <Stack.Navigator
      initialRouteName="LessonHome"
      backBehavior="history"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LessonHome" component={LessonHome} />
      <Stack.Screen name="ClassicalLessons" component={ClassicalLessons} />
      <Stack.Screen name="ClassicalComposers" component={ClassicalComposers} />
      <Stack.Screen
        name="ContemporaryLessons"
        component={ContemporaryLessons}
      />
      <Stack.Screen
        name="CompareAndContrastLessons"
        component={CompareAndContrastLessons}
      />
      <Stack.Screen name="Chopin" component={ChopinScreen} />
    </Stack.Navigator>
  );
}

function LessonHome({ navigation }) {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 31,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: "black",
      shadowOpacity: 0.25,
      width: "84%",
      height: 250,
      cursor: "pointer",
    },
  });
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text
        style={{
          fontWeight: "bold",
          top: 64,
          left: "8%",
          fontSize: 48,
          color: "#333",
        }}
      >
        My Lessons
      </Text>
      <Text
        style={{
          top: 68,
          left: "8%",
          fontSize: 20,
          textAlign: "left",
          color: "#717171",
        }}
      >
        What should we learn now?
      </Text>
      <Pressable
        onPress={() => navigation.navigate("ClassicalLessons")}
        style={[
          { top: 94, left: "8%", backgroundColor: "#ffbb37" },
          styles.button,
        ]}
      >
        <Text
          style={{
            top: 26,
            left: "10%",
            fontSize: 28,
            textAlign: "left",
            fontWeight: "bold",
            color: "white",
            width: 150,
            flexWrap: "wrap",
          }}
        >
          Classical Music
        </Text>
        <Image
          source={require("../../assets/girl-playing-violin.png")}
          style={{
            position: "absolute",
            top: 0,
            left: "45%",
            width: 160,
            height: 250,
            objectFit: "cover",
          }}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("ContemporaryLessons")}
        style={[
          { top: 124, left: "8%", backgroundColor: "#e24808" },
          styles.button,
        ]}
      >
        <Text
          style={{
            top: 26,
            left: "10%",
            fontSize: 28,
            textAlign: "left",
            fontWeight: "bold",
            color: "white",
            width: "55%",
            flexWrap: "wrap",
          }}
        >
          Contemporary Music
        </Text>
        <Image
          source={require("../../assets/couple-dance-party.png")}
          style={{
            position: "absolute",
            top: 45,
            left: "35%",
            width: 220,
            height: 180,
            objectFit: "cover",
          }}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("CompareAndContrastLessons")}
        style={[
          { top: 154, left: "8%", backgroundColor: "#00347f" },
          styles.button,
        ]}
      >
        <Text
          style={{
            top: 26,
            left: "10%",
            fontSize: 28,
            textAlign: "left",
            fontWeight: "bold",
            color: "white",
            width: "50%",
            flexWrap: "wrap",
          }}
        >
          Compare & Contrast
        </Text>
        <Image
          source={require("../../assets/saxophonist.png")}
          style={{
            position: "absolute",
            top: 30,
            left: "50%",
            width: 160,
            height: 200,
            objectFit: "cover",
          }}
        />
      </Pressable>
      <View style={{ height: 180 }} />
    </ScrollView>
  );
}
