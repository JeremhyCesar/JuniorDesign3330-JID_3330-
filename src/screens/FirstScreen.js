import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export const FirstScreen = ({ navigation }) => {

    return (
        <View style={{alignItems: 'center', backgroundColor: 'white', height: '100%'}}>
            <View style={{top:80}}>
                <Text style={{color: '#f04b10', fontSize: 55, fontWeight: 'bold'}}>NoteMakers</Text>
                <Text style={{color: '#2d6f9a', fontSize: 24, position: 'absolute', top: 65}}>Ready to learn?</Text>
            </View>
            <Image style={{top: 80}} source={require('../../assets/front-page-cello.png')}/>
            <Pressable onPress={() => navigation.navigate('LoginScreen')} style={{borderRadius: 24, backgroundColor: '#054584', width: '75%', height: 60, top: 35, shadowOffset: {height: 5}, shadowColor: 'black', shadowOpacity: 0.25, elevation: 3}}>
                <Text style={{top: 10, alignSelf: 'center', fontSize: 26, color: '#ffffff'}}>LOGIN</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('RegisterScreen')} style={{borderRadius: 24, backgroundColor: '#ffffff', borderColor: '#054584', borderWidth: 4, width: '75%', height: 60, top: 55, shadowOffset: {height: 5}, shadowColor: 'black', shadowOpacity: 0.15, elevation: 3}}>
                <Text style={{top: 7, alignSelf: 'center', fontSize: 26, color: '#054584'}}>SIGN UP</Text>
            </Pressable>
        </View>
    );
}