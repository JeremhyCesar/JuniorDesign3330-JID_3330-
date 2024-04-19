// UserPage.js
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native';
import { useEmailPasswordAuth, useObject, useUser } from '@realm/react';
import { User } from '../models/User';
import { BSON } from 'realm';

export function UserPage({ navigation }) {
    const { logOut } = useEmailPasswordAuth();
    const user = useObject(User, BSON.ObjectID(useUser().id));

    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    onPress: () => {
                        logOut();
                    },
                },
            ],
            { cancelable: false }
        );
    };
    
    

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={[styles.backButtonText, {fontSize: 20, top: 30}]}>Back</Text>
            </Pressable>
            <Image source={require('../../assets/profile-picture.jpeg')} style={styles.profilePicture} />
            <View style={styles.buttonContainer}>
                {user.user_type === "Teacher" &&
                <Pressable style={[styles.button, styles.settingsButton]} onPress={() => navigation.navigate(user.managed_class === null ? 'ClassCreation' : 'ClassInfo')}>
                    <Text style={styles.buttonText}>Class Settings</Text>
                </Pressable>}
                <Pressable style={[styles.button, styles.settingsButton]} onPress={() => navigation.navigate('Settings')}>
                    <Text style={styles.buttonText}>Settings</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Logout</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        padding: 10,
    },
    backButtonText: {
        fontSize: 16,
        color: '#007AFF', 
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 40,
    },
    button: {
        width: 200,
        paddingVertical: 15,
        borderRadius: 25,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    settingsButton: {
        backgroundColor: '#007AFF', 
    },
    logoutButton: {
        backgroundColor: '#FF3B30', 
    },
});
