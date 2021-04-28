import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    AddNew,
    BookDetail,
    Library,
    Login,
    Rentals,
    Settings,
    Wishlist
} from './Views'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {

    return (
        <Tab.Navigator
            initialRouteName="TopLists"
            tabBarOptions={{
                showLabel: true,
            }}
        >

        </Tab.Navigator>
    )
}