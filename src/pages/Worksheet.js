import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

export function Worksheet() {
    return (
        <ScrollView style={styles.container}>
            {/* Add the worksheet title and subtitle */}
            <View style={styles.titleContainer}>
                <Image
                    source={require('../../assets/teaching-icon.png')}
                    style={styles.headerImage}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.worksheetTitle}>Worksheet</Text>
                    <Text style={styles.subtitle}>Practice your knowledge</Text>
                </View>
            </View>

            <Text style={styles.instruction}>
                Answer these questions on your own paper!
            </Text>

            {/* Section 1 */}
            <View style={styles.section}>
                <Text style={styles.header}>Section 1: Early Life and Education</Text>
                <Text style={styles.question}>Birth and Early Years:</Text>
                <Text style={styles.detail}>- Date and place of birth:</Text>
                <Text style={styles.detail}>- Age at which Chopin started playing piano:</Text>
            </View>

            {/* Repeat for other sections */}
            <View style={styles.section}>
                <Text style={styles.header}>Section 2: Life in Paris and Artistic Contributions</Text>
                {/* Add questions/details here */}
            </View>

            {/* Add more sections as needed */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 25, 
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    headerImage: {
        width: 100, 
        height: 100, 
        resizeMode: 'contain',
    },
    textContainer: {
        marginLeft: 20, 
    },
    worksheetTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#07a3e0',
    },
    subtitle: {
        fontSize: 16,
        color: '#07a3e0',
        fontStyle: 'italic',
    },
    instruction: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#07a3e0',
        marginVertical: -10, 
        textAlign: 'center', 
    },
    section: {
        marginBottom: 20,
        marginTop: 25,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
    },
    question: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 8,
        color: '#000',
    },
    detail: {
        fontSize: 14,
        marginLeft: 10,
        color: '#000',
    },
});
