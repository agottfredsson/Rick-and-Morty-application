import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { List } from "@ui-kitten/components";
import { getCharacters } from "../../api";
import { Character } from "../../components/Character";
import { UIActivityIndicator } from "react-native-indicators";

export const Champions = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const result = await getCharacters(page);
    setCharacters(result);
  };

  const fetchMore = async () => {
    setLoading(true);
    setPage(page + 1);
    const result = await getCharacters(page + 1);
    let listData = characters;
    let data = listData.concat(result);
    setCharacters(data);
    setLoading(false);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail", { item })}
        style={{ marginTop: 10 }}
      >
        <Character char={item} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <List
        data={characters}
        style={{ flex: 1, backgroundColor: "#424242" }}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={() => (
          <UIActivityIndicator color="white" size={30} />
        )}
        onEndReached={() => {
          if (!loading) {
            fetchMore();
          }
        }}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
  },
});
