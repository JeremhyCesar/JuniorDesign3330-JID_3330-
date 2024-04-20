import { Image, TouchableOpacity, Text, View, TextInput, Alert } from 'react-native'
import { useState, useEffect } from 'react';
import { useEmailPasswordAuth, useRealm } from '@realm/react';
import * as validator from 'validator';

export const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [passConf, setPassConf] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const {register, logIn, result} = useEmailPasswordAuth();

    useEffect(() => validateForm(), 
        [email, password, passConf]);


    const validateForm = () => {
        let error = '';

        if (!email || !password || !passConf) error = "Please fill out all fields.";
        else if (!validator.isEmail(email)) error = "Please enter a valid email address.";
        // TODO make sure email is unique once database is implemented
        else if (password.length < 6) error = "Please choose a password longer than 5 characters.";
        else if (password !== passConf) error = "Password must match with confirmation.";
        setError(error);
        setIsFormValid(error.length === 0);
    }

    const handleSubmit = () => {
        if (!isFormValid) setShowError(true);
        else {
            register({email: email, password: password});
            if (result.error) {
                setError(result.error.message);
                setShowError(true);
            } else {
                logIn({email: email, password: password});
                // navigation.navigate("LoginScreen");
            }
        }
    }

    return (
        <View>
            <Image source={require('../../assets/heart.png')} style={{top: 0, left: '58%', top: -1, width: 220, height: 180, transform: [{rotate: '7deg'}]}}/>
            <View style={{position: 'absolute', left: '10%', top: 200, width: '80%'}}>
                <Text style={{fontSize: 42, color: '#054584', fontWeight: 'bold'}}>Create Account</Text>
                <Text onPress={() => navigation.navigate('LoginScreen')} style={{position: 'absolute', fontSize: 14, top: 52, color: '#5555ff'}}>Already have an account? Log in here</Text>
                <Text style={{fontWeight: 'bold', position: 'absolute', fontSize: 12, left: 8, top: 103}}>e-mail address</Text>
                <TextInput onChangeText={setEmail} placeholderTextColor='#888888' placeholder={'juliesmith@gmail.com'} textContentType='emailAddress' inputMode='email' style={{fontSize: 16, position: 'absolute', top: 120, height: 40, width: '100%', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <Text style={{fontWeight: 'bold', position: 'absolute', fontSize: 12, left: 8, top: 163}}>password</Text>
                <TextInput onChangeText={setPassword} placeholderTextColor='#888888' placeholder={'••••••••••'} textContentType='password' secureTextEntry={true} style={{fontSize: 16, position: 'absolute', top: 180, height: 40, width: '100%', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <Text style={{fontWeight: 'bold', position: 'absolute', fontSize: 12, left: 8, top: 223}}>confirm password</Text>
                <TextInput onChangeText={setPassConf} placeholderTextColor='#888888' placeholder={'••••••••••'} textContentType='password' secureTextEntry={true} style={{fontSize: 16, position: 'absolute', top: 240, height: 40, width: '100%', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                {showError && <Text style={{position: 'absolute', top: 315, color: '#cc0000'}}>{error}</Text>}
                <TouchableOpacity onPress={() => handleSubmit()} style={{opacity: isFormValid ? 1: 0.5, borderRadius: 24, backgroundColor: '#054584', left: '45%', width: '55%', height: 60, top: 285, shadowOffset: {height: 5}, shadowColor: 'black', shadowOpacity: 0.25, elevation: 3}}>
                    <Text style={{top: 10, alignSelf: 'center', fontSize: 26, color: '#ffffff'}}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <Image style={{position: 'absolute', left: -20, top: 600}} source={require('../../assets/login-cello.png')}/>
        </View>
    )

} 