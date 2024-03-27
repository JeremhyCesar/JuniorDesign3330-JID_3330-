import { Image, Pressable, Text, View, TextInput, ScrollView } from 'react-native'

export const LoginScreen = (navigation) => {
    return (
        <View>
            <Image source={require('../../assets/heart.png')} style={{top: -30, left: '30%'}}/>
            <View style={{position: 'absolute', left: '10%', top: 200, width: '80%'}}>
                <Text style={{fontSize: 60, color: '#f04b10', fontWeight: 'bold'}}>Login</Text>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#054584'}}>Please sign in to continue.</Text>
                <TextInput placeholder={'example@gmail.com'} textContentType='emailAddress' inputMode='email' style={{fontSize: 16, top: 30, height: 60, padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <TextInput placeholder={'••••••••••'} textContentType='password' secureTextEntry={true} style={{fontSize: 16, top: 45, height: 60, padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#888888'}}/>
                <Pressable onPress={console.log('validateCredentials')} style={{borderRadius: 24, backgroundColor: '#054584', left: '45%', width: '55%', height: 60, top: 70, shadowOffset: {height: 5}, shadowColor: 'black', shadowOpacity: 0.25, elevation: 3}}>
                    <Text style={{top: 10, alignSelf: 'center', fontSize: 26, color: '#ffffff'}}>LOGIN</Text>
                </Pressable>
            </View>
            <Image style={{position: 'absolute', left: -20, top: 470}} source={require('../../assets/login-cello.png')}/>
        </View>
    )
} 