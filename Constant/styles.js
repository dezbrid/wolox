import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
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
    redError: '#c11414',
    black: '#000000'

}
export const styles = StyleSheet.create({
    flexOne: { flex: 1 },
    alignSelfCenter: { alignSelf: 'center' },
    alignSelfStretch: { alignSelf: 'stretch' },
    flexColumn: { flexDirection: 'column' },
    flexRow: { flexDirection: 'row' },
    textColorRed: { color: colors.redError, fontFamily: 'Nunito-Light', fontSize: window.height * 0.02 },
    textColorWhite: { color: colors.white, fontFamily: 'Nunito-Light', fontSize: window.height * 0.02 },
    textColorBlack: { color: colors.black, },
    customFont: { fontFamily: 'Nunito-Light', fontSize: window.height * 0.022 },
    height40: { height: 40 },
    success: { backgroundColor: colors.greeSuccess },
    error: { backgroundColor: colors.redError },
    opacityOn: { opacity: 1 },
    opacityOff: { opacity: 0 },
    buttonImagen: { padding: 12, },
    headerTitle: {
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase',
        fontFamily: 'Nunito-BlackItalic',
        fontSize: window.height * 0.028,
    },
    container: {
        flex: 1,
        flexDirection: "column",
    },
    backgroundColorBlue: { backgroundColor: colors.blue },
    backgroundColorWhite: { backgroundColor: colors.white },
    iconsHeader: { marginHorizontal: window.height * 0.015, height: window.height * 0.02 },
    headerBackground: { width: '100%', minHeight: window.height * 0.17 },
    backgroundColorBlueLight: { backgroundColor: colors.blueLight },
    viewContainer: { paddingTop: window.height * 0.135 },
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
        paddingHorizontal: window.height * 0.03,
        paddingTop: 30,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelTextInput: {
        fontSize: window.height*0.011,
        marginLeft: 10,
        backgroundColor: colors.blueDark,
        color: colors.white,
        paddingHorizontal: 5,
        borderRadius: 3,
        marginBottom: -6,
        alignSelf: 'flex-start',
        zIndex: 1,
        elevation: 1,
        fontFamily: 'Nunito-Light'
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
        fontFamily: 'Nunito-Light',
        width: window.width * 0.7,

    },
    errorTextInputText: {
        color: colors.redLight,
        paddingLeft: 20,
        fontSize: window.height*0.01,
        marginTop: -1,
        marginBottom: 5,
        fontFamily: 'Nunito-Light'
    },
    buttonContainer: {
        justifyContent: 'center',
        borderRadius: 50,
        overflow: 'hidden',
        width: window.width * 0.7,
        alignSelf: 'center'
    },
    buttonDisable: {
        opacity: 0.3,
        backgroundColor: colors.blueGray
    },
    buttonText: {
        fontSize: 13,
        color: colors.white,
        textAlign: 'center',
        fontFamily: 'Nunito-BlackItalic'

    },
    buttonImagen: { padding: 12, },
    buttonBorder: {
        justifyContent: 'center',
        borderRadius: 50, borderWidth: 2, borderColor: colors.blue, paddingVertical: 10,
        width: window.width * 0.7,
        alignSelf: 'center'
    },
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
        marginLeft: 10,
        fontFamily: 'Nunito-Light'
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
        opacity: 0.9,
        justifyContent: 'center',
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
        paddingVertical: window.width * 0.05,
        marginVertical: window.width * 0.015,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 4,
        borderRadius: 5,
        paddingHorizontal: window.height * 0.03,
        flexDirection: 'row',
    },
    cardBookImagen: { flex: 1, height: window.height * 0.15 },
    cardBookView: { flex: 3, flexDirection: 'column', marginLeft: 20 },
    textTitle: { fontSize: window.height * 0.025, fontFamily: 'Nunito-BlackItalic' },
    searchBarView: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: window.height * 0.048,
        borderRadius: 10,
    },
    searchBarImagen: {
        height: 15,
        width: 15
    },
    paddingHorizontal: {
        paddingHorizontal: window.height * 0.03
    },
    bookSuggestionImagen: { flex: 1, height: window.height * 0.18, width: window.width * 0.19, marginLeft: 6 },
    bookDetailScrollView: { flex: 1, flexGrow: 1, paddingHorizontal: window.height * 0.03 },
    bookDetailCardBook: {
        backgroundColor: 'white',
        paddingHorizontal: window.width * 0.06,
        paddingVertical: window.width * 0.04,
        height: window.height * 0.4,
        marginBottom: 10,
        borderRadius: 10
    },
    bookDetailViewBook: { flexDirection: 'row', marginBottom: 8, flex: 3 },
    bookDetailImagen: { flex: 1, marginRight: 20, },
    bookDetailViewInfo: { flexDirection: 'column', flex: 2 },
    bookDetailViewButtons: { justifyContent: 'space-evenly', flex: 2, },
    bookDetailViewSuggetion: { backgroundColor: 'white', paddingHorizontal: window.height * 0.03, paddingVertical: window.width * 0.05, marginBottom: 10, borderRadius: 10 },
    bookDetailComments: {
        backgroundColor: colors.white,
        borderRadius: 10
    },
    bookDetailViewComment: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        flexDirection: 'row',

    },
    buttonTextBorder: {
        fontSize: 13,
        color: colors.blue,
        textAlign: 'center',
        fontFamily: 'Nunito-BlackItalic'
    },
    changeServerView: { flexDirection: 'row', flexWrap: 'wrap' },
    changeServerTextInput: {
        backgroundColor: colors.grayLight,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.blue,
        marginVertical: 4,
        fontFamily: 'Nunito-Light'
    },
    dialogContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        minHeight: 300,
        margin: 20,
        padding: 20,
        justifyContent: 'space-around'
    }
});
