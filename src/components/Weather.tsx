import React from "react";
import {View, Text, StyleSheet} from "react-native";

type WeatherType = {
    temp: number
}

export const Weather = (props: WeatherType) => {
  return (
      <>
      <View style={styles.container}>
          <Text>{props.temp}</Text>
      </View>
      </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
