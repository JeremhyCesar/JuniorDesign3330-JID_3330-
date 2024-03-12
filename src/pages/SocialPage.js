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
            borderTopLeftRadius: 15, 
            borderTopRightRadius: 15, 
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0, 
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
            width: 70,
            height: 70,
            borderRadius: 30, 
            borderWidth: 5,
            borderColor: 'white',
            position: 'absolute',
            top: 40, 
            alignSelf: 'center', 
            zIndex: 1, 
        },
        userImage: {
            width: 60,
            height: 60,
            borderRadius: 30, 
            borderWidth: 5,
            borderColor: 'white',
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
        nameText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
        },
        userText: {
            color: 'grey',
            fontSize: 10,
            fontWeight: 'regular',
        },
        longLine: {
            backgroundColor: 'grey', 
            width: '68%', 
            height: 2,
            left: 65,
            borderRadius: 20,
            position: 'absolute',
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

            <View style={[{top: 370, left: '70.5%', backgroundColor: '#00D95F'}, styles.smallCircleContainer]}>
                <Text style={styles.numberText}>3</Text>
            </View>

            <Pressable onPress={() => {}} style={{ left: '-25%' , top: -80}}>
                <Image source={require('../../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')} style={styles.userImage} />
            </Pressable>

            <Pressable onPress={() => {}} style={{ left: '-25%' , top: -170}}>
                <Image source={require('../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg')} style={styles.userImage} />
            </Pressable>

            <Pressable onPress={() => {}} style={{ left: '-25%' , top: -260}}>
                <Image source={require('../../assets/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg')} style={styles.userImage} />
            </Pressable>

            <Pressable onPress={() => {}} style={{ left: '-25%' , top: -350}}>
                <Image source={require('../../assets/ed-pylypenko-7zcbtbI4E2o-unsplash.jpg')} style={styles.userImage} />
            </Pressable>

            <Pressable onPress={() => {}} style={{ left: '-25%' , top: -440}}>
                <Image source={require('../../assets/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg')} style={styles.userImage} />
            </Pressable>

            <Text style={[{top: -520, left: 89} ,styles.nameText]}>Jim</Text>
            <Text style={[{top: -620, left: 187.5} ,styles.nameText]}>Dave</Text>
            <Text style={[{top: -558, left: 290} ,styles.nameText]}>Tina</Text>

            <Text style={[{top: -545, left: 86} ,styles.userText]}>@jimbo</Text>
            <Text style={[{top: -635, left: 181.5} ,styles.userText]}>@thedavid</Text>
            <Text style={[{top: -570, left: 287} ,styles.userText]}>@tina12</Text>

            <Text style={[{top: -385, left: 150} ,styles.nameText]}>John</Text>
            <Text style={[{top: -310, left: 150} ,styles.nameText]}>Mary</Text>
            <Text style={[{top: -243, left: 150} ,styles.nameText]}>Lara</Text>
            <Text style={[{top: -170, left: 150} ,styles.nameText]}>May</Text>
            <Text style={[{top: -558, left: 150} ,styles.nameText]}>Bob</Text>

            <Text style={[{top: -459, left: 150} ,styles.userText]}>@heyitsjohn</Text>
            <Text style={[{top: -376, left: 150} ,styles.userText]}>@hadalamb</Text>
            <Text style={[{top: -305, left: 150} ,styles.userText]}>@thatgirllara</Text>
            <Text style={[{top: -222, left: 150} ,styles.userText]}>@springmay</Text>
            <Text style={[{top: -600, left: 150} ,styles.userText]}>@robert</Text>


            <View style={[{top: 605} ,styles.longLine]}></View>
            <View style={[{top: 695} ,styles.longLine]}></View>
            <View style={[{top: 785} ,styles.longLine]}></View>
            <View style={[{top: 875} ,styles.longLine]}></View>

        <View style={{height: 100}}/>
        </ScrollView>
    );
}

