import { StyleSheet, ScrollView, Text, View, Image } from "react-native";

export function ReviewSession({ reviewContent }) {
  const styles = StyleSheet.create({
    normalText: {
      marginLeft: "8%",
      marginRight: "5%",
      paddingHorizontal: 10,
      paddingBottom: 20,
    },
    boldText: {
      fontWeight: "bold",
      marginLeft: "8%",
      marginRight: "5%",
      paddingHorizontal: 10,
    },
  });

  if (!reviewContent) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>No review content available.</Text>
      </View>
    );
  }

  const name = Object.keys(reviewContent)[0];

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          top: 92,
          left: "12%",
          borderRadius: 31,
          backgroundColor: "#f88379",
          width: "40%",
          height: 110,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../../assets/teaching-icon.png")}
          style={{
            width: 130,
            height: 130,
            resizeMode: "contain",
          }}
        />
      </View>
      <Text
        style={{
          fontWeight: "bold",
          top: 0,
          left: "63%",
          fontSize: 20,
          color: "#006400",
        }}
      >
        Review
      </Text>
      <View
        style={{
          top: 0,
          left: "61%",
          borderRadius: 5,
          padding: 10,
          width: "40%",
          height: 90,
          elevation: 2,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: "gray",
          }}
        >
          Review {name}'s stylistic choices
        </Text>
      </View>
      <ScrollView style={{ marginTop: 15 }}>
        {reviewContent.sections.map((section, index) => (
          <View key={index}>
            <Text style={styles.normalText}>{section.content}</Text>
            {section.points &&
              section.points.map((point, pointIndex) => (
                <View key={pointIndex}>
                  <Text style={styles.boldText}>{point.title}</Text>
                  <Text style={styles.normalText}>{point.description}</Text>
                </View>
              ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}