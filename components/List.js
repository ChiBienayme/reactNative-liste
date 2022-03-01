import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function List(props) {
  const [infos, setInfos] = useState(false);
  const [weather, setWeather] = useState([]);

  const handlePress = (capital) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=0b116f6119f2ece693e78008220c9527`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeather(res);
        setInfos((prevState) => !prevState);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={(styles.text, styles.name)}>
             {props.country.name.common}
      </Text>

      <Text style={(styles.text, styles.capital)}>  
            {props.country.capital}
      </Text>

      <TouchableOpacity onPress={() => handlePress(props.country.capital)}>
        <Image style={styles.img} source={{ uri: props.country.flags.png }} />
      </TouchableOpacity>

      {infos && (
        <View>
          <Text> Capital : {props.country.capital} </Text>

          <Text>
            Weather : {weather.main.temp}°C
          </Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "cornsilk",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  title: {
    fontWeight: "bold",
    color: "red",
    fontSize: 32,
  },
  text: {
    margin: 8,
  },

  name: {
    fontWeight: "bold",
  },
  capital: {
      margin: 5,
  },

  img: {
    width: 200,
    height: 100,
  },
});
