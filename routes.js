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
import {
    Image
} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabLibrary() {
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
            }}
        >
            <Stack.Screen
                name="Library"
                component={Library}
                options={{ headerShown: true, headerBackTitle: false, headerTitle: 'LIBRARY' }} />
        </Stack.Navigator >
    );
}
function TabWishlist() {
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
            }}
        >
            <Stack.Screen
                name="Wishlist"
                component={Wishlist}
                options={{ headerShown: true, headerBackTitle: false, headerTitle: 'WISHLIST' }} />
        </Stack.Navigator >
    );
} function TabAddNew() {
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
            }}
        >
            <Stack.Screen
                name="AddNew"
                component={AddNew}
                options={{ headerShown: true, headerBackTitle: false, headerTitle: 'ADD NEW' }} />
        </Stack.Navigator >
    );
}
function TabRentals() {
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
            }}
        >
            <Stack.Screen
                name="Rentals"
                component={Rentals}
                options={{ headerShown: true, headerBackTitle: false, headerTitle: 'RENTALS' }} />
        </Stack.Navigator >
    );
}
function TabSettings() {
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
            }}
        >
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: true, headerBackTitle: false, headerTitle: 'SENTTINGS' }} />
        </Stack.Navigator >
    );
}

function TabNavigator() {

    return (
        <Tab.Navigator
            initialRouteName="Library"
            tabBarOptions={{
                showLabel: true,
            }}
        >
            <Tab.Screen
                name="Library"
                component={TabLibrary}
                options={{
                    tabBarLabel: 'LIBRARY',
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon = focused ?
                            require('./Assets/ToolBar/ic_library_active.png') :
                            require('./Assets/ToolBar/ic_library.png')
                        return <Image source={icon} />
                    },
                }} />
            <Tab.Screen
                name="Wishlist"
                component={TabWishlist}
                options={{
                    tabBarLabel: 'WISHLIST',
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon = focused ?
                            require('./Assets/ToolBar/ic_wishlist_active.png') :
                            require('./Assets/ToolBar/ic_wishlist.png')
                        return <Image source={icon} />
                    },
                }} />
            <Tab.Screen
                name="AddNew"
                component={TabAddNew}
                options={{
                    tabBarLabel: 'ADD NEW',
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon = focused ?
                            require('./Assets/ToolBar/ic_add_new_active.png') :
                            require('./Assets/ToolBar/ic_add_new.png')
                        return <Image source={icon} />
                    },
                }} />
            <Tab.Screen
                name="Rentals"
                component={TabRentals}
                options={{
                    tabBarLabel: 'RENTALS',
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon = focused ?
                            require('./Assets/ToolBar/ic_myrentals_active.png') :
                            require('./Assets/ToolBar/ic_myrentals.png')
                        return <Image source={icon} />
                    },
                }} />
            <Tab.Screen
                name="Settings"
                component={TabSettings}
                options={{
                    tabBarLabel: 'SETTINGS',
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon = focused ?
                            require('./Assets/ToolBar/ic_settings_active.png') :
                            require('./Assets/ToolBar/ic_settings.png')
                        return <Image source={icon} />
                    },
                }} />
        </Tab.Navigator>
    )
}

function StackNavigator() {

    return (
        <Stack.Navigator
            initialRouteName="Login"
            headerMode="screen"
            screenOptions={{

            }}
        >
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: true, title: 'BOOK DETAIL' }} />
            <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}
export default StackNavigator