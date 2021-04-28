import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Login() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text> Login</Text>
                <Button
                    onPress={()=>{navigation.navigate("Main")}}
                    title="main" />
            </View>
        </SafeAreaView>
    );
}

export default Login