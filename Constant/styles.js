import React from 'react';
import { StyleSheet } from 'react-native';

export const colors = {
    blue: "#04b2e3",
    blueLight: '#dceeff',
    blueDark: "#0087ae",
    blueOverlay: '#004d64',
    blueGray: '#202328',
    redLight: "#ff4d4d",
    white: "#ffffff",
    gray: "#8b8d8d",
    grayLight: "#e6e6e6",
    grayBack: '#0A0A0ACC',
    shadow: '#000',
    greeSuccess: '#14c11e',
    redError: '#c11414'

}
export const styles = StyleSheet.create({
    flexOne: { flex: 1 },
    alignSelfCenter: { alignSelf: 'center' },
    alignSelfStretch: { alignSelf: 'stretch' },
    flexColumn: { flexDirection: 'column' },
    flexRow: { flexDirection: 'row' },
    textColorWhite: { color: colors.white },
    success: { backgroundColor: colors.greeSuccess },
    error: { backgroundColor: colors.redError },
    opacityOn: { opacity: 1 },
    opacityOff: { opacity: 0 },
    buttonImagen: { padding: 12, },
    headerTitle: { textAlign: 'center', color: 'white', textTransform: 'uppercase' },
    container: {
        flex: 1,
        flexDirection: "column",
    },
    backgroundColorBlue: { backgroundColor: colors.blue },
    iconsHeader: { marginHorizontal: 20 },
    width100: { width: '100%' },
    backgroundColorBlueLight: { backgroundColor: colors.blueLight },
    viewContainer: { paddingTop: 70 },
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
        minHeight: 40,
    },
    errorTextInputText: {
        color: colors.redLight,
        paddingLeft: 20,
        fontSize: 10,
        marginTop: -1,
        marginBottom: 5
    },
    buttonContainer: {
        justifyContent: 'center',
        borderRadius: 50,
        overflow: 'hidden',
    },
    buttonDisable: {
        opacity: 0.3,
        backgroundColor: colors.blueGray
    },
    buttonText: {
        fontSize: 13,
        color: colors.white,
        textAlign: 'center',
        fontWeight:'bold'

    },
    buttonImagen: { padding: 12, },
    viewCheckBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 10,
        marginHorizontal: 5
    },
    checkBox: {
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
        width: 20, height: 20
    },
    textCheckBox: {
        alignSelf: 'center',
        marginLeft: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: colors.grayBack
    },
    modalView: {
        flex: 3,
        backgroundColor: colors.white,
        borderRadius: 5,
        paddingVertical: 10,
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        maxHeight: 250,
        alignSelf: 'stretch'
    },
    switch: {
        transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }]
    },
    progressViewContainer: {
        flex: 1,
        zIndex: 10,
        position: 'absolute',
        backgroundColor: colors.grayBack,
        width: "100%",
        height: "100%",
        opacity: 0.7,
        justifyContent: 'center'
    },
    alertInfoContainer: {
        flex: 1,
        zIndex: 15,
        flexWrap: "wrap",
        position: 'absolute',
        bottom: 10,
        right: 20,
        borderRadius: 50,
        paddingHorizontal: 30,
        paddingVertical: 10,
        justifyContent: 'center',
    },
    cardBookContainer: {
        backgroundColor: 'white',
        paddingVertical: 20,
        marginVertical: 8,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 4,
        borderRadius: 5,
        paddingHorizontal: 30,
        flexDirection: 'row',
    },
    cardBookImagen: { flex: 1, height: 100 },
    cardBookView: { flex: 3, flexDirection: 'column', marginLeft: 20 },
    cardBookTitle: { fontWeight: "bold", fontSize: 19 },
    searchBarView: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 10,
    },
    searchBarImagen:{
        height: 15, 
        width: 15
    },
    paddingHorizontal:{
        paddingHorizontal:20
    }


});
