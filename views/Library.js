import React, { useContext } from 'react';
import {
    FlatList,
    Text,
    View,
    Image
} from 'react-native';
import { StoreContext } from '../store';
import { ViewContainer } from '../Components';
import { styles } from '../Constant/styles';


function Library() {
    const storeContext = useContext(StoreContext)
    const languages = storeContext.state.languages;
    const books = storeContext.state.books;

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
                data={books}
                renderItem={cardBook}
                keyExtractor={(item) => item.id}
                extraData={books}
                style={styles.iconsHeader}
            />

        </ViewContainer>
    );
}

export default Library