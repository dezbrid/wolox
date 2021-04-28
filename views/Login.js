import React, { useContext } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../store';


function Login() {
    const navigation = useNavigation();
    const storeContext = useContext(StoreContext)
    console.log('storeContext', storeContext.state)
    function onLogin() {
        navigation.navigate("Main")
        storeContext.dispatch({type:'LOGIN',payload:'hola'})
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