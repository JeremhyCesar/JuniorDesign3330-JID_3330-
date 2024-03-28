import { Image, Pressable, Text, View, TextInput, ScrollView, useState } from 'react-native'

export const RegisterScreen = (navigation) => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [passConf, setPassConf] = useState('');
    const [errors, setErrors] = useState({}); 
    const [isFormValid, setIsFormValid] = useState(false);

    return (
        <View>
            <Image source={require('../../assets/heart.png')} style={{top: 0, left: '58%', top: -1, width: 220, height: 180, transform: [{rotate: '7deg'}]}}/>
            <View style={{position: 'absolute', left: '10%', top: 200, width: '80%'}}>
                <Text style={{fontSize: 42, color: '#054584', fontWeight: 'bold'}}>Create Account</Text>
                <Text style={{fontWeight: 'bold', position: 'absolute', fontSize: 12, left: 8, top: 63}}>Full Name</Text>
                <TextInput placeholder={'Julie Smith'} textContentType='name' inputMode='text' style={{fontSize: 16, position: 'absolute', top: 80, height: 40, width: '100%', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <Text style={{fontWeight: 'bold', position: 'absolute', fontSize: 12, left: 8, top: 123}}>e-mail address</Text>
                <TextInput placeholder={'juliesmith@gmail.com'} textContentType='emailAddress' inputMode='email' style={{fontSize: 16, position: 'absolute', top: 140, height: 40, width: '100%', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <Text style={{fontWeight: 'bold', position: 'absolute', fontSize: 12, left: 8, top: 183}}>password</Text>
                <TextInput placeholder={'••••••••••'} textContentType='password' secureTextEntry={true} style={{fontSize: 16, position: 'absolute', top: 200, height: 40, width: '100%', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <Text style={{fontWeight: 'bold', position: 'absolute', fontSize: 12, left: 8, top: 243}}>confirm password</Text>
                <TextInput placeholder={'••••••••••'} textContentType='password' secureTextEntry={true} style={{fontSize: 16, position: 'absolute', top: 260, height: 40, width: '100%', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <Pressable onPress={console.log('validateCredentials')} style={{borderRadius: 24, backgroundColor: '#054584', left: '45%', width: '55%', height: 60, top: 270, shadowOffset: {height: 5}, shadowColor: 'black', shadowOpacity: 0.25, elevation: 3}}>
                    <Text style={{top: 10, alignSelf: 'center', fontSize: 26, color: '#ffffff'}}>LOGIN</Text>
                </Pressable>
            </View>
            <Image style={{position: 'absolute', left: -20, top: 470}} source={require('../../assets/login-cello.png')}/>
        </View>
    )
} 