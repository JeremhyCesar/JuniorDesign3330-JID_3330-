import { StyleSheet, ScrollView, Text, View, Image, Pressable } from 'react-native';

export function ClassicalComposers({navigation}) {
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
                top: 64,
                left: '8%',
                fontSize: 48,
                color: '#333'
            }}>Composers</Text>
            <Text style={{
                top: 68,
                left: '8%',
                fontSize: 20,
                textAlign: 'left',
                color: '#717171'
            }}>The minds behind the music!</Text>
            <Pressable onPress={() => navigation.navigate('Chopin')} style={[{top: 94, left: '8%', backgroundColor: '#ffffff'}, styles.button]}>
                <Text style={{
                    top: 26,
                    left: '8%',
                    fontSize: 30,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: '#dc7424',
                    width: 150,
                    flexWrap: 'wrap'
                }}>Frédéric Chopin</Text>
                <Image source={require('../../assets/chopin.png')} style={{
                    position: 'absolute',
                    top: 5,
                    left: '55%',
                    width: 120,
                    height: 150,
                    objectFit: 'cover'
                }}/>
            </Pressable>
            <View style={[{top: 109, left: '8%', backgroundColor: '#ffffff'}, styles.button]}>
                <Text style={{
                    top: 25,
                    left: '8%',
                    fontSize: 30,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: '#dc7424',
                    width: 165,
                    flexWrap: 'wrap'
                }}>Ludwig Van Beethoven</Text>
                <Image source={require('../../assets/Beethoven.png')} style={{
                    position: 'absolute',
                    top: 0,
                    left: '55%',
                    width: 120,
                    height: 155,
                    objectFit: 'cover'
                }}/>
            </View>
            
            <View style={[{top: 124, left: '8%', backgroundColor: '#ffffff'}, styles.button]}>
                <Text style={{
                    top: 40,
                    left: '8%',
                    fontSize: 30,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: '#dc7424',
                    width: 150,
                    flexWrap: 'wrap'
                }}>J. S. Bach</Text>
                <Image source={require('../../assets/Bach.png')} style={{
                    position: 'absolute',
                    top: 0,
                    left: '55%',
                    width: 120,
                    height: 150,
                    objectFit: 'cover'
                }}/>
            </View>
            
            <View style={{height: 180}}/>
        </ScrollView>
    );
}
import { StyleSheet, ScrollView, Text, View, Image, Pressable } from 'react-native';

export function ClassicalComposers({navigation}) {
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
                top: 64,
                left: '8%',
                fontSize: 48,
                color: '#333'
            }}>Composers</Text>
            <Text style={{
                top: 68,
                left: '8%',
                fontSize: 20,
                textAlign: 'left',
                color: '#717171'
            }}>The minds behind the music!</Text>
            <Pressable onPress={() => navigation.navigate('Chopin')} style={[{top: 94, left: '8%', backgroundColor: '#ffffff'}, styles.button]}>
                <Text style={{
                    top: 26,
                    left: '8%',
                    fontSize: 30,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: '#dc7424',
                    width: 150,
                    flexWrap: 'wrap'
                }}>Frédéric Chopin</Text>
                <Image source={require('../../assets/chopin.png')} style={{
                    position: 'absolute',
                    top: 5,
                    left: '55%',
                    width: 120,
                    height: 150,
                    objectFit: 'cover'
                }}/>
            </Pressable>
            <View style={[{top: 109, left: '8%', backgroundColor: '#ffffff'}, styles.button]}>
                <Text style={{
                    top: 25,
                    left: '8%',
                    fontSize: 30,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: '#dc7424',
                    width: 165,
                    flexWrap: 'wrap'
                }}>Ludwig Van Beethoven</Text>
                <Image source={require('../../assets/Beethoven.png')} style={{
                    position: 'absolute',
                    top: 0,
                    left: '55%',
                    width: 120,
                    height: 155,
                    objectFit: 'cover'
                }}/>
            </View>
            
            <View style={[{top: 124, left: '8%', backgroundColor: '#ffffff'}, styles.button]}>
                <Text style={{
                    top: 40,
                    left: '8%',
                    fontSize: 30,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: '#dc7424',
                    width: 150,
                    flexWrap: 'wrap'
                }}>J. S. Bach</Text>
                <Image source={require('../../assets/Bach.png')} style={{
                    position: 'absolute',
                    top: 0,
                    left: '55%',
                    width: 120,
                    height: 150,
                    objectFit: 'cover'
                }}/>
            </View>
            
            <View style={{height: 180}}/>
        </ScrollView>
    );
}
