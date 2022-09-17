import React from "react";
import {View, Text, StyleSheet} from "react-native";

type WeatherType = {
    temp: number
    condition: string
}

export const Weather = (props: WeatherType) => {
  return (
      <>
      <View style={styles.container}>
          <Text>{props.temp}</Text>
          <Text>{props.condition}</Text>
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
