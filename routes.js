import React, { useContext, useState } from 'react';
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
} from './Views';
import {
    Image,
    View,
    TouchableOpacity,
    Text, TextInput
} from 'react-native';
import { StoreContext } from './store';
import { styles } from './Constant/styles';
import lang from './Lang/translations';
import { SEARCH_BAR_ACTION } from './Constant/actionType';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabLibrary() {
    //const [searchBar, setSearchBar] = useState(false);
    //const [searchInput, setSearchInput] = useState('')
    const storeContext = useContext(StoreContext);
    const dispatch = storeContext.dispatch;
    const languages = storeContext.state.languages;
    const searchBar = storeContext.state.searchBar;
    function handleOpenSearch() {
        if (searchBar.open) {
            dispatch({ type: SEARCH_BAR_ACTION, payload: { open: false, text: '' } })
        } else {
            dispatch({ type: SEARCH_BAR_ACTION, payload: { open: true } })
        }
    }
    function handleOnChangeText(text) {
        dispatch({ type: SEARCH_BAR_ACTION, payload: { text: text } })
    }
    function headerRightComponent() {
        return (
            <TouchableOpacity onPress={handleOpenSearch}>
                <Image source={require('./Assets/NavigationBar/ic_search.png')} style={styles.iconsHeader} />
            </TouchableOpacity>
        )
    }
    function headerTitleComponent(props) {
        if (searchBar.open) {
            return (
                <View style={styles.searchBarView} >
                    <Image source={require('./Assets/General/ic_search_placeholder.png')} style={styles.searchBarImagen} />
                    <TextInput
                        value={searchBar.text}
                        onChangeText={handleOnChangeText}
                        placeholder={lang.t("placeholder.search", { locale: languages })}
                        autoCorrect={false}
                        autoCapitalize='none'
                        style={styles.flexOne}
                    />
                </View>
            )
        }
        return (
            <Text style={[styles.headerTitle, styles.cardBookTitle]}>{props.children}</Text>
        )


    }
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
                headerBackground: () =>
                    <Image source={require('./Assets/General/bc_nav_bar.png')} style={styles.width100} />,
                headerTitleStyle: styles.headerTitle,
                headerLeft: () => <Image source={require('./Assets/NavigationBar/ic_notifications.png')} style={styles.iconsHeader} />,
                headerRight: headerRightComponent,
                headerTitle: headerTitleComponent,

            }}
        >
            <Stack.Screen
                name={lang.t("titleTab.library", { locale: languages })}
                component={Library}

            />

        </Stack.Navigator >
    );
}
function TabWishlist() {
    const storeContext = useContext(StoreContext);
    const languages = storeContext.state.languages;
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
                headerBackground: () =>
                    <Image source={require('./Assets/General/bc_nav_bar.png')} style={styles.width100} />,
                headerTitleStyle: styles.headerTitle
            }}
        >
            <Stack.Screen
                name={lang.t("titleTab.wishlist", { locale: languages })}
                component={Wishlist}
            />
        </Stack.Navigator >
    );
} function TabAddNew() {
    const storeContext = useContext(StoreContext);
    const languages = storeContext.state.languages;
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
                headerBackground: () =>
                    <Image source={require('./Assets/General/bc_nav_bar.png')} style={styles.width100} />,
                headerTitleStyle: styles.headerTitle
            }}
        >
            <Stack.Screen
                name={lang.t("titleTab.addNew", { locale: languages })}
                component={AddNew}
            />
        </Stack.Navigator >
    );
}
function TabRentals() {
    const storeContext = useContext(StoreContext);
    const languages = storeContext.state.languages;
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
                headerBackground: () =>
                    <Image source={require('./Assets/General/bc_nav_bar.png')} style={styles.width100} />,
                headerTitleStyle: styles.headerTitle
            }}
        >
            <Stack.Screen
                name={lang.t("titleTab.rentals", { locale: languages })}
                component={Rentals}
            />
        </Stack.Navigator >
    );
}
function TabSettings() {
    const storeContext = useContext(StoreContext);
    const languages = storeContext.state.languages;
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
                headerBackground: () =>
                    <Image source={require('./Assets/General/bc_nav_bar.png')} style={styles.width100} />,
                headerTitleStyle: styles.headerTitle
            }}
        >
            <Stack.Screen
                name={lang.t("titleTab.settings", { locale: languages })}
                component={Settings}
            />
        </Stack.Navigator >
    );
}

function TabNavigator() {
    const storeContext = useContext(StoreContext);
    const languages = storeContext.state.languages;
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
                    tabBarLabel: lang.t("titleTab.library", { locale: languages }),
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
                    tabBarLabel: lang.t("titleTab.wishlist", { locale: languages }),
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
                    tabBarLabel: lang.t("titleTab.addNew", { locale: languages }),
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
                    tabBarLabel: lang.t("titleTab.rentals", { locale: languages }),
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
                    tabBarLabel: lang.t("titleTab.settings", { locale: languages }),
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
    const storeContext = useContext(StoreContext);
    const session_active = storeContext.state.session_active;
    const languages = storeContext.state.languages;
    return (
        <Stack.Navigator
            initialRouteName={"Login"}
            headerMode="screen"
            screenOptions={{

            }}
        >
            {
                session_active ?
                    <>
                        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: true, title: lang.t("titleTab.bookDetail", { locale: languages }) }} />
                    </> :
                    <>
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    </>

            }

        </Stack.Navigator>
    )

}
export default StackNavigator