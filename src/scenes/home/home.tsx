import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  ActionSheetIOS,
  ToastAndroid,
  Platform,
} from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

export const Items = () => {
  const onPress = () => {
    if (Platform.OS === "android") {
      android();
    } else {
      ios();
    }
  };

  const android = () => {
    ToastAndroid.show("You're on android!", ToastAndroid.SHORT);
  };

  const ios = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Remove"],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          console.log("You're on IOS!");
        }
      }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <ScrollView style={{ flex: 1, marginBottom: 20 }}>
        <Text style={styles.description} category="h6">
          Rick Sanchez, a depressed, alcoholic, abusive, madman (who also
          happens to be a genius scientist with the ability to travel through
          dimensions) returns to his daughter Beth's life after two decades of
          being silent between the two. {"\n"}
          He finds her married to an incompetent, pathetic man named Jerry, and
          the couple has two teenage kids.
          {"\n"} Summer, the oldest girl, is a rebellious teen looking to have
          more friends at school, and
          {"\n"}
          Morty, the youngest child and a boy, is an anxious, quiet, and sweet
          kid. {"\n"} {"\n"}Rick makes Morty his sidekick and takes him on
          hilarious Interdimensional adventures, causing poor Morty to become
          steadily more miserable due to Rick's insane, abusive, and careless
          additude.
        </Text>
        <Button onPress={onPress} style={styles.button}>
          <Text category="p1">Test this shit!</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
  },
  button: {
    backgroundColor: "#00e5ff",
    borderWidth: 0,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 20,
  },
  description: {
    color: "#00e5ff",
    marginHorizontal: 20,
    marginTop: 20,
    fontStyle: "italic",
  },
  image: {
    alignSelf: "center",
    backgroundColor: "transparent",
    width: Dimensions.get("window").width,
  },
});
