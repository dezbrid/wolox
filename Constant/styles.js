import React from 'react';
import { StyleSheet } from 'react-native';

export const colors = {
    blue: "#0bb4e4",
    blueDark: "#0087ae",
    blueOverlay:'#004d64',
    blueGray:'#202328',
    redLight: "#ff4d4d",
    white: "#ffffff",
    brown: "#38261C",
    brownLight: "#664533",
    brownDisable: '#a78d7f',
    gray: "#8b8d8d",
    grayLight: "#e6e6e6"
}
export const styles = StyleSheet.create({
    flexOne: { flex: 1 },
    flexColumn: {
        flexDirection: 'column'
    },
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
        justifyContent: 'center'
    },
    opacityOn: {
        opacity: 1
    },
    opacityOff: {
        opacity: 0
    },
    labelTextInput: {
        fontSize: 8,
        marginLeft: 10,
        backgroundColor: colors.blueDark,
        color: colors.white,
        paddingHorizontal: 5,
        borderRadius: 3,
        marginBottom: -6,
        alignSelf: 'flex-start',
        zIndex: 1,
        elevation: 1
    },
    errorTextInputContainer: {
        borderColor: colors.redLight,
        borderWidth: 0.5
    },
    textInputContainer: {
        flexDirection: 'row',
        backgroundColor: colors.grayLight,
        borderRadius: 50,
        paddingLeft: 10,
        minHeight:40,
    },
    errorTextInputText: {
        color: colors.redLight,
        paddingLeft: 20,
        fontSize: 10,
        marginTop: -2,
        marginBottom: 8
    },
    buttonContainer: {
        justifyContent: 'center',
        borderRadius: 50,
        overflow: 'hidden',
    },
    buttonDisable: {
        opacity: 0.4,
        backgroundColor: colors.blueGray
    },
    buttonText: {
        fontSize: 13,
        color: colors.white,
        textAlign: 'center',

    },
    buttonImagen:{
        padding: 12,
    }

});
