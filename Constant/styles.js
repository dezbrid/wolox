import React from 'react';
import { StyleSheet } from 'react-native';

export const colors={
    blue: "#0bb4e4",
    white: "#ffffff",
    brown: "#38261C",
    brownLight: "#664533",
    brownDisable: '#a78d7f',
    gray: "#8b8d8d",
    grayLight: "#e6e6e6"
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    LogoCenter: {
        flex: 1,
        justifyContent: "center",
        resizeMode: "center",
        alignSelf: "center"
    }
});
