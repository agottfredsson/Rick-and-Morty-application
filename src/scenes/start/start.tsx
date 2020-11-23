import React from "react";
import { StyleSheet, SafeAreaView, Image, Dimensions } from "react-native";
import { Text, Layout, Button } from "@ui-kitten/components";
import start from "../../../assets/start.jpg";

export const Start = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Start page</Text>
      <Image source={start} style={styles.background} />
      <Button style={styles.button} onPress={() => navigation.navigate("Tabs")}>
        <Text>Lets go!</Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
  },
  background: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    position: "absolute",
  },
  button: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    backgroundColor: "yellow",
    alignSelf: "center",
  },
  z: {},
});
