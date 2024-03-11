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
        },
        line: {
            backgroundColor: '#699BF7', 
            width: '15%', 
            height: 3,
            left: 60,
            borderRadius: 20,
            top: 80,
        },
        circleImage: {
            width: 60,
            height: 60,
            borderRadius: 30, 
            borderWidth: 5,
            color: 'white',
            position: 'absolute',
            top: 40, 
            alignSelf: 'center', 
            zIndex: 1, 
        },
       
        smallCircleContainer: {
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: 30,
            height: 30,
            borderRadius: 15,
            alignSelf: 'center',
            zIndex: 1,
        },

        numberText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
        },
        
    })
    return (
        <ScrollView style={{backgroundColor: '#00347F'}}>
            <Text style={{
                fontWeight: 'bold',
                top: 64,
                left: '40%',
                fontSize: 30,
                color: 'white'
            }}>Social</Text>
            <View style={{
                top: 92,
                left: '8%',
                borderRadius: 15,
                backgroundColor: '#e24808',
                shadowOffset: {width: 4, height: 4},
                shadowColor: 'black',
                shadowOpacity: 0.25,
                width: '84%',
                height: 60
            }}>
                <Text style={{
                    position: 'absolute',
                    top: '30%',
                    left: '-18%',
                    fontSize: 18,
                    fontWeight: 500,
                    width: '70%',
                    shadowOffset: {width: 4, height: 4},
                    shadowColor: 'black',
                    shadowOpacity: 0.25,
                    color: 'white',
                    flexWrap: 'wrap',
                    textAlign: 'center'
                }}>Friends</Text>
                <Text style={{
                    position: 'absolute',
                    top: '30%',
                    left: '15%',
                    fontSize: 18,
                    fontWeight: 500,
                    width: '70%',
                    shadowOffset: {width: 4, height: 4},
                    shadowColor: 'black',
                    shadowOpacity: 0.25,
                    color: 'white',
                    flexWrap: 'wrap',
                    textAlign: 'center'
                }}>National</Text>
                <Text style={{
                    position: 'absolute',
                    top: '30%',
                    left: '48%',
                    fontSize: 18,
                    fontWeight: 500,
                    width: '70%',
                    shadowOffset: {width: 4, height: 4},
                    shadowColor: 'black',
                    shadowOpacity: 0.25,
                    color: 'white',
                    flexWrap: 'wrap',
                    textAlign: 'center'
                }}>Global</Text>
            </View>
            <View style={styles.line}></View>
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
            <Pressable onPress={() => {}} style={{ top: -730}}>
                <Image source={require('../../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg')} style={styles.circleImage} />
            </Pressable>

            <Pressable onPress={() => {}} style={{ left: '24%' , top: -650}}>
                <Image source={require('../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg')} style={styles.circleImage} />
            </Pressable>

            <Pressable onPress={() => {}} style={{ left: '-25%' , top: -650}}>
                <Image source={require('../../assets/oguz-yagiz-kara-MZf0mI14RI0-unsplash.jpg')} style={styles.circleImage} />
            </Pressable>

            <View style={[{top: 370, left: '21.5%', backgroundColor: '#009BD6'}, styles.smallCircleContainer]}>
                <Text style={styles.numberText}>2</Text>
            </View>

            <View style={[{top: 290, left: '46.5%', backgroundColor: '#FFAA00'}, styles.smallCircleContainer]}>
                <Text style={styles.numberText}>1</Text>
            </View>

            <View style={[{top: 370, left: '71.5%', backgroundColor: '#00D95F'}, styles.smallCircleContainer]}>
                <Text style={styles.numberText}>3</Text>
            </View>

            <View style={{height: 100}}/>
        </ScrollView>
    );
}

