import React, { useState } from 'react';
import { Image, TouchableOpacity, Text, View, TextInput, Switch } from 'react-native';
import { User } from '../models/User';
import { BSON } from 'realm';
import { useObject, useQuery, useRealm, useUser } from '@realm/react';
import { Class } from '../models/Class';

export const ClassInfoScreen = ({ navigation }) => {
    const user = useObject(User, BSON.ObjectId(useUser().id));


    return (
        <View>
            <Image source={require('../../assets/heart.png')} style={{top: 0, left: '58%', top: -1, width: 220, height: 180, transform: [{rotate: '7deg'}]}}/>
            <View style={{position: 'absolute', left: '10%', top: 200, width: '80%'}}>
                <Text style={{fontSize: 40, color: '#054584', fontWeight: 'bold'}}>Class Info</Text>
                <Text style={{position: 'absolute', fontSize: 14, fontWeight: 'bold', top: 120}}>Class Name</Text>
                <Text style={{position: 'absolute', fontSize: 20, top: 115, left: '30%'}}>{user.managed_class.class_name}</Text>
                <Text style={{position: 'absolute', fontSize: 14, fontWeight: 'bold', top: 160}}>Join Code</Text>
                <Text style={{position: 'absolute', fontSize: 20, top: 155, left: '30%'}}>{user.managed_class.join_code}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{borderRadius: 24, backgroundColor: '#a0a0a0', width: '45%', height: 60, top: 225, shadowOffset: {height: 5}, shadowColor: 'black', shadowOpacity: 0.25, elevation: 3}}>
                    <Text style={{top: 10, alignSelf: 'center', fontSize: 26, color: '#ffffff'}}>RETURN</Text>
                </TouchableOpacity>
            </View>
            <Image style={{position: 'absolute', left: -20, top: 600}} source={require('../../assets/login-cello.png')}/>
        </View>
    )
}