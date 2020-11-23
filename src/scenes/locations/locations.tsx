import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text, Layout, List } from "@ui-kitten/components";
import { getLocations } from "../../api";
import { UIActivityIndicator } from "react-native-indicators";
import { Ionicons } from "@expo/vector-icons";

export const Search = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const result = await getLocations(page);
    setLocations(result);
  };

  const fetchMore = async () => {
    setPage(page + 1);
    const result = await getLocations(page + 1);
    let listData = locations;
    let data = listData.concat(result);
    setLocations(data);
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <List
        data={locations}
        style={{ flex: 1, backgroundColor: "#424242" }}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={() => (
          <UIActivityIndicator color="white" size={30} />
        )}
        onEndReached={() => {
          setLoading(true);
          fetchMore();
        }}
        renderItem={({ item, index }) => {
          return (
            <Layout
              style={{
                backgroundColor: "transparent",
                marginTop: 20,
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="ios-planet"
                size={50}
                color="green"
                style={{ alignSelf: "center", marginLeft: 20 }}
              />
              <Layout
                style={{
                  backgroundColor: "transparent",
                  marginLeft: 20,
                }}
              >
                <Layout style={styles.content}>
                  <Text style={styles.label}>Name: </Text>
                  <Text style={styles.description}>{item.name}</Text>
                </Layout>
                <Layout style={styles.content}>
                  <Text style={styles.label}>Type: </Text>
                  <Text style={styles.description}>{item.type}</Text>
                </Layout>
                <Layout style={styles.content}>
                  <Text style={styles.label}>Dimension: </Text>
                  <Text style={styles.description}>{item.dimension}</Text>
                </Layout>
                <Layout style={styles.content}>
                  <Text style={styles.label}>Total residents: </Text>
                  <Text style={styles.description}>
                    {item.residents.length}{" "}
                  </Text>
                  <Ionicons name="ios-people" size={24} color="green" />
                </Layout>
              </Layout>
            </Layout>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
  },
  content: {
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  label: {
    color: "#00e5ff",
  },
  description: {
    fontStyle: "italic",
    color: "white",
  },
});
