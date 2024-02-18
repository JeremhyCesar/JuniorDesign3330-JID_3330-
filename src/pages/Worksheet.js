import { Pressable, StyleSheet, ScrollView, Text, View, Image } from 'react-native';

export class Worksheet {
    static styles = StyleSheet.create({
        evaArrowIosBackFillIcon: {
            position: 'absolute',
            top: 61,
            left: 15,
            width: 35,
            height: 35.7,
            overflow: 'hidden',
            cursor: 'pointer',
        },
        section1EarlyLifeAndEduc: {
            margin: 0,
        },
        birthAndEarly: {
            fontWeight: '300',
        },
        birthAndEarlyYears: {
            marginBottom: 0,
        },
        birthAndEarlyYearsDateAn: {
            margin: 0,
            paddingLeft: 48, // Assuming '--padding-2xl' is equivalent to 48, adjust based on actual value
        },
        blankLine: {
            margin: 0,
            fontWeight: '300',
        },
        section1EarlyContainer: {
            position: 'absolute',
            top: 235,
            left: 37,
            width: 333,
            display: 'flex', // Changed from 'inline-block' for React Native
        },
        teaching1Icon2: {
            position: 'absolute',
            top: 30,
            left: 75,
            width: 123,
            height: 127,
            resizeMode: 'cover', // Changed from 'object-fit' for React Native
        },
        answerTheseQuestions: {
            position: 'absolute',
            top: 162,
            left: 37,
            fontSize: 40, // Adjust '--font-size-5xl' based on actual value
            fontWeight: '600',
            color: '#00BFFF', // Assuming '--color-deepskyblue-100' translates to '#00BFFF'
            width: 333,
            display: 'flex', // Changed from 'inline-block' for React Native
        },
        teaching2Icon: {
            position: 'absolute',
            top: 25,
            left: 76,
            width: 123,
            height: 127,
            resizeMode: 'cover', // Changed from 'object-fit' for React Native
        },
        rectangle1: {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: '#DCDCDC', // Assuming '--color-gainsboro-200' translates to '#DCDCDC'
        },
        rectangleContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 414,
            height: 41.3,
            overflow: 'hidden',
        },
        navBarBackground1: {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0.12,
            left: 0,
            backgroundColor: '#FF4500', // Assuming '--color-orangered-200' translates to '#FF4500'
            boxShadow: {
                width: 0,
                height: 2,
                shadowColor: '#333333',
                shadowOpacity: 0.14,
                shadowRadius: 10,
            },
        },
        homeIndicator2: {
            position: 'absolute',
            bottom: 8,
            left: '50%', // Changed from 'calc(50% - 67.1px)' for React Native
            borderRadius: 100, // Adjust '--br-81xl' based on actual value
            backgroundColor: '#FFFFFF', // Assuming '--color-white' translates to '#FFFFFF'
            width: 134,
            height: 5,
            marginLeft: -67.1, // Adjust for centering
        },
    });
}
