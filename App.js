import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// components
import List from "./components/List";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
      });
  }, []);

  return (
    <View style={styles.container}>
      {countries.length > 0 && (
        <FlatList
          data={countries}
          renderItem={(data) => <List country={data.item} />}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ borderBottomWidth: 1 }}></View>
        )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },

});
