import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Loading = () => {
    return <View style={styles.container}>
        <Text style={styles.text}>Loading weather...</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#bffdaa",
    },
    text: {
        color: "#5d5d5d",
        fontSize: 30
    }
})