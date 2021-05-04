import React, { useContext, useState, useEffect, useCallback } from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
    TouchableNativeFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../store';
import { ViewContainer } from '../Components';
import { styles } from '../Constant/styles';
import { useFocusEffect } from '@react-navigation/native';
import { SEARCH_BAR_ACTION } from '../Constant/actionType';
import { apiCall } from '../Api';
import { BOOKS, URL_API } from '../Constant/url';
import {
    BOOKS_ACTION,

    ALERT_INFO_ACTION
} from '../Constant/actionType';
import lang from '../Lang/translations';



function Library() {
    const storeContext = useContext(StoreContext)
    const dispatch = storeContext.dispatch;
    const navigation = useNavigation();
    const books = storeContext.state.books;
    const booksFilter = storeContext.state.booksFilter;
    const server_address = storeContext.state.server_address;
    const languages = storeContext.state.languages;
    const searchBar = storeContext.state.searchBar
    const [arrayBooks, setArrayBooks] = useState(books);
    const [isLoading, setIsloading] = useState(false)

    useFocusEffect(
        useCallback(() => {
            onGetBooks()
        }, [])
    );
    useEffect(() => {
        if (searchBar.text === '') {

            setArrayBooks(books)
        } else {
            setArrayBooks(booksFilter)
        }
    }, [booksFilter, searchBar])
    useEffect(() => {
        setArrayBooks(books)

    }, [books])

    useFocusEffect(
        useCallback(() => {
            return () => {
                dispatch({ type: SEARCH_BAR_ACTION, payload: { open: false, text: '' } })
            }
        }, [])
    );
    async function onGetBooks() {

        const urlBase = server_address === '' ? URL_API : server_address;
        setIsloading(true)
        try {
            const responseBooks = await apiCall(urlBase + BOOKS, null, null, 'GET')
            dispatch({ type: BOOKS_ACTION, payload: responseBooks.data })
            dispatch({ type: ALERT_INFO_ACTION, payload: { open: true, text: lang.t("alert.books", { locale: languages }), type: 'success' } })
            setIsloading(false)
        } catch (error) {
            setIsloading(false)
            dispatch({ type: ALERT_INFO_ACTION, payload: { open: true, text: lang.t("alert.errorGetData", { locale: languages }), type: 'error' } })
        }


    }
    function handleOpenBookDetail(item) {
        navigation.navigate("BookDetail", { item })

    }

    function cardBook({ item }) {
        return (
            <TouchableNativeFeedback onPress={() => handleOpenBookDetail(item)}>
                <View style={styles.cardBookContainer}>
                    <Image source={item.image_url ? { uri: item.image_url} : require('../Assets/General/img_book_placeholder.png')} style={styles.cardBookImagen} resizeMode='contain' />
                    <View style={styles.cardBookView}>
                        <Text style={styles.textTitle} >{item.title}</Text>
                        <Text style={styles.customFont}>{item.author}</Text>
                    </View>

                </View>
            </TouchableNativeFeedback>
        )
    }
    return (
        <ViewContainer styleView={styles.viewContainer} >
            <FlatList
                data={arrayBooks}
                renderItem={cardBook}
                keyExtractor={(item) => item.id}
                extraData={arrayBooks}
                style={styles.iconsHeader}
                refreshing={isLoading}
                onRefresh={onGetBooks}
            />

        </ViewContainer>
    );
}

export default Library