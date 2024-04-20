import { Image, TouchableOpacity, Text, View, TextInput } from 'react-native'
import { useState, useEffect } from 'react';
import { useRealm, useQuery } from '@realm/react';
import { useEmailPasswordAuth } from '@realm/react';
import * as validator from 'validator';
import { User } from 'realm';

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const {result, logIn} = useEmailPasswordAuth();

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
        else {
            logIn({email: email, password: password});
            if (result.error) {
                setError(result.error.message);
                setShowError(true);
            } /*else {
                let user = useUser();
                if (realm.objectForPrimaryKey(user.id) === null) {
                    realm.write(
                        realm.create(User, {
                            _id: user.id,

                        })
                    )
                }
            }*/
        }
    }

    return (
        <View>
            <Image source={require('../../assets/heart.png')} style={{top: -30, left: '30%'}}/>
            <View style={{position: 'absolute', left: '10%', top: 200, width: '80%'}}>
                <Text style={{fontSize: 60, color: '#f04b10', fontWeight: 'bold'}}>Login</Text>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#054584'}}>Please sign in to continue.</Text>
                <Text onPress={() => navigation.navigate('RegisterScreen')} style={{fontSize: 14, top: 8, color: '#5555ff'}}>Don't have an account? Register here</Text>
                <TextInput onChangeText={setEmail} placeholder={'example@gmail.com'} textContentType='emailAddress' inputMode='email' style={{fontSize: 16, top: 20, height: 60, padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <TextInput onChangeText={setPassword} placeholder={'••••••••••'} textContentType='password' secureTextEntry={true} style={{fontSize: 16, top: 35, height: 60, padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                {showError && <Text style={{position: 'absolute', top: 285, color: '#cc0000'}}>{error}</Text>}
                <TouchableOpacity onPress={() => handleSubmit()} style={{opacity: isFormValid ? 1 : 0.5, borderRadius: 24, backgroundColor: '#054584', left: '45%', width: '55%', height: 60, top: 80, shadowOffset: {height: 5}, shadowColor: 'black', shadowOpacity: 0.25, elevation: 3}}>
                    <Text style={{top: 10, alignSelf: 'center', fontSize: 26, color: '#ffffff'}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <Image style={{position: 'absolute', left: -20, top: 590}} source={require('../../assets/login-cello.png')}/>
        </View>
    )
} 