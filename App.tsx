import { StatusBar } from 'expo-status-bar';
import {Loading} from "./src/components/Loading";

import * as Location from 'expo-location';
import {Component} from "react";
import {Alert} from "react-native";

const API_KEY = '93b5c17a4627cdc80ff8d87be6fb768e';

export default class App extends Component {
    state = {
        isLoading: true
    }
    getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync()
            const location = await Location.getCurrentPositionAsync()
            const {coords: {latitude, longitude}} = location
            console.log(longitude, latitude)
            this.setState({isLoading: true})
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
                {this.state.isLoading? <Loading/> : null}
                <StatusBar style="auto"/>
            </>

        );
    }
}


