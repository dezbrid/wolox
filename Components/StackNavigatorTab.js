import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';

const Stack = createStackNavigator();
function StackNavigatorTab(props) {
    const {
        screenName,
        screenTitle,
        screenComponent
    } = props
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{

            }}
        >
            <Stack.Screen
                name={screenName}
                component={screenComponent}
                options={{
                    headerShown: true,
                    headerTitle: screenTitle
                }}
            />
        </Stack.Navigator >
    );
}
StackNavigatorTab.propTypes = {
    screenName: PropTypes.string.isRequired,
    screenTitle:PropTypes.string.isRequired,
    screenComponent:PropTypes.node.isRequired
}
export default StackNavigatorTab