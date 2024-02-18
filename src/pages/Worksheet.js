import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export function WorksheetPage({ navigation }) {
    const styles = StyleSheet.create({
        evaArrowIosBackFillIcon: {
            position: 'absolute',
            top: 61,
            left: 15,
            width: 35,
            height: 35.7,
            overflow: 'hidden',
        },
        section1EarlyLifeAndEduc: {
            margin: 0,
        },
        birthAndEarly: {
            fontWeight: '300',
        },
        // Additional styles...
        answerTheseQuestions: {
            position: 'absolute',
            top: 162,
            left: 37,
            fontSize: 40, // Adjust this based on your application's design system
            fontWeight: '600',
            color: '#00BFFF', // Example color, replace with your actual variable or hex code
            width: 333,
        },
        teaching1Icon2: {
            position: 'absolute',
            top: 30,
            left: 75,
            width: 123,
            height: 127,
            resizeMode: 'cover', // Adjusted for React Native
        },
        worksheetContainer: {
            backgroundColor: 'white',
            padding: 20, // Example padding, adjust as needed
        },
    });

    return (
        <ScrollView style={styles.worksheetContainer}>
            <Text style={styles.answerTheseQuestions}>Answer these questions on your own paper!</Text>
            {/* Assuming you're showing questions dynamically, here's a placeholder */}
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>Section 1: Early Life and Education</Text>
                {/* Example question */}
                <Text>1. What is the date and place of birth of Chopin?</Text>
                {/* Add more questions and sections similarly */}
            </View>
            {/* Example for adding an image */}
            <Image
                source={require('../../assets/teaching-icon.png')} // Adjust path as needed
                style={styles.teaching1Icon2}
            />
            {/* Add more content as needed */}
        </ScrollView>
    );
}
