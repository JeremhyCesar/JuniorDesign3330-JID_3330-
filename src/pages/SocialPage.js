import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import { useEmailPasswordAuth } from '@realm/react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();


export function SocialPage({ navigation }) {
   const [activeTab, setActiveTab] = useState('Friends');
   const { logOut } = useEmailPasswordAuth();
   const styles = StyleSheet.create({
       title: {
           fontWeight: 'bold',
           textAlign: 'center',
           fontSize: 30,
           color: 'white',
           marginTop: 64,
       },
       tabBar: {
           backgroundColor: '#e24808',
           borderRadius: 15,
           marginLeft: '15%',
           width: '70%',
           height: 60,
           shadowOffset: { width: 4, height: 4 },
           shadowColor: 'black',
           shadowOpacity: 0.25,
           marginTop: 70,
       },
       tabLabel: {
           fontSize: 20,
           fontWeight: '500',
           textTransform: 'none',
           color: 'white',
           top: 3,
       },
       indicator: {
           backgroundColor: '#699BF7',
           height: 4,
           width: 60,
           borderRadius: 20,
           left: 42,
       },
       scrollView: {
           backgroundColor: '#00347F',
       },
   });


   return (
       <View style={{ flex: 1, backgroundColor: '#00347F' }}>
           <Text style={styles.title}>Social</Text>
           <Pressable onPress={() => logOut()} style={{top: 17, left: '65%', height: 40, width: '30%', backgroundColor: '#1e2237', borderRadius: 15}}>
               <Text style={{top: 5, left: '15%', color: 'white', fontSize: 20}}>LOG OUT</Text>
           </Pressable>
           <Tab.Navigator
               initialRouteName="Friends"
               tabBarOptions={{
                   labelStyle: styles.tabLabel,
                   style: styles.tabBar,
                   indicatorStyle: styles.indicator,
                   activeTintColor: 'white',
                   inactiveTintColor: 'grey',
               }}
               onTabPress={({ route }) => setActiveTab(route.name)}>
               <Tab.Screen name="Friends" component={FriendsPage} />
               <Tab.Screen name="Classes" component={ClassPage} />
           </Tab.Navigator>
       </View>
   );
}


function FriendsPage() {
   const styles = StyleSheet.create({
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
       smallCircleImage: {
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
           zIndex: 5
       },
       nameText: {
           color: 'white',
           fontSize: 16,
           fontWeight: 'bold',
           zIndex: 6
       },
       userText: {
           color: 'grey',
           fontSize: 10,
           fontWeight: 'regular',
           zIndex: 6
       },
       longLine: {
           backgroundColor: 'grey',
           width: '68%',
           height: 2,
           left: 65,
           borderRadius: 20,
           position: 'absolute',
           zIndex: 2
       },
       friendsPageBackground: {
           backgroundColor: '#00347F',
           flex: 1,
       },
       toggle: {
           position: 'center',
           height: 500,
           width: 345,
           borderTopLeftRadius: 15,
           borderTopRightRadius: 15,
           borderBottomLeftRadius: 0,
           borderBottomRightRadius: 0,
           zIndex: 1
       }
   });


   return (
       <ScrollView style={[styles.friendsPageBackground, { flex: 1 }]}>
           <View style={[{top: -90}, styles.sides]}></View>
           <View style={[{top: -90}, styles.shape]}></View>


           {/* Images */}
           <View>
               <Pressable onPress={() => { }} style={{ top: -360 }}>
                   <Image source={require('../../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg')} style={styles.circleImage} />
               </Pressable>


               <Pressable onPress={() => { }} style={{ left: '24%', top: -280 }}>
                   <Image source={require('../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg')} style={styles.circleImage} />
               </Pressable>


               <Pressable onPress={() => { }} style={{ left: '-23.5%', top: -280 }}>
                   <Image source={require('../../assets/oguz-yagiz-kara-MZf0mI14RI0-unsplash.jpg')} style={styles.circleImage} />
               </Pressable>
           </View>


           {/* Text */}
           <View>
               <Text style={[{ top: -165, left: 94 }, styles.nameText]}>Jim</Text>
               <Text style={[{ top: -260, left: 187.5 }, styles.nameText]}>Dave</Text>
               <Text style={[{ top: -203, left: 287 }, styles.nameText]}>Tina</Text>


               <Text style={[{ top: -200, left: 90 }, styles.userText]}>@jimbo</Text>
               <Text style={[{ top: -290, left: 181.5 }, styles.userText]}>@thedavid</Text>
               <Text style={[{ top: -225, left: 287 }, styles.userText]}>@tina12</Text>
           </View>


           <View style={[{ top: -150, left: '8%', backgroundColor: '#1E2237', zIndex: 1 }, styles.toggle]}>
               <Text style={[{ top: 25, left: 130 }, styles.nameText]}>John</Text>
               <Text style={[{ top: 95, left: 130 }, styles.nameText]}>Mary</Text>
               <Text style={[{ top: 165, left: 130 }, styles.nameText]}>Lara</Text>
               <Text style={[{ top: 325, left: 130 }, styles.nameText]}>May</Text>
               <Text style={[{ top: 212, left: 130 }, styles.nameText]}>Bob</Text>


               <Text style={[{ top: -50, left: 130 }, styles.userText]}>@heyitsjohn</Text>
               <Text style={[{ top: 30, left: 130 }, styles.userText]}>@hadalamb</Text>
               <Text style={[{ top: 107, left: 130 }, styles.userText]}>@thatgirllara</Text>
               <Text style={[{ top: 275, left: 130 }, styles.userText]}>@springmay</Text>
               <Text style={[{ top: 168, left: 130 }, styles.userText]}>@robert</Text>


               <Pressable onPress={() => { }} style={{ top: 85, left: -100, }}>
                   <Image source={require('../../assets/vicko-mozara-m82uh_vamhg-unsplash.jpg')} style={styles.smallCircleImage} />
               </Pressable>


               <Pressable onPress={() => { }} style={{ top: -5, left: -100, }}>
                   <Image source={require('../../assets/park-troopers-RAtKWVlfdf4-unsplash.jpg')} style={styles.smallCircleImage} />
               </Pressable>


               <Pressable onPress={() => { }} style={{ top: -95, left: -100, }}>
                   <Image source={require('../../assets/gaspar-zaldo-SWcKBBRjEIM-unsplash.jpg')} style={styles.smallCircleImage} />
               </Pressable>


               <Pressable onPress={() => { }} style={{ top: -183, left: -100, }}>
                   <Image source={require('../../assets/tim-mossholder-FRPbQvAwY10-unsplash.jpg')} style={styles.smallCircleImage} />
               </Pressable>


               <Pressable onPress={() => { }} style={{ top: 173, left: -100, }}>
                   <Image source={require('../../assets/oppo-find-x5-pro-L2_Ry2uv9c4-unsplash.jpg')} style={styles.smallCircleImage} />
               </Pressable>


           </View>


           <View style={[{ top: 410 }, styles.longLine]}></View>
           <View style={[{ top: 500 }, styles.longLine]}></View>
           <View style={[{ top: 590 }, styles.longLine]}></View>
           <View style={[{ top: 680 }, styles.longLine]}></View>
          
       <View style={[styles.smallCircleContainer, {zIndex: 1, backgroundColor: '#FFAA00', top: -935, left: 0, position: 'relative' }]}>
       <View style={{ position: 'relative', zIndex: 2, top: 0, left: 0 }}>
           <Text style={[styles.numberText]}>1</Text>
       </View>
       </View>


       <View style={[styles.smallCircleContainer, {zIndex: 1, backgroundColor: '#009BD6', top: -885, left: -98, position: 'relative' }]}>
       <View style={{ position: 'relative', zIndex: 2, top: 0, left: 0 }}>
           <Text style={[styles.numberText]}>2</Text>
       </View>
       </View>


       <View style={[styles.smallCircleContainer, {zIndex: 1, backgroundColor: '#00D95F', top: -915, left: 99, position: 'relative' }]}>
       <View style={{ position: 'relative', zIndex: 2, top: 0, left: 0 }}>
           <Text style={[styles.numberText]}>3</Text>
       </View>
       </View>


       </ScrollView>
   );
}




function ClassPage() {
   const styles = StyleSheet.create({
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
       smallCircleImage: {
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
           zIndex: 5
       },
       nameText: {
           color: 'white',
           fontSize: 16,
           fontWeight: 'bold',
           zIndex: 6
       },
       userText: {
           color: 'grey',
           fontSize: 10,
           fontWeight: 'regular',
           zIndex: 6
       },
       longLine: {
           backgroundColor: 'grey',
           width: '68%',
           height: 2,
           left: 65,
           borderRadius: 20,
           position: 'absolute',
           zIndex: 2
       },
       friendsPageBackground: {
           backgroundColor: '#00347F',
           flex: 1,
       },
       toggle: {
           position: 'center',
           height: 500,
           width: 345,
           borderTopLeftRadius: 15,
           borderTopRightRadius: 15,
           borderBottomLeftRadius: 0,
           borderBottomRightRadius: 0,
           zIndex: 1
       }
   });


   return (
       <ScrollView style={[styles.friendsPageBackground, { flex: 1 }]}>
           <View style={[{top: -90}, styles.sides]}></View>
           <View style={[{top: -90}, styles.shape]}></View>


           {/* Images */}
           <View>
               <Pressable onPress={() => { }} style={{ top: -360 }}>
                   <Image source={require('../../assets/freddy-mishiki-62GTOD-oY0w-unsplash.jpg')} style={styles.circleImage} />
               </Pressable>


               <Pressable onPress={() => { }} style={{ left: '24%', top: -280 }}>
                   <Image source={require('../../assets/brooke-cagle-oTweoxMKdkA-unsplash.jpg')} style={styles.circleImage} />
               </Pressable>


               <Pressable onPress={() => { }} style={{ left: '-23.5%', top: -280 }}>
                   <Image source={require('../../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')} style={styles.circleImage} />
               </Pressable>
           </View>


           {/* Text */}
           <View>
               <Text style={[{ top: -165, left: 94 }, styles.nameText]}>Ana</Text>
               <Text style={[{ top: -260, left: 187.5 }, styles.nameText]}>Mort</Text>
               <Text style={[{ top: -203, left: 283 }, styles.nameText]}>Julian</Text>


               <Text style={[{ top: -202, left: 88 }, styles.userText]}>@banana</Text>
               <Text style={[{ top: -290, left: 182.5 }, styles.userText]}>@lemur4L</Text>
               <Text style={[{ top: -225, left: 280 }, styles.userText]}>@kingjulian</Text>
           </View>


           <View style={[{ top: -150, left: '8%', backgroundColor: '#1E2237', zIndex: 1 }, styles.toggle]}>
               <Text style={[{ top: 25, left: 130 }, styles.nameText]}>Gene</Text>
               <Text style={[{ top: 95, left: 130 }, styles.nameText]}>Tina</Text>
               <Text style={[{ top: 165, left: 130 }, styles.nameText]}>Holt</Text>
               <Text style={[{ top: 325, left: 130 }, styles.nameText]}>Jim</Text>
               <Text style={[{ top: 212, left: 130 }, styles.nameText]}>Rob</Text>


               <Text style={[{ top: -50, left: 130 }, styles.userText]}>@gotdna</Text>
               <Text style={[{ top: 30, left: 130 }, styles.userText]}>@turner</Text>
               <Text style={[{ top: 107, left: 130 }, styles.userText]}>@capholt</Text>
               <Text style={[{ top: 275, left: 130 }, styles.userText]}>@jimbo</Text>
               <Text style={[{ top: 168, left: 130 }, styles.userText]}>@robby</Text>


               <Pressable onPress={() => { }} style={{ top: 85, left: -100, }}>
                   <Image source={require('../../assets/michael-dam-mEZ3PoFGs_k-unsplash (1).jpg')} style={styles.smallCircleImage} />
               </Pressable>


               <Pressable onPress={() => { }} style={{ top: -5, left: -100, }}>
                   <Image source={require('../../assets/iheb-ab-OBufvGMaBaQ-unsplash.jpg')} style={styles.smallCircleImage} />
               </Pressable>


               <Pressable onPress={() => { }} style={{ top: -95, left: -100, }}>
                   <Image source={require('../../assets/ali-jouyandeh-bodgc6H44FA-unsplash.jpg')} style={styles.smallCircleImage} />
               </Pressable>


               <Pressable onPress={() => { }} style={{ top: -183, left: -100, }}>
                   <Image source={require('../../assets/mateo-avila-chinchilla-x_8oJhYU31k-unsplash.jpg')} style={styles.smallCircleImage} />
               </Pressable>


               <Pressable onPress={() => { }} style={{ top: 173, left: -100, }}>
                   <Image source={require('../../assets/jan-bargallo-deike-vtUzH3UzDoE-unsplash.jpg')} style={styles.smallCircleImage} />
               </Pressable>


           </View>


           <View style={[{ top: 410 }, styles.longLine]}></View>
           <View style={[{ top: 500 }, styles.longLine]}></View>
           <View style={[{ top: 590 }, styles.longLine]}></View>
           <View style={[{ top: 680 }, styles.longLine]}></View>
          
       <View style={[styles.smallCircleContainer, {zIndex: 1, backgroundColor: '#FFAA00', top: -935, left: 0, position: 'relative' }]}>
       <View style={{ position: 'relative', zIndex: 2, top: 0, left: 0 }}>
           <Text style={[styles.numberText]}>1</Text>
       </View>
       </View>


       <View style={[styles.smallCircleContainer, {zIndex: 1, backgroundColor: '#009BD6', top: -885, left: -98, position: 'relative' }]}>
       <View style={{ position: 'relative', zIndex: 2, top: 0, left: 0 }}>
           <Text style={[styles.numberText]}>2</Text>
       </View>
       </View>


       <View style={[styles.smallCircleContainer, {zIndex: 1, backgroundColor: '#00D95F', top: -915, left: 99, position: 'relative' }]}>
       <View style={{ position: 'relative', zIndex: 2, top: 0, left: 0 }}>
           <Text style={[styles.numberText]}>3</Text>
       </View>
       </View>


       </ScrollView>
   );
}