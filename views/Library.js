import React, { useContext, useState, useEffect, useCallback, useMemo } from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../store';
import { ViewContainer } from '../Components';
import { styles } from '../Constant/styles';
import { useFocusEffect } from '@react-navigation/native';
import { SEARCH_BAR_ACTION } from '../Constant/actionType';



function Library() {
    const storeContext = useContext(StoreContext)
    const dispatch = storeContext.dispatch;
    const navigation = useNavigation();
    const books = storeContext.state.books;
    const booksFilter = storeContext.state.booksFilter;
    const [arrayBooks, setArrayBooks] = useState(books);
    useEffect(() => {
        setArrayBooks(booksFilter)
    }, [booksFilter])
    
    useFocusEffect(
        useCallback(() => {
            return () => {
                setArrayBooks(books)
                dispatch({ type: SEARCH_BAR_ACTION, payload: { open: false, text: '' } })
            }
        }, [navigation])
    );
    
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