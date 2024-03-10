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
    },
    quizContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 31,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      left:'1%',
      width: 370,
      height: 145,
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
      left:'1%',
      width: 30,
      height: 30
    },
    lockedText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
    },
    blockContainer: {
        position: 'absolute',
        top: 400,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        backgroundColor: '#ececec',
        shadowColor: '#ececec',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
          height: -68,
          width: 0,
        },
      },
  });

  return (
    <ScrollView style={styles.container}>
      <Text
          style={{
            fontWeight: "bold",
            top: 64,
            left: "8%",
            fontSize: 48,
            color: "#333",
          }}
        >
          My Quizzes
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
          Test your knowledge
        </Text>

      <TouchableOpacity 
      style={[{ top: 100, left: "8%" },
           styles.quizContainer,
         ]}>
        <Text style={styles.quizTitle}>Frédéric Chopin</Text>
        <Image source={require('../../assets/chopin.png')}
        style={{
            width: 100,
            height: 150, 
            marginLeft: 10,
            top: 15
          }} />
      </TouchableOpacity>

    
      <View style={[{ top: 100, left: "8%" },
           styles.quizContainer,
         ]}>
        <Text style={styles.quizTitle}>Ludwig van Beethoven</Text>
        <View style={{
            borderRadius: 31,
            width: 90,
            height: 90,
            marginLeft: 10,
            top: 6,
            backgroundColor: '#c3c3c3', // Change this to your desired rectangle color
        }} />
      </View>

      <View style={[{ top: 100, left: "8%" },
           styles.quizContainer,
         ]}>
        <Text style={styles.quizTitle}>Johann Bach</Text>
        <View style={{
            borderRadius: 31,
            width: 90,
            height: 90,
            marginLeft: 10,
            top: 6,
            backgroundColor: '#c3c3c3', // Change this to your desired rectangle color
        }} />
      </View>
      <View style={styles.blockContainer}>
        <Image
          source={require('../../assets/lock-icon.png')}
          style={{
            width: 50,
            height: 65,
            alignSelf: 'center',
            marginTop: 20,
          }}
        />
        <Text style={[
           { top: 0, left: "42%"},
           styles.lockedText,
         ]}>Locked...</Text>
      </View>
      {/* <Image source={require('../../assets/lock-icon.png')}
        style={{
            width: 50,
            height: 65, 
            marginLeft: 150,
            top: 160
          }} />
      <Text style={[
           { top: 155, left: "37%"},
           styles.lockedText,
         ]}>Locked...</Text> */}
    </ScrollView>
  );
};