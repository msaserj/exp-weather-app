import { StatusBar } from 'expo-status-bar';
import {Loading} from "./src/components/Loading";

import * as Location from 'expo-location';
import {Component} from "react";
import {Alert} from "react-native";
import axios from "axios";

const API_KEY = '93b5c17a4627cdc80ff8d87be6fb768e';

export default class App extends Component {
    state = {
        isLoading: true
    }
    getWeather = async (latitude: number, longitude: number) => {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        console.log("AAAAAA", data)
    }

    getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync()
            const location = await Location.getCurrentPositionAsync()
            const {coords: {latitude, longitude}} = location
            await this.getWeather(latitude, longitude)
            console.log(longitude, latitude)
            this.setState({isLoading: false})
        } catch (err) {
            Alert.alert('Can\'t determine location')
        }
    }

    componentDidMount() {
        this.getLocation()
    }

    render() {
        return (
            <>
                {this.state.isLoading? <Loading/> : ''}
                <StatusBar style="auto"/>
            </>

        );
    }
}


