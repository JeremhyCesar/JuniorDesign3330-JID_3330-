import React, { useState } from 'react';
import { Image, TouchableOpacity, Text, View, TextInput, Switch } from 'react-native';
import { User } from '../models/User';
import { BSON } from 'realm';
import { useObject, useQuery, useRealm, useUser } from '@realm/react';
import { Class } from '../models/Class';
import 'react-native-get-random-values';

export const ClassCreationScreen = ({ navigation }) => {
    const realm = useRealm();
    const user = useObject(User, BSON.ObjectId(useUser().id));
    const classes = useQuery(Class);

    const [name, setName] = useState("");

    const handleCreate = () => {
        if (user.managed_class !== null) return;
        let code = 0;
        while (code === 0) {
            code = Math.floor(100000 + 900000 * Math.random());
            if (classes.filtered('join_code == $0', code).length > 0) code = 0;
        }
        realm.subscriptions.update((mutableSubs) => {
            mutableSubs.add(classes, {name: "classSubscription"});
        })
        
        realm.write(() => {
            user.managed_class = realm.create(Class, {
                _id: BSON.ObjectId(),
                class_name: name,
                teacher: user,
                join_code: code
            })
        })
        realm.subscriptions.update((mutableSubs) => {
            mutableSubs.removeByName("classSubscription");
            mutableSubs.add(classes.filtered('join_code == $0', code), {name: "classSubscription"});
        });
        navigation.navigate('ClassInfo');
    }

    return (
        <View>
            <Image source={require('../../assets/heart.png')} style={{top: 0, left: '58%', top: -1, width: 220, height: 180, transform: [{rotate: '7deg'}]}}/>
            <View style={{position: 'absolute', left: '10%', top: 200, width: '80%'}}>
                <Text style={{fontSize: 40, color: '#054584', fontWeight: 'bold'}}>Class Creation</Text>
                <Text style={{position: 'absolute', fontSize: 18, top: 60}}>Would you like to create a class?</Text>
                <Text style={{position: 'absolute', fontSize: 14, top: 90}}>With a class, you can monitor your students' progress and create online quizzes for them to take together!</Text>
                <Text style={{position: 'absolute', fontSize: 16, left: 8, top: 170}}>Class Name</Text>
                <TextInput onChangeText={setName} placeholderTextColor='#888888' placeholder={'Advanced Orchestra'} textContentType='name' inputMode='text' style={{fontSize: 16, position: 'absolute', top: 195, height: 40, width: '100%', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{borderRadius: 24, backgroundColor: '#a0a0a0', width: '40%', height: 60, top: 225, shadowOffset: {height: 5}, shadowColor: 'black', shadowOpacity: 0.25, elevation: 3}}>
                    <Text style={{top: 10, alignSelf: 'center', fontSize: 26, color: '#ffffff'}}>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleCreate()} style={{borderRadius: 24, backgroundColor: '#054584', left: '45%', width: '55%', height: 60, top: 170, shadowOffset: {height: 5}, shadowColor: 'black', shadowOpacity: 0.25, elevation: 3}}>
                    <Text style={{top: 10, alignSelf: 'center', fontSize: 26, color: '#ffffff'}}>CONFIRM</Text>
                </TouchableOpacity>
            </View>
            <Image style={{position: 'absolute', left: -20, top: 600}} source={require('../../assets/login-cello.png')}/>
        </View>
    )
}