import React from 'react';
import { StyleSheet } from 'react-native';

export const colors = {
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
        flex: 3,
        justifyContent: "center",
        resizeMode: "center",
        alignSelf: "center"
    },
    viewContainerLogin: {
        flex: 1,
        backgroundColor: colors.blue
    },
    viewTextInputLogin: {
        flex: 5,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 30,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }
});
