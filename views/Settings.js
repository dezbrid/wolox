import React, { useContext } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { StoreContext } from '../store';
import { LOGOUT_ACTION } from '../Constant/actionType';
import { ViewContainer } from '../Components';
import { styles } from '../Constant/styles';

function Settings() {
    const storeContext = useContext(StoreContext)
    return (
        <ViewContainer styleView={styles.viewContainer}>
            <Text> Settings</Text>
            <Button
                onPress={() => {
                    storeContext.dispatch({ type: LOGOUT_ACTION })
                }}
                title="logout" />
        </ViewContainer>
    );
}

export default Settings