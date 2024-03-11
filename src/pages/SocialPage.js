import { Pressable, StyleSheet, ScrollView, Text, View, Image } from 'react-native';

export function Social({ navigation }) {
    const styles = StyleSheet.create({
        button: {
            borderRadius: 31,
            shadowOffset: {width: 4, height: 4},
            shadowColor: 'black',
            shadowOpacity: 0.25,
            width: '84%',
            height: 250,
            cursor: 'pointer'
        },
        toggle: {
            borderRadius: 50,
            shadowOffset: {width: 4, height: 4},
            shadowColor: 'black',
            shadowOpacity: 0.25,
            width: '84%',
            height: 500,
            cursor: 'pointer',
            marginTop: -50
        },
        sides: {
            backgroundColor: '#1E2237', 
            width: '70%', 
            height: 100, 
            borderRadius: 15,
            alignSelf: 'center', 
            marginTop: 280 
        },
        shape: {
            backgroundColor: '#252A40', 
            width: '25%', 
            height: 180, 
            borderTopLeftRadius: 15, // Rounded top left corner
            borderTopRightRadius: 15, // Straight top right corner
            borderBottomLeftRadius: 0, // Rounded bottom left corner
            borderBottomRightRadius: 0, // Straight bottom right corner
            alignSelf: 'center', 
            marginTop: -180
            <View style={styles.sides}></View>
            <View style={styles.shape}></View>
            <View style={[{top: 80, left: '8%', backgroundColor: '#1E2237'}, styles.toggle]}>
                <Text style={{
                    marginTop: 10,
                    left: '10%',
                    fontSize: 48,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: 'white'
                }}></Text>
            </View>
            <View style={{height: 100}}/>
        </ScrollView>
    );
}
