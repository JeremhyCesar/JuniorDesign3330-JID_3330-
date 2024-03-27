import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen";
import { FirstScreen } from "../screens/FirstScreen";

const Stack = createNativeStackNavigator();

 const LoginNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="FirstScreen" component = {FirstScreen}/>
            <Stack.Screen name="LoginScreen" component = {LoginScreen}/>
        </Stack.Navigator>
    );
};

export default LoginNavigator;