import React, { useContext, useState } from 'react';
import {
    SafeAreaView,
    View,
    Image,
    StatusBar,
    KeyboardAvoidingView,
    Text,
    Switch
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../store';
import { SIGN_IN, BOOKS } from '../Constant/url';
import { LOGIN_ACTION, LANGUAGES_ACTION, BOOKS_ACTION } from '../Constant/actionType';
import { onlyLetter, emailValidation } from '../Constant/regex';
import lang from '../Lang/translations';
import { styles, colors } from '../Constant/styles';
import {
    TextInputCustom,
    ButtonCustom,
    PickerCustom,
    ProgressFullView
} from '../Components';
import { apiCall } from '../Api';

function Login() {
    const navigation = useNavigation();
    const storeContext = useContext(StoreContext);
    const languages = storeContext.state.languages;
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
    });
    const [age, setAge] = useState('18');
    const [term, setTerm] = useState(false);
    const [langSwitch, setLangSwitch] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const dispatch = storeContext.dispatch;

    const configTextInput = [
        {
            nameInput: 'name',
            placeholderInput: lang.t("placeholder.name", { locale: languages }),
            valueInput: signIn.name.value,
            errorInput: signIn.name.error,
            errorText: `${lang.t("errorInput.invalid", { textInput: lang.t("placeholder.name", { locale: languages }), locale: languages })}${lang.t("errorInput.onlyLatters", { locale: languages })}`,
        },
        {
            nameInput: 'last_name',
            placeholderInput: lang.t("placeholder.last_name", { locale: languages }),
            valueInput: signIn.last_name.value,
            errorInput: signIn.last_name.error,
            errorText: `${lang.t("errorInput.invalid", { textInput: lang.t("placeholder.last_name", { locale: languages }), locale: languages })}${lang.t("errorInput.onlyLatters", { locale: languages })}`,
        },
        {
            nameInput: 'email',
            placeholderInput: lang.t("placeholder.email", { locale: languages }),
            valueInput: signIn.email.value,
            errorInput: signIn.email.error,
            errorText: `${lang.t("errorInput.invalid", { textInput: lang.t("placeholder.email", { locale: languages }), locale: languages })}${lang.t("errorInput.onlyEmail", { locale: languages })}`,
        },
    ];

    function returnArrayAges() {
        let ages = [{ label: '1', value: '1' },]
        for (let index = 2; index < 60; index++) {
            ages = [...ages, { label: `${index}`, value: `${index}` }]
        }
        return ages
    };
    function toggleSwitch() {
        if (langSwitch) {
            dispatch({ type: LANGUAGES_ACTION, payload: 'en' })
        } else {
            dispatch({ type: LANGUAGES_ACTION, payload: 'es' })
        }
        setLangSwitch(previousState => !previousState);
    };

    async function handleOnLogin() {
        setIsloading(true)
        const dataToSend = {
            name: signIn.name.value,
            last_name: signIn.last_name.value,
            email: signIn.email.value,
            age: age,
            term: term
        }
        try {
            const responseSignIn = await apiCall(SIGN_IN, dataToSend, null, 'POST');
            dispatch({ type: LOGIN_ACTION, payload: responseSignIn.data })
            const responseBooks = await apiCall(BOOKS, null, null, 'GET')
            dispatch({ type: BOOKS_ACTION, payload: responseBooks.data })
            setIsloading(false)
            navigation.navigate("Main")
        } catch (error) {
            setIsloading(false)
        }
        
    };
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
        return emptyText || errorText || !term
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.blue} />
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'position' : 'height'}
                style={styles.flexOne}
                contentContainerStyle={styles.flexOne}
                keyboardVerticalOffset={Platform.OS == 'ios' ? -50 : 60}>
                {isLoading && <ProgressFullView />}
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
                        <PickerCustom
                            value={age}
                            setValue={setAge}
                            placeholder={lang.t("placeholder.age", { locale: languages })}
                            label={age !== ''}
                            items={returnArrayAges()} />
                        <View style={styles.viewCheckBox}>
                            <CheckBox
                                value={term}
                                onValueChange={(newValue) => setTerm(newValue)}
                                boxType='square'
                                onCheckColor={colors.blueDark}
                                onTintColor={colors.blueDark}
                                tintColors={{ true: colors.blueDark, false: colors.gray }}
                                style={styles.checkBox}
                            />
                            <Text style={styles.textCheckBox}>
                                {lang.t("login.term", { locale: languages })}
                            </Text>
                        </View>

                        <ButtonCustom
                            onPressCustom={handleOnLogin}
                            textButton={lang.t("button.login", { locale: languages })}
                            disabledCustom={handleDisabledButton()}
                        />
                        <View style={styles.flexRow}>
                            <Text style={styles.alignSelfCenter}> {lang.t("button.lang", { locale: languages })}</Text>
                            <Switch
                                trackColor={{ true: colors.blue, false: colors.gray, }}
                                thumbColor={langSwitch ? colors.blueDark : colors.grayBack}
                                onValueChange={toggleSwitch}
                                value={langSwitch}
                                style={styles.switch}
                            />
                        </View>

                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Login