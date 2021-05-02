import React, { useContext, useState, useEffect, useCallback, useMemo } from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../store';
import { ViewContainer } from '../Components';
import { styles } from '../Constant/styles';
import { useFocusEffect } from '@react-navigation/native';
import lang from '../Lang/translations';


function Library() {
    const storeContext = useContext(StoreContext)
    const navigation = useNavigation();
    const languages = storeContext.state.languages;
    const books = storeContext.state.books;
    const [arrayBooks, setArrayBooks] = useState(books);
    const [searchBar, setSearchBar] = useState(false);
    const [searchInput, setSearchInput] = useState('')

   /* useEffect(() => {
        navigation.setOptions({
            headerRight: headerRightComponent,
            headerTitle: headerTitleComponent,
        });

    }, [searchBar, searchInput, languages]);*/
    useFocusEffect(
        useCallback(() => {
            return () => handleCloseSearchBar()
        }, [navigation])
    );
    /*function headerRightComponent() {
        return (
            <TouchableOpacity onPress={toggleButtonSearch}>
                <Image source={require('../Assets/NavigationBar/ic_search.png')} style={styles.iconsHeader} />
            </TouchableOpacity>
        )
    }
    function headerTitleComponent(props) {
        if (searchBar) {
            return (
                <View style={styles.searchBarView} >
                    <Image source={require('../Assets/General/ic_search_placeholder.png')} style={styles.searchBarImagen} />
                    <TextInput
                        value={searchInput}
                        onChangeText={(text) => handleOnChangesText(text)}
                        placeholder={lang.t("placeholder.search", { locale: languages })}
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                </View>
            )
        }
        return (
            <Text style={[styles.headerTitle, styles.cardBookTitle]}>{props.children}</Text>
        )


    }*/
    function handleCloseSearchBar() {
        setSearchBar(false)
        setSearchInput('')
        setArrayBooks(books)
    }
    function toggleButtonSearch() {
        if (searchBar) {
            handleCloseSearchBar()
        } else {
            setSearchBar(true)
        }

    }
    function handleOnChangesText(newText) {
        const filterArrayBooks = books.filter((bookObj) => filterBooks(bookObj, newText))
        setArrayBooks(filterArrayBooks)
        setSearchInput(newText)
    }
    function filterBooks(obj, value) {
        return obj.title.includes(value)

    }
    function cardBook({ item }) {
        return (
            <View style={styles.cardBookContainer}>
                <Image source={{ uri: item.image_url }} style={styles.cardBookImagen} resizeMode='contain' />
                <View style={styles.cardBookView}>
                    <Text style={styles.cardBookTitle} >{item.title}</Text>
                    <Text >{item.author}</Text>
                </View>

            </View>

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
            />

        </ViewContainer>
    );
}

export default Library