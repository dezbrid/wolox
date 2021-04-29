import React, { useContext, useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Button,
    Image,
    StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../store';
import { LOGIN_ACTION } from '../Constant/actionType';
import { onlyLetter, emailValidation } from '../Constant/regex';
import lang from '../Lang/translations';
import { styles, colors } from '../Constant/styles';

function Login() {
    const navigation = useNavigation();
    const storeContext = useContext(StoreContext);
    const languages = storeContext.state.languages
    const [signIn, setSignIn] = useState({
        name: {
            value: '',
            error: false,
            regex: onlyLetter,
        },
        last_name: {
            value: '',
            error: false,
            regex: onlyLetter,
        },
        email: {
            value: '',
            error: false,
            regex: emailValidation,
        },
        age: '',
        terms: false
    })
    const session_active = storeContext.state.session_active;
    const dispatch = storeContext.dispatch
    useEffect(() => {
        if (session_active) {
            navigation.navigate("Main")
        }
    }, [session_active])
    const configTextInput = [
        {
            nameInput: 'name',
            placeholderInput: lang.t("textInput.name", { locale: languages }),
            valueInput: signIn.name.value,
            errorInput: signIn.name.error,
            errorText: `${lang.t("errorInput.invalid", { textInput: lang.t("textInput.name", { locale: languages }), locale: languages })}${lang.t("errorInput.onlyLatters", { locale: languages })}`,
        },
        {
            nameInput: 'last_name',
            placeholderInput: lang.t("textInput.last_name", { locale: languages }),
            valueInput: signIn.last_name.value,
            errorInput: signIn.last_name.error,
            errorText: `${lang.t("errorInput.invalid", { textInput: lang.t("textInput.last_name", { locale: languages }), locale: languages })}${lang.t("errorInput.onlyLatters", { locale: languages })}`,
        },
        {
            nameInput: 'email',
            placeholderInput: lang.t("textInput.email", { locale: languages }),
            valueInput: signIn.email.value,
            errorInput: signIn.email.error,
            errorText: `${lang.t("errorInput.invalid", { textInput: lang.t("textInput.email", { locale: languages }), locale: languages })}${lang.t("errorInput.onlyEmail", { locale: languages })}`,
        },
    ]
    function onLogin() {
        dispatch({ type: LOGIN_ACTION, payload: true })

    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.blue} />
            <View style={styles.viewContainerLogin}>
                <Image
                    source={require('../Assets/General/wbooks_logo.png')}
                    style={styles.LogoCenter}
                />
                <View style={styles.viewTextInputLogin}>
                    <Text> Login</Text>
                    <Button
                        onPress={onLogin}
                        title="main" />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Login