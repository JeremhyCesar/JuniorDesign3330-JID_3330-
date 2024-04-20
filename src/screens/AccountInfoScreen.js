import React, { useState } from 'react';
import { Image, TouchableOpacity, Text, View, TextInput, Switch } from 'react-native';
import { User } from '../models/User';
import { BSON } from 'realm';
import { useQuery, useRealm, useUser } from '@realm/react';
import { Class } from '../models/Class';

export const AccountInfoScreen = ({ navigation }) => {
    const realm = useRealm();
    const user = useUser();
    const classes = useQuery(Class);

    const [name, setName] = useState("");
    const [teacher, setTeacher] = useState(false);
    const [code, setCode] = useState(0);

    const toggleTeacher = () => setTeacher(previousState => !previousState);
    
    realm.subscriptions.update((mutableSubs) => {
        mutableSubs.add(realm.objects("User"), {name: "userSubscription"});
        mutableSubs.add(realm.objects("Class"), {name: "classSubscription"});
    })

    const handleConfirm = () => {
        const classFromCode = classes.find((object) => object.join_code == code);

        realm.write(() => {
            console.log(classes);
            console.log(classFromCode);
            if (classFromCode && !teacher) {
                classFromCode.students.push(
                    realm.create(User, {
                        _id: BSON.ObjectId(user.id),
                        full_name: name,
                        user_type: teacher ? 'Teacher' : 'Student',
                        enrolled_class: classFromCode
                    }));
            }
            else if (code == 0) {
                realm.create(User, {
                    _id: BSON.ObjectId(user.id),
                    full_name: name,
                    user_type: teacher ? 'Teacher' : 'Student',
                });
            }
        });
        if (!teacher) navigation.navigate('Home');
        else navigation.navigate('ClassCreation');
    }

    return (
        <View>
            <Image source={require('../../assets/heart.png')} style={{top: 0, left: '58%', top: -1, width: 220, height: 180, transform: [{rotate: '7deg'}]}}/>
            <View style={{position: 'absolute', left: '10%', top: 160, width: '80%'}}>
                <Text style={{fontSize: 48, color: '#054584', fontWeight: 'bold'}}>Welcome</Text>
                <Text style={{position: 'absolute', fontSize: 18, top: 60}}>Help us learn more about you!</Text>
                <Text style={{position: 'absolute', fontSize: 16, left: 8, top: 100}}>Full Name</Text>
                <TextInput onChangeText={setName} placeholderTextColor='#888888' placeholder={'Julie Smith'} textContentType='name' inputMode='text' style={{fontSize: 16, position: 'absolute', top: 125, height: 40, width: '100%', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <Text style={{position: 'absolute', fontSize: 16, top: 180}}>Are you a Teacher?</Text>
                <Switch style={{position: 'absolute', left: '70%', top: 175, }}onValueChange={toggleTeacher} value={teacher}/>
                <Text style={{position: 'absolute', fontSize: 16, top: 215}}>If you have a teacher who provided you with a class code, enter it here:</Text>
                <TextInput onChangeText={setCode} placeholderTextColor='#888888' placeholder={'385475'} style={{fontSize: 16, position: 'absolute', top: 265, height: 40, width: '100%', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <Text onPress={() => navigation.navigate('Home')} style={{position: 'absolute', fontSize: 14, top: 320, color: '#5555ff'}}>Click here if you've already done this</Text>
                <TouchableOpacity onPress={() => handleConfirm()} inputMode='numeric' style={{borderRadius: 24, backgroundColor: '#054584', left: '45%', width: '55%', height: 60, top: 295, shadowOffset: {height: 5}, shadowColor: 'black', shadowOpacity: 0.25, elevation: 3}}>
                    <Text style={{top: 10, alignSelf: 'center', fontSize: 26, color: '#ffffff'}}>CONFIRM</Text>
                </TouchableOpacity>
            </View>
            <Image style={{position: 'absolute', left: -20, top: 600}} source={require('../../assets/login-cello.png')}/>
        </View>
    )
}