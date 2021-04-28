import React, { useContext,useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../store';
import { LOGIN_ACTION } from '../Constant/actionType'


function Login() {
    const navigation = useNavigation();
    const storeContext = useContext(StoreContext);
    const session_active=storeContext.state.session_active
    useEffect(() => {
        if (session_active){
            navigation.navigate("Main")
        }
    }, [session_active])
    function onLogin() {
        storeContext.dispatch({ type: LOGIN_ACTION, payload: true })
       
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