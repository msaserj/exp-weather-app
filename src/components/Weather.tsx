import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import {StatusBar} from "expo-status-bar";

type WeatherType = {
    temp: number
    condition: conditionType
}
export type conditionType = "Thunderstorm" | "Drizzle" | "Rain" | "Snow" | "Dust" | "Smoke" | "Haze" | "Mist" | "Clear" | "Clouds"
type WeatherCondType = {
    Thunderstorm: WethCond
    Drizzle: WethCond
    Rain: WethCond
    Snow: WethCond
    Dust: WethCond
    Smoke: WethCond
    Haze: WethCond
    Mist: WethCond
    Clear: WethCond
    Clouds: WethCond
}
type WethCond = {
    iconName: any
    gradient: string[]
    title: string
    subtitle: string
}
export const Weather = (props: WeatherType) => {

    const weatherOptions: WeatherCondType = {
        Thunderstorm: {
            iconName: 'weather-lightning', gradient: ['#141E30', '#243B55'],
            title: 'Сиди дома', subtitle: 'Ты видишь что на улице?'
        },
        Drizzle: {
            iconName: 'weather-rainy', gradient: ['#3a7bd5', '#3a6073'],
            title: 'Возьми зонтик', subtitle: 'Возможно скоро дождь усилится '
        },
        Rain: {
            iconName: 'weather-pouring', gradient: ['#000046', '#1CB5E0'],
            title: 'На улице дождь', subtitle: 'А значит скоро будет радуга!'
        },
        Snow: {
            iconName: 'snowflake', gradient: ['#83a4d4', '#b6fbff'],
            title: 'На улице снежок!', subtitle: 'Одевайтесь потеплее, лепите снеговиков'
        },
        Dust: {
            iconName: 'weather-windy-variant', gradient: ['#B79891', '#94716B'],
            title: 'Пыльно', subtitle: 'Лучше закройте окна'
        },
        Smoke: {
            iconName: 'weather-windy', gradient: ['#56CCF2', '#2F80ED'],
            title: 'На улице смог :(', subtitle: 'Не советую выходить без необходимости'
        },
        Haze: {
            iconName: 'weather-hazy', gradient: ['#3E5151', '#DECBA4'], title: 'На улице снежок!',
            subtitle: 'Одевайтесь потеплее, лепите снеговиков'
        },
        Mist: {
            iconName: 'weather-fog', gradient: ['#606c88', '#3f4c6b'],
            title: 'Ни черта не видно в тумане', subtitle: 'Зато как в Сайлент-Хилле :)'
        },
        Clear: {
            iconName: 'weather-sunny', gradient: ['#56CCF2', '#2F80ED'],
            title: 'Погода супер :)', subtitle: 'Иди гулять, хватит сидеть дома!'
        },
        Clouds: {
            iconName: 'weather-cloudy', gradient: ['#757F9A', '#D7DDE8'],
            title: 'Облака', subtitle: 'Белогривые лошадки'
        },
    }

    return (
        <LinearGradient style={styles.container} colors={weatherOptions[props.condition].gradient}>
            <View style={{flex: 1}} />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[props.condition].iconName} size={96} color="white"/>
                <Text style={styles.tempText}>{props.temp} °C</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[props.condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[props.condition].subtitle}</Text>
            </View>
            <View style={{flex: 1}} />
            <StatusBar style="auto"/>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    tempText: {
        fontSize: 40
    },
    title: {
        color: "white",
        fontWeight: "600",
        fontSize: 44
    },
    subtitle: {
        color: "white",
        fontSize: 24
    },
    textContainer: {
        // paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})
