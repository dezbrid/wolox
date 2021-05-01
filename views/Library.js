import React, { useContext, useState, useLayoutEffect, useEffect } from 'react';
import {
    FlatList,
    Text,
    View,
    Image, TouchableOpacity, TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../store';
import { ViewContainer } from '../Components';
import { styles } from '../Constant/styles';


function Library() {
    const storeContext = useContext(StoreContext)
    const navigation = useNavigation();
    const languages = storeContext.state.languages;
    const books = storeContext.state.books;
    const [arrayBooks, setArrayBooks] = useState(books);
    const [searchActive, setSearchActive] = useState(false);
    console.log('searchActive', searchActive)
    useEffect(() => {
        navigation.setOptions({
            headerRight: () =>
                <TouchableOpacity onPress={() => setSearchActive(prev => !prev)}>
                    <Image source={require('../Assets/NavigationBar/ic_search.png')} style={styles.iconsHeader} />
                </TouchableOpacity>,
            headerTitle: searchActive ? () =>
                <View style={{
                    backgroundColor: 'white', flex: 1, alignItems: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    height: 40
                }} /> : (props) => <Text style={[styles.headerTitle,styles.cardBookTitle]}>{props.children}</Text>,
               

        });
    }, [searchActive]);

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