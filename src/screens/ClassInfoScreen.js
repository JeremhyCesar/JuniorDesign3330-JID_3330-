import React, { useState } from 'react';
import { Image, TouchableOpacity, Text, View, TextInput, Switch, ScrollView } from 'react-native';
import { User } from '../models/User';
import { BSON } from 'realm';
import { useObject, useQuery, useRealm, useUser } from '@realm/react';
import { Class } from '../models/Class';

export const ClassInfoScreen = ({ navigation }) => {
    const realm = useRealm();
    const user = useObject(User, BSON.ObjectId(useUser().id));
    const students = useQuery(User).filtered('enrolled_class == $0', user.managed_class);
    
    realm.subscriptions.update((mutableSubs) => {
        mutableSubs.removeByName("studentSubscription");
        mutableSubs.add(realm.objects("User"), {name: "userSubscription"});
    })
    
    return (
        <View>
            <Text onPress={() => navigation.goBack()} style={{fontSize: 16, color: '#007AFF', fontSize: 20, top: 50, left: 20}}>Back</Text>
            <Image source={require('../../assets/heart.png')} style={{position: 'absolute', top: 0, left: '58%', top: -1, width: 220, height: 180, transform: [{rotate: '7deg'}]}}/>
            <View style={{position: 'absolute', left: '10%', top: 160, width: '80%'}}>
                <Text style={{fontSize: 40, color: '#054584', fontWeight: 'bold'}}>Class Info</Text>
                <Text style={{position: 'absolute', fontSize: 14, fontWeight: 'bold', top: 80}}>Class Name</Text>
                <Text style={{position: 'absolute', fontSize: 20, top: 75, left: '30%'}}>{user.managed_class.class_name}</Text>
                <Text style={{position: 'absolute', fontSize: 14, fontWeight: 'bold', top: 120}}>Join Code</Text>
                <Text style={{position: 'absolute', fontSize: 20, top: 115, left: '30%'}}>{user.managed_class.join_code}</Text>
                <Text style={{position: 'absolute', fontSize: 14, fontWeight: 'bold', top: 155}}>Students</Text>
                <ScrollView style={{position: 'absolute', top: 185, width: '100%', height: 160, borderRadius: 15, backgroundColor: '#cccccc'}}>
                    {students.map(student => {
                        return <Text style={{margin: 8, fontSize: 18, fontWeight: 'bold'}}>{student.full_name}</Text>;
                    })}
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{borderRadius: 24, backgroundColor: '#a0a0a0', width: '45%', height: 60, top: 310, shadowOffset: {height: 5}, shadowColor: 'black', shadowOpacity: 0.25, elevation: 3}}>
                    <Text style={{top: 10, alignSelf: 'center', fontSize: 26, color: '#ffffff'}}>RETURN</Text>
                </TouchableOpacity>
            </View>
            <Image style={{position: 'absolute', left: -20, top: 600}} source={require('../../assets/login-cello.png')}/>
        </View>
    )
}