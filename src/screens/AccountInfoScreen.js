import React, { useState } from 'react';
import { Image, TouchableOpacity, Text, View, TextInput, Switch } from 'react-native';

export const AccountInfoScreen = () => {
    const [name, setName] = useState("");
    const [teacher, setTeacher] = useState(false);

    const toggleTeacher = () => setTeacher(previousState => !previousState);

    return (
        <View>
            <Image source={require('../../assets/heart.png')} style={{top: 0, left: '58%', top: -1, width: 220, height: 180, transform: [{rotate: '7deg'}]}}/>
            <View style={{position: 'absolute', left: '10%', top: 160, width: '80%'}}>
                <Text style={{fontSize: 48, color: '#054584', fontWeight: 'bold'}}>Welcome</Text>
                <Text style={{position: 'absolute', fontSize: 18, top: 56}}>Help us learn more about you!</Text>
                <Text style={{fontWeight: 'bold', position: 'absolute', fontSize: 12, left: 8, top: 93}}>Full Name</Text>
                <TextInput onChangeText={setName} placeholderTextColor='#888888' placeholder={'Julie Smith'} textContentType='name' inputMode='text' style={{fontSize: 16, position: 'absolute', top: 110, height: 40, width: '100%', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <Text style={{position: 'absolute', fontSize: 16, top: 170}}>Are you a Teacher?</Text>
                <Switch onValueChange={toggleTeacher} value={teacher}/>
                <TextInput  placeholderTextColor='#888888' placeholder={'••••••••••'} textContentType='password' secureTextEntry={true} style={{fontSize: 16, position: 'absolute', top: 270, height: 40, width: '100%', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <TouchableOpacity onPress={console.log('hi')} style={{opacity: true ? 1: 0.5, borderRadius: 24, backgroundColor: '#054584', left: '45%', width: '55%', height: 60, top: 285, shadowOffset: {height: 5}, shadowColor: 'black', shadowOpacity: 0.25, elevation: 3}}>
                    <Text style={{top: 10, alignSelf: 'center', fontSize: 26, color: '#ffffff'}}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <Image style={{position: 'absolute', left: -20, top: 600}} source={require('../../assets/login-cello.png')}/>
        </View>
    )
}