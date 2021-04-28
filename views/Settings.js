import React, { useContext } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { StoreContext } from '../store';
import { LOGOUT_ACTION } from '../Constant/actionType';


function Settings() {
    const storeContext = useContext(StoreContext)
    return (
        <View>
            <Text> Settings</Text>
            <Button
                onPress={() => {
                    storeContext.dispatch({ type: LOGOUT_ACTION })
                }}
                title="logout" />
        </View>
    );
}

export default Settings