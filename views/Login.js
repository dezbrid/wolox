import React, { useContext, useState } from 'react';
import {
    View,
    Image,
    Text,
    TextInput
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../store';
import { SIGN_IN, URL_API } from '../Constant/url';
import {
    LOGIN_ACTION,
    IS_LOADING_ACTION,
    ALERT_INFO_ACTION,
    DIALOG_ACTION,
    SERVER_ADDRESS_ACTION
} from '../Constant/actionType';
import { onlyLetter, emailValidation } from '../Constant/regex';
import lang from '../Lang/translations';
import { styles, colors } from '../Constant/styles';
import {
    TextInputCustom,
    ButtonCustom,
    PickerCustom,
    ViewContainer,
    LangSwitch,
    Dialog
} from '../Components';
import { apiCall } from '../Api';

function Login() {
    const navigation = useNavigation();
    const storeContext = useContext(StoreContext);
    const dispatch = storeContext.dispatch;
    const languages = storeContext.state.languages;
    const dialog = storeContext.state.dialog;
    const server_address = storeContext.state.server_address;
    const [age, setAge] = useState('30');
    const [term, setTerm] = useState(false);
    const [serverAddress, setServerAddress] = useState('');
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



    const configTextInput = [

        {
            nameInput: 'email',
            placeholderInput: lang.t("placeholder.email", { locale: languages }),
            valueInput: signIn.email.value,
            errorInput: signIn.email.error,
            errorText: `${lang.t("errorInput.invalid", { textInput: lang.t("placeholder.email", { locale: languages }), locale: languages })}${lang.t("errorInput.onlyEmail", { locale: languages })}`,
        },
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
    ];

    function returnArrayAges() {
        let ages = [{ label: '1', value: '1' },]
        for (let index = 2; index < 60; index++) {
            ages = [...ages, { label: `${index}`, value: `${index}` }]
        }
        return ages
    };

    async function handleOnLogin() {
        dispatch({ type: IS_LOADING_ACTION, payload: 'true' })
        const dataToSend = {
            name: signIn.name.value,
            last_name: signIn.last_name.value,
            email: signIn.email.value,
            age: age,
            term: term
        }
        const urlBase = server_address === '' ? URL_API : server_address;
        try {
            const responseSignIn = await apiCall(urlBase + SIGN_IN, dataToSend, null, 'POST');
            dispatch({ type: ALERT_INFO_ACTION, payload: { open: true, text: lang.t("alert.welcome", { locale: languages }), type: 'success' } })
            dispatch({ type: LOGIN_ACTION, payload: responseSignIn.data })
            navigation.navigate("Main")
        } catch (error) {
            dispatch({ type: IS_LOADING_ACTION, payload: false })
            dispatch({
                type: DIALOG_ACTION, payload: {
                    title: 'Error',
                    message: lang.t("dialog.errorConnectTo", { locale: languages, address: `${urlBase}${SIGN_IN}` }),
                    open: true
                }
            })
            dispatch({ type: ALERT_INFO_ACTION, payload: { open: true, text: lang.t("alert.errorGetData", { locale: languages }), type: 'error' } })

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
    function handleOnBlurChangeServerAddress() {
        dispatch({ type: SERVER_ADDRESS_ACTION, payload: serverAddress })
    }

    return (
        <ViewContainer
            enableKeyboardAvoidingView={true}
            backgroundColorView={'backgroundColorBlue'}
        >
            {dialog.open && <Dialog>
                <View style={styles.changeServerView}>
                    <Text style={styles.customFont}>{lang.t("dialog.changeAddress", { locale: languages })}</Text>
                    <Text style={styles.textColorRed}>{server_address === '' ? URL_API : server_address}</Text>
                </View>
                <TextInput
                    placeholder={'server address'}
                    onChangeText={text => setServerAddress(text.toLowerCase())}
                    value={serverAddress}
                    style={styles.changeServerTextInput}
                    onBlur={handleOnBlurChangeServerAddress}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                />
            </Dialog>}
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
                <LangSwitch />

            </View>
        </ViewContainer>

    );
}

export default Login