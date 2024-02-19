import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

export function Worksheet() {
    return (
        <View style={{flex:1}}>
            <View style={{
                top: 92,
                left: '12%',
                borderRadius: 31,
                backgroundColor: '#e3c565',
                width: '40%',
                height: 110,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={require('../../assets/teaching-icon.png')}
                style={{
                    width: 130,
                    height: 130,
                    resizeMode: 'contain'
                  }}
                  />
            </View>
            <Text style={{
                fontWeight: 'bold',
                top: 0,
                left: '63%',
                fontSize: 20,
                color: '#3e8ede'
            }}>Worksheet</Text>
            <View style={{
                top: 0,
                left: '61%',
                borderRadius: 5, 
                padding: 10, 
                width: '40%',
                height: 90,
                elevation: 2,
                }}>
                <Text style={{
                    fontSize: 15,
                    color: 'gray'
                }}>practice your knowledge
                </Text>
            </View>
            <View style={{
                top: 0,
                left: '7%',
                borderRadius: 5, 
                padding: 5, 
                width: '90%',
                height: 90,
                elevation: 2,
                }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    color: '#3e8ede'
                }}>Answer these questions on your own paper!
                </Text>
            </View>
        <ScrollView style={{marginTop: 0}}>
        <View style={styles.section}>
               <Text style={styles.header}>Section 1: Early Life and Education</Text>
               <Text style={styles.detail}>· Birth and Early Years:</Text>
               <Text style={styles.detail}>· Date and place of birth:</Text>
               <Text style={styles.detail}>· Age at which Chopin started playing piano:</Text>
               <Text style={styles.detail}>· Name two of Chopin's early music teachers:</Text>
               <Text style={styles.detail}>· Describe the role of Józef Elsner in Chopin's musical development:</Text>
               <Text style={styles.detail}>· How did Chopin's early musical education influence his later compositions?</Text>
           </View>
           <View style={styles.section}>
               <Text style={styles.header}>Section 2: Life in Paris and Artistic Contributions</Text>
               <Text style={styles.detail}>· At what age did Chopin leave Poland for Paris?</Text>
               <Text style={styles.detail}>· Describe the significance of Paris in Chopin's career:</Text>
               <Text style={styles.detail}>· What were the primary types of compositions Chopin focused on?</Text>
               <Text style={styles.detail}>· Explain how Chopin incorporated Polish folk music into his compositions:</Text>
               <Text style={styles.detail}>· Discuss the characteristics of Chopin's piano playing style:</Text>
               <Text style={styles.detail}>· What made Chopin's compositions technically demanding?</Text>
           </View>
           <View style={styles.section}>
               <Text style={styles.header}>Section 3: Personal Life and Relationships</Text>
               <Text style={styles.detail}>· Relationship with George Sand:</Text>
               <Text style={styles.detail}>· Who was George Sand, and what was her significance in Chopin's life?</Text>
               <Text style={styles.detail}>· How did Chopin's relationship with Sand influence his music?</Text>
           </View>
           <View style={styles.section}>
               <Text style={styles.header}>Section 4: Influence</Text>
               <Text style={styles.detail}>· How does Chopin's music continue to influence modern pianists and composers?</Text>
               <Text style={styles.detail}>· Conduct research on one of Chopin's major works (e.g., a specific Ballade, Prelude, or Nocturne) and analyze its musical and emotional qualities.</Text>
           </View>
        </ScrollView>
        </View>
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
        marginLeft: '8%', 
        marginRight: '5%', 
        marginBottom: 20,
        marginTop: 10,
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
        fontSize: 15,
        marginLeft: 10,
        color: '#000',
    },
});
