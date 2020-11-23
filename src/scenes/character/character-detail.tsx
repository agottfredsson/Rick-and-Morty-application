import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text, Layout, List } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Dash from "react-native-dash";

export const CharacterDetail = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Ionicons
          name="ios-arrow-back"
          size={30}
          color="white"
          style={styles.icon}
        />
      </TouchableOpacity>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name} category="h2">
        {item.name}
      </Text>
      <Layout style={styles.content}>
        <Text style={styles.label} category="h6">
          Gender:
        </Text>
        <Text style={styles.description} category="h6">
          {item.gender}
        </Text>
      </Layout>
      <Dash dashColor="white" dashThickness={1} style={styles.dash} />
      <Layout style={styles.content} category="h6">
        <Text style={styles.label} category="h6">
          Location:
        </Text>
        <Text style={styles.description} category="h6">
          {item.location.name}
        </Text>
      </Layout>
      <Dash dashColor="white" dashThickness={1} style={styles.dash} />
      <Layout style={styles.content}>
        <Text style={styles.label} category="h6">
          Origin:
        </Text>
        <Text style={styles.description} category="h6">
          {item.origin.name}
        </Text>
      </Layout>
      <Dash dashColor="white" dashThickness={1} style={styles.dash} />
      <Layout style={styles.content}>
        <Text style={styles.label} category="h6">
          Species:
        </Text>
        <Text style={styles.description} category="h6">
          {item.species}
        </Text>
      </Layout>
      <Dash dashColor="white" dashThickness={1} style={styles.dash} />
      <Layout style={styles.alt}>
        <Text style={styles.status} category="h6">
          Status:
        </Text>
        {item.status === "Alive" && (
          <Layout
            style={{ backgroundColor: "transparent", flexDirection: "row" }}
          >
            <Text style={styles.alive} category="h6">
              {item.status}
            </Text>
            <MaterialCommunityIcons
              name="human"
              size={30}
              color="green"
              style={styles.statusLogo}
            />
          </Layout>
        )}
        {item.status === "Dead" && (
          <Layout
            style={{ backgroundColor: "transparent", flexDirection: "row" }}
          >
            <Text style={styles.dead} category="h6">
              {item.status}
            </Text>
            <FontAwesome5
              name="skull"
              size={30}
              color="red"
              style={styles.statusLogo}
            />
          </Layout>
        )}
        {item.status === "unknown" && (
          <Layout
            style={{ backgroundColor: "transparent", flexDirection: "row" }}
          >
            <Text style={styles.unknown} category="h6">
              {item.status}
            </Text>
            <MaterialCommunityIcons
              name="account-question"
              size={30}
              color="yellow"
              style={styles.statusLogo}
            />
          </Layout>
        )}
      </Layout>
      <Dash dashColor="white" dashThickness={1} style={styles.dash} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
  },
  content: {
    flexDirection: "row",
    backgroundColor: "#424242",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  description: {
    color: "white",
    fontStyle: "italic",
    maxWidth: 150,
    alignSelf: "center",
  },
  status: {
    color: "white",
    marginLeft: 20,
  },
  alt: {
    flexDirection: "row",
    backgroundColor: "#424242",
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: 20,
    marginTop: 20,
  },
  unknown: {
    color: "yellow",
    paddingRight: 10,
  },
  statusLogo: {
    marginRight: 20,
  },
  dash: {
    flex: 1,
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  alive: {
    color: "green",
    paddingRight: 10,
  },
  dead: {
    color: "red",
    paddingRight: 10,
  },
  image: {
    height: 250,
    width: 250,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  name: {
    color: "#00e5ff",
    alignSelf: "center",
    marginTop: 15,
  },
  label: {
    color: "white",
    alignSelf: "center",
  },
});
