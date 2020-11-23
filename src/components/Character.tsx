import React from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";
import { Layout, Text, Divider } from "@ui-kitten/components";
import Dash from "react-native-dash";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Character = ({ char }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={{ flexDirection: "row", backgroundColor: "#424242" }}>
        <Image source={{ uri: char.image }} style={styles.image} />
        <Layout
          style={{
            backgroundColor: "#424242",
            flex: 1,
          }}
        >
          <Text style={styles.name} category="h5">
            {char.name}
          </Text>
          <Layout style={styles.alt}>
            <Text style={styles.text}>Species:</Text>
            <Text style={styles.description}>{char.species}</Text>
          </Layout>
          <Dash dashColor="white" dashThickness={1} style={styles.dash} />
          <Layout style={styles.alt}>
            <Text style={styles.text}>Status:</Text>
            {char.status === "Alive" && (
              <Layout
                style={{ backgroundColor: "transparent", flexDirection: "row" }}
              >
                <Text style={styles.alive}>{char.status}</Text>
                <MaterialCommunityIcons
                  name="human"
                  size={20}
                  color="green"
                  style={{ alignSelf: "center", marginRight: 20 }}
                />
              </Layout>
            )}
            {char.status === "Dead" && (
              <Layout
                style={{ backgroundColor: "transparent", flexDirection: "row" }}
              >
                <Text style={styles.dead}>{char.status}</Text>
                <FontAwesome5
                  name="skull"
                  size={15}
                  color="red"
                  style={{ alignSelf: "center", marginRight: 20 }}
                />
              </Layout>
            )}
            {char.status === "unknown" && (
              <Layout
                style={{ backgroundColor: "transparent", flexDirection: "row" }}
              >
                <Text style={styles.unknown}>{char.status}</Text>
                <MaterialCommunityIcons
                  name="account-question"
                  size={20}
                  color="yellow"
                  style={{ alignSelf: "center", marginRight: 20 }}
                />
              </Layout>
            )}
          </Layout>
          <Dash dashColor="white" dashThickness={1} style={styles.dash} />
          <Layout style={styles.alt}>
            <Text style={styles.text}>Location:</Text>
            <Text style={styles.description}>{char.origin.name}</Text>
          </Layout>
          <Dash dashColor="white" dashThickness={1} style={styles.dash} />
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
  },
  name: {
    color: "#00e5ff",
    alignSelf: "center",
    marginTop: 15,
  },
  alive: {
    color: "green",
    fontStyle: "italic",
    maxWidth: 150,
    paddingRight: 5,
  },
  unknown: {
    color: "yellow",
    fontStyle: "italic",
    maxWidth: 150,
    paddingRight: 5,
  },
  dead: {
    color: "red",
    fontStyle: "italic",
    maxWidth: 150,
    paddingRight: 5,
  },
  text: {
    color: "white",
  },
  dash: {
    flex: 1,
    marginRight: 20,
    paddingVertical: 5,
  },
  description: {
    color: "white",
    fontStyle: "italic",
    maxWidth: 150,
    marginRight: 20,
  },
  image: {
    height: 150,
    width: 150,
    margin: 20,
  },
  alt: {
    flexDirection: "row",
    backgroundColor: "#424242",
    justifyContent: "space-between",
  },
});
