// UserPage.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, StyleSheet, Alert} from 'react-native';
import { useEmailPasswordAuth, useObject, useUser, TextInput} from '@realm/react';
import { User } from '../models/User';
import { BSON } from 'realm';

export function UserPage({ navigation }) {
    const { logOut } = useEmailPasswordAuth();
    const user = useObject(User, BSON.ObjectID(useUser().id));
    const currentUser = useUser();

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
            <Text style={[styles.backButtonText, {fontSize: 20, top: 10}]}>Back</Text>
        </Pressable>
      <View style={styles.header}>
        <Image source={require('../../assets/profile-picture.jpeg')} style={styles.profilePic} />
        <Text style={styles.name}>{user.full_name}</Text>
        <Text style={styles.email}>{currentUser.profile.email}</Text>
      </View>
      <Pressable style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>

    </View>
  );
}

export default UserPage;

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        padding: 10,
    },
    button: {
        width: 200,
        paddingVertical: 15,
        borderRadius: 25,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: 100
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutButton: {
        backgroundColor: '#FF3B30', 
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    header: {
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: 230
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },
    email: {
        fontSize: 20,
        marginTop: 10,
    },
    menuItem: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    menuText: {
        fontSize: 18,
    },
    quizContent: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});
