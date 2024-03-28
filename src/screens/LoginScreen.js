import { Image, TouchableOpacity, Text, View, TextInput } from 'react-native'
import { useState, useEffect } from 'react';
import * as validator from 'validator';

export const LoginScreen = (navigation) => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => validateForm(),
        [email, password]);
    
    const validateForm = () => {
        let error = '';
        if (!email || !validator.isEmail(email)) error = "Please enter a valid email address.";
        if (!password) error = "Please enter a password."
        setError(error);
        setIsFormValid(error.length === 0);
    }

    const handleSubmit = () => {
        if (!isFormValid) setShowError(true);
    }

    return (
        <View>
            <Image source={require('../../assets/heart.png')} style={{top: -30, left: '30%'}}/>
            <View style={{position: 'absolute', left: '10%', top: 200, width: '80%'}}>
                <Text style={{fontSize: 60, color: '#f04b10', fontWeight: 'bold'}}>Login</Text>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#054584'}}>Please sign in to continue.</Text>
                <TextInput placeholder={'example@gmail.com'} textContentType='emailAddress' inputMode='email' style={{fontSize: 16, top: 30, height: 60, padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <TextInput placeholder={'••••••••••'} textContentType='password' secureTextEntry={true} style={{fontSize: 16, top: 45, height: 60, padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                {showError && <Text style={{position: 'absolute', top: 285, color: '#cc0000'}}>{error}</Text>}
                <TouchableOpacity onPress={() => handleSubmit()} style={{opacity: isFormValid ? 1 : 0.5, borderRadius: 24, backgroundColor: '#054584', left: '45%', width: '55%', height: 60, top: 80, shadowOffset: {height: 5}, shadowColor: 'black', shadowOpacity: 0.25, elevation: 3}}>
                    <Text style={{top: 10, alignSelf: 'center', fontSize: 26, color: '#ffffff'}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <Image style={{position: 'absolute', left: -20, top: 590}} source={require('../../assets/login-cello.png')}/>
        </View>
    )
} 