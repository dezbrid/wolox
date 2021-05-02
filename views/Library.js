import React, { useContext, useState, useEffect, useCallback, useMemo } from 'react';
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
    useEffect(() => {
        const prueba = async () => {
            setTimeout(() => {
                console.log('prueba')
            }, 1000);
        }
        prueba()
    }, [booksFilter])

    useFocusEffect(
        useCallback(() => {
            return () => {
                setArrayBooks(books)
                dispatch({ type: SEARCH_BAR_ACTION, payload: { open: false, text: '' } })
            }
        }, [])
    );
    function handleOpenBookDetail(item) {
        navigation.navigate("BookDetail",{item})
        
    }

    function cardBook({ item }) {
        return (
            <TouchableNativeFeedback onPress={()=>handleOpenBookDetail(item)}>
                <View style={styles.cardBookContainer}>
                    <Image source={item.image_url?{ uri: item.image_url }:require('../Assets/General/img_book_placeholder.png')} style={styles.cardBookImagen} resizeMode='contain' />
                    <View style={styles.cardBookView}>
                        <Text style={styles.cardBookTitle} >{item.title}</Text>
                        <Text >{item.author}</Text>
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
            />

        </ViewContainer>
    );
}

export default Library