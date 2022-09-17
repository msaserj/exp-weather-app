import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons'

type WeatherType = {
    temp: number
    condition: string
}

export const Weather = (props: WeatherType) => {
  return (
      <>
      <View style={styles.container}>
          <View style={styles.halfContainer}>
              <Ionicons name="rainy" size={120} color="blue" />
              <Text style={styles.tempText}>{props.temp} °C</Text>
          </View>
          <View style={styles.halfContainer}>
              <Text>{props.condition}</Text>
          </View>
      </View>
      </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tempText: {
        fontSize: 42
    }
})
