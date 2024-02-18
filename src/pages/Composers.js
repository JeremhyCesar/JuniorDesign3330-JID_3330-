import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';

export function Composers() {
    const styles = StyleSheet.create({
        button: {
            borderRadius: 30,
            shadowOffset: {width: 4, height: 4},
            shadowColor: 'black',
            shadowOpacity: 0.25,
            width: '84%',
            height: 125,
            cursor: 'pointer'
        }
    })
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <Text style={{
                fontWeight: 'bold',
                top: 32,
                left: '8%',
                fontSize: 48,
                color: '#333'
            }}>Composers</Text>
            <Text style={{
                top: 36,
                left: '8%',
                fontSize: 20,
                textAlign: 'left',
                color: '#717171'
            }}>The minds behind the music!</Text>
            <View style={[{top: 94, left: '8%', backgroundColor: '#ffffff'}, styles.button]}>
                <Text style={{
                    top: 26,
                    left: '10%',
                    fontSize: 32,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: '#dc7424',
                    width: 150,
                    flexWrap: 'wrap'
                }}>Frédéric Chopin</Text>
                <Image source={require('../../assets/chopin.png')} style={{
                    position: 'absolute',
                    top: 10,
                    left: '55%',
                    width: 120,
                    height: 120,
                    objectFit: 'cover'
                }}/>
            </View>
            <View style={[{top: 109, left: '8%', backgroundColor: '#ffffff'}, styles.button]}>
                <Text style={{
                    top: 11,
                    left: '10%',
                    fontSize: 32,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: '#dc7424',
                    width: 150,
                    flexWrap: 'wrap'
                }}>Ludwig Van Beethoven</Text>
                <Image source={require('../../assets/Beethoven.png')} style={{
                    position: 'absolute',
                    top: 10,
                    left: '55%',
                    width: 120,
                    height: 120,
                    objectFit: 'cover'
                }}/>
            </View>
            
            <View style={[{top: 124, left: '8%', backgroundColor: '#ffffff'}, styles.button]}>
                <Text style={{
                    top: 26,
                    left: '10%',
                    fontSize: 32,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: '#dc7424',
                    width: 150,
                    flexWrap: 'wrap'
                }}>Johannes Bach</Text>
                <Image source={require('../../assets/Bach.png')} style={{
                    position: 'absolute',
                    top: 10,
                    left: '55%',
                    width: 120,
                    height: 120,
                    objectFit: 'cover'
                }}/>
            </View>
            
            <View style={{height: 180}}/>
        </ScrollView>
    );
}
