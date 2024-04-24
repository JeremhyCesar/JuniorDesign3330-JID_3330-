import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    Pressable,
  } from "react-native";
  
  export function MusicWorksPage({ navigation }) {
    const styles = StyleSheet.create({
      button: {
        borderRadius: 30,
        shadowOffset: { width: 4, height: 4 },
        shadowColor: "black",
        shadowOpacity: 0.25,
        width: "84%",
        height: 125,
        cursor: "pointer",
      },
      instrumentImage: {
        position: "absolute",
        left: "55%",
        width: 120,
        height: 120,
        resizeMode: "contain",
      },
    });
  
    const handleCompareContrastPress = (comparedName) => {
      navigation.navigate("LessonScreen", { comparedName });
    };
  
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text
          style={{
            fontWeight: "bold",
            top: 64,
            left: "8%",
            fontSize: 48,
            color: "#333",
          }}
        >
          Music Works
        </Text>
        <Text
          style={{
            top: 68,
            left: "8%",
            fontSize: 20,
            textAlign: "left",
            color: "#717171",
          }}
        >
          Explore the Difference of Music Works!
        </Text>
  
        <Pressable
          onPress={() => handleCompareContrastPress("Beethoven's Symphony No.5 and Mozart's Symphony No.40")}
          style={[
            { top: 94, left: "8%", backgroundColor: "#ffffff" },
            styles.button,
          ]}
        >
          <Text
            style={{
              top: 26,
              left: "8%",
              fontSize: 15,
              textAlign: "left",
              fontWeight: "bold",
              color: "#dc7424",
              width: 150,
              flexWrap: "wrap",
            }}
          >
            Beethoven's Symphony No.5 and Mozart's Symphony No.40
          </Text>
          <Image
            source={require("../../../assets/compared/BeethovenAndMozart.png")}
            style={styles.instrumentImage}
          />
        </Pressable>
  
        <Pressable
          onPress={() => handleCompareContrastPress("Tchaikovsky's Swan Lake and Bach's Brandenburg Concertos")}
          style={[
            { top: 109, left: "8%", backgroundColor: "#ffffff" },
            styles.button,
          ]}
        >
          <Text
            style={{
              top: 25,
              left: "8%",
              fontSize: 15,
              textAlign: "left",
              fontWeight: "bold",
              color: "#dc7424",
              width: 165,
              flexWrap: "wrap",
            }}
          >
            Tchaikovsky's Swan Lake and Bach's Brandenburg Concertos
          </Text>
          <Image
            source={require("../../../assets/compared/TchaikovskyAndBach.png")}
            style={styles.instrumentImage}
          />
        </Pressable>

        <Pressable
          onPress={() => handleCompareContrastPress("Chopin's Ballade No. 1 and Liszt's Hungarian Rhapsody")}
          style={[
            { top: 120, left: "8%", backgroundColor: "#ffffff" },
            styles.button,
          ]}
        >
          <Text
            style={{
              top: 25,
              left: "8%",
              fontSize: 15,
              textAlign: "left",
              fontWeight: "bold",
              color: "#dc7424",
              width: 165,
              flexWrap: "wrap",
            }}
          >
            Chopin's Ballade No. 1 and Liszt's Hungarian Rhapsody
          </Text>
          <Image
            source={require("../../../assets/compared/ChopinLiszt.png")}
            style={styles.instrumentImage}
          />
        </Pressable>

        <Pressable
          onPress={() => handleCompareContrastPress("Debussy's Clair de Lune and Ravel's Bolero")}
          style={[
            { top: 130, left: "8%", backgroundColor: "#ffffff" },
            styles.button,
          ]}
        >
          <Text
            style={{
              top: 25,
              left: "8%",
              fontSize: 15,
              textAlign: "left",
              fontWeight: "bold",
              color: "#dc7424",
              width: 165,
              flexWrap: "wrap",
            }}
          >
            Debussy's Clair de Lune and Ravel's Bolero
          </Text>
          <Image
            source={require("../../../assets/compared/DebussyRavel.png")}
            style={styles.instrumentImage}
          />
        </Pressable>

        <Pressable
          onPress={() => handleCompareContrastPress("Stravinsky's The Rite of Spring and Schoenberg's Pierrot Lunaire")}
          style={[
            { top: 140, left: "8%", backgroundColor: "#ffffff" },
            styles.button,
          ]}
        >
          <Text
            style={{
              top: 25,
              left: "8%",
              fontSize: 15,
              textAlign: "left",
              fontWeight: "bold",
              color: "#dc7424",
              width: 165,
              flexWrap: "wrap",
            }}
          >
            Stravinsky's The Rite of Spring and Schoenberg's Pierrot Lunaire
          </Text>
          <Image
            source={require("../../../assets/compared/StravinskySchoenberg.png")}
            style={styles.instrumentImage}
          />
        </Pressable>



  
        <View style={{ height: 180 }} />
      </ScrollView>
    );
  }
  