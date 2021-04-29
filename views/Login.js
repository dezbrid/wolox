import React, { useContext, useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Image,
    StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../store';
import { LOGIN_ACTION } from '../Constant/actionType';
import { onlyLetter, emailValidation } from '../Constant/regex';
import lang from '../Lang/translations';
import { styles, colors } from '../Constant/styles';
import {
    TextInputCustom,
    ButtonCustom
} from '../Components';

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
        }
    })
    const [age, setAge] = useState('')
    const [term, setTerm] = useState(false)
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

    function handleOnLogin() {
        onLogin()
    }
    function onLogin() {
        dispatch({ type: LOGIN_ACTION, payload: true })

    }
    function handleDisabledButton() {
        let emptyText = false
        let errorText = false
        for (const key in signIn) {
            if (signIn[key].value.trim().length === 0) {
                emptyText = true
                break
            }
            errorText = errorText || signIn[key].error
        }
        return emptyText || errorText
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
                    {
                        configTextInput.map((textInput, index) => {
                            return (
                                <TextInputCustom
                                    key={index}
                                    nameInput={textInput.nameInput}
                                    placeholder={textInput.placeholderInput}
                                    valueInput={textInput.valueInput}
                                    setCustomWithValue={setSignIn}
                                    label={textInput.valueInput !== ''}
                                    errorInput={textInput.errorInput}
                                    errorText={textInput.errorText}
                                />
                            )
                        })
                    }
                    <ButtonCustom
                        onPressCustom={handleOnLogin}
                        textButton={lang.t("button.login", { locale: languages })}
                        disabledCustom={handleDisabledButton()}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Login