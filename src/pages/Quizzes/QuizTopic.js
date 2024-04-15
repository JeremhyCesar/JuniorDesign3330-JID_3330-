import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

export function QuizTopic({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ececec',
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    quizContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 31,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center', 
      width: 370,
      height: 145,
      top: 60
    },
    quizTitle: {
      color: '#dd571c',
      fontSize: 32,
      marginLeft: 25,
      width: 180,
      height: 80,
      fontWeight: 'bold',
    },
    textContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 31,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30
    },
    lockedText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
    },
    blurView: {
        borderRadius: 31,
        width: 370,
        height: 145,
        marginLeft: 10,
        top: 6,
        backgroundColor: '#c3c3c3', 
        justifyContent: 'center', 
        alignItems: 'center', 
        opacity: 0.8, 
    },
  });

  return (
    <ScrollView style={styles.container}>
<Text
        style={{
          fontWeight: "bold",
          top: 30,
          left: "8%",
          fontSize: 48,
          color: "#333",
        }}
      >
        My Quizzes
      </Text>
      <Text
        style={{
          top: 30,
          left: "8%",
          fontSize: 20,
          textAlign: "left",
          color: "#717171",
        }}
      >
        Test your knowledge
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("QuizQuestion", {composerName: "Frédéric Chopin", quizId: "ChopinBeginner", questionNo: 1})} style={styles.quizContainer}>
        <Text style={styles.quizTitle}>Frédéric Chopin</Text>
        <Image source={require('../../../assets/chopin.png')} style={{ width: 100, height: 150, marginLeft: 10, top: 15 }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("QuizQuestion", {composerName: "Ludwig van Beethoven", quizId: "BeethovenBeginner", questionNo: 1})} style={styles.quizContainer}>
        <Text style={styles.quizTitle}>Ludwig van Beethoven</Text>
        <Image source={require('../../../assets/beethoven.webp')} style={{ width: 100, height: 150, marginLeft: 10, top: 15 }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("QuizQuestion", {composerName: "Johann Bach", quizId: "BachBeginner", questionNo: 1})} style={styles.quizContainer}>
        <Text style={styles.quizTitle}>Johann Bach</Text>
        <Image source={require('../../../assets/bachquiz.webp')} style={{ width: 100, height: 150, marginLeft: 10, top: 15 }} />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.quizContainer}>
        <Text style={styles.quizTitle}>Locked...</Text>
        <Image source={require('../../../assets/lock.png')} style={{ width: 100, height: 100, marginLeft: 10, top: -5 }} />
      </TouchableOpacity>

    </ScrollView>
  );
};
