import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ReviewSession() {
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        button: {
            borderRadius: 31,
            shadowOffset: {width: 4, height: 4},
            shadowColor: 'black',
            shadowOpacity: 0.25,
            width: '84%',
            height: 250,
            cursor: 'pointer'
        }
    })

    return (
        <View style={{flex:1}}>

            <View style={{
                top: 92,
                left: '12%',
                borderRadius: 31,
                backgroundColor: '#f88379',
                width: '40%',
                height: 110,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={require('../../assets/teaching-icon.png')}
                style={{
                    width: 130,
                    height: 130,
                    resizeMode: 'contain'
                  }}
                  />
            </View>
            
            <Text style={{
                fontWeight: 'bold',
                top: 0,
                left: '63%',
                fontSize: 20,
                color: '#006400'
            }}>Review</Text>
            <View style={{
                top: 0,
                left: '60%',
                borderRadius: 5, 
                padding: 10, 
                width: '40%',
                height: 90,
                elevation: 2,
                }}>
                <Text style={{
                    fontSize: 15,
                    color: 'gray'
                }}>review Chopin's stylistic choices
                </Text>
            </View>
        <ScrollView style={{marginTop: 15}}>
             <Text style={{marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10, paddingBottom: 20
            }}>Frédéric Chopin, a Polish composer and virtuoso pianist of the Romantic era, is renowned for his individualistic and highly expressive music style, which has distinct characteristics:
            </Text>
            <Text style={{fontWeight: 'bold', marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10
            }}>Emphasis on Nuance and Subtlety:
            </Text>
            <Text style={{marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10, paddingBottom: 20
            }}>Chopin's music is marked by its refined nuances and subtle dynamics. He often used delicate pianissimos and strong fortissimos to create a wide range of emotions.
            </Text>
            <Text style={{fontWeight: 'bold', marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10
            }}>Rubato:
            </Text>
            <Text style={{marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10, paddingBottom: 20
            }}>Chopin frequently employed rubato, a technique where the tempo is slightly altered for expressive purposes. This gives his music a flexible, organic feel, as if it's breathing.
            </Text>
            <Text style={{fontWeight: 'bold', marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10
            }}>Innovative Harmonies and Modulations:
            </Text>
            <Text style={{marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10, paddingBottom: 20
            }}>He was a master of harmony, often using extended chords, chromaticism, and innovative modulations that were ahead of his time.
            </Text>
            <Text style={{fontWeight: 'bold', marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10
            }}>Lyricism and Melodic Beauty:
            </Text>
            <Text style={{marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10, paddingBottom: 20
            }}>His melodies are highly lyrical and singable, often featuring elegant, flowing lines that are both beautiful and technically demanding.
            </Text>
            <Text style={{fontWeight: 'bold', marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10
            }}>Use of Nationalistic Elements:
            </Text>
            <Text style={{marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10, paddingBottom: 20
            }}>Chopin incorporated elements of Polish folk music into his compositions, especially in his mazurkas and polonaises, creating a unique blend of classical and nationalistic styles.
            </Text>
            <Text style={{fontWeight: 'bold', marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10
            }}>Focus on Piano:
            </Text>
            <Text style={{marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10, paddingBottom: 20
            }}>Almost all of Chopin's compositions are for the piano, and he expanded the technical possibilities of the instrument, making full use of its range and expressive capabilities.
            </Text>
            <Text style={{fontWeight: 'bold', marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10
            }}>Structural Innovation:
            </Text>
            <Text style={{marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10, paddingBottom: 20
            }}>While he often used traditional forms like the nocturne, sonata, and ballade, Chopin's approach to structure was innovative, often blurring the lines between sections and creating seamless transitions.
            </Text>
            <Text style={{fontWeight: 'bold', marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10
            }}>Emotional Depth:
            </Text>
            <Text style={{marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10, paddingBottom: 20
            }}>His music, ranging from joyful and spirited to melancholic and introspective, is deeply emotional, often reflecting his own experiences and feelings.
            </Text>
            <Text style={{marginLeft: '8%', marginRight: '5%', paddingHorizontal: 10, paddingBottom: 20
            }}>These stylistic choices contribute to Chopin's enduring popularity and influence in the realm of classical music.
            </Text>
        </ScrollView>
        </View>
    );
}
