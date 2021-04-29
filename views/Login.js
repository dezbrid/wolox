import React, { useContext, useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../store';
import { LOGIN_ACTION } from '../Constant/actionType';
import { onlyLetter, emailValidation } from '../Constant/regex';


function Login() {
    const navigation = useNavigation();
    const storeContext = useContext(StoreContext);
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
    function onLogin() {
        dispatch({ type: LOGIN_ACTION, payload: true })

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text> Login</Text>
                <Button
                    onPress={onLogin}
                    title="main" />
            </View>
        </SafeAreaView>
    );
}

export default Login