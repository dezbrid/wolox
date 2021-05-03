import React, { useLayoutEffect, useContext } from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    View,
    ScrollView,
    FlatList,
    TouchableNativeFeedback,
    ImageBackground
} from 'react-native';
import { ViewContainer, ButtonCustom } from '../Components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../Constant/styles';
import { StoreContext } from '../store';
import lang from '../Lang/translations';

function BookDetail() {
    const navigation = useNavigation()
    const storeContext = useContext(StoreContext)
    const route = useRoute();
    const bookData = route.params.item
    const books = storeContext.state.books;
    const languages = storeContext.state.languages;
    const suggestionBooks = books.filter((bookObj) => { return bookObj.genre === bookData.genre && bookObj.id !== bookData.id })

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <TouchableOpacity onPress={() => navigation.navigate("Library")}>
                <Image source={require('../Assets/NavigationBar/ic_back.png')} style={styles.iconsHeader} />
            </TouchableOpacity>,
        });
    }, []);
    function handleOpenBookDetail(item) {
        navigation.navigate("BookDetail", { item })
    }
    function bookSuggestion({ item }) {
        return (
            <TouchableNativeFeedback onPress={() => handleOpenBookDetail(item)}>
                <ImageBackground
                    source={item.image_url ? { uri: item.image_url } : require('../Assets/General/img_book_placeholder.png')}
                    style={styles.bookSuggestionImagen}
                    resizeMode='stretch' />

            </TouchableNativeFeedback>
        )
    }
    return (
        <ViewContainer styleView={styles.viewContainer}>
            <ScrollView style={styles.bookDetailScrollView}>
                <View style={styles.bookDetailCardBook}>
                    <View style={styles.bookDetailViewBook}>
                        <Image
                            style={styles.bookDetailImagen}
                            source={bookData.image_url ? { uri: bookData.image_url } : require('../Assets/General/img_book_placeholder.png')}
                            resizeMode='stretch' />
                        <View style={styles.bookDetailViewInfo}>
                            <Text style={styles.textTitle}>{bookData.title}</Text>
                            <Text style={styles.customFont}>{bookData.author}</Text>
                            <Text style={styles.customFont}>{bookData.publisher}</Text>
                            <Text style={styles.customFont}>{bookData.year}</Text>
                            <Text style={styles.customFont}>{bookData.genre}</Text>
                        </View>
                    </View>
                    <View style={styles.bookDetailViewButtons}>
                        <ButtonCustom
                            onPressCustom={() => console.log('button')}
                            textButton={lang.t("button.addWish", { locale: languages })}
                            typeImagen={false}
                        />
                        <ButtonCustom
                            onPressCustom={() => console.log('button')}
                            textButton={lang.t("button.rent", { locale: languages })}
                        />
                    </View>
                </View>
                {suggestionBooks.length > 0 &&
                    <View style={styles.bookDetailViewSuggetion}>
                        <FlatList
                            data={suggestionBooks}
                            horizontal={true}
                            renderItem={bookSuggestion}
                            keyExtractor={(item) => item.id}
                            extraData={suggestionBooks}

                        />
                    </View>}

                {(bookData.hasOwnProperty('comments') && bookData.comments.length > 0) &&
                    <View style={styles.bookDetailComments}>
                        {
                            bookData.comments.map((comment, index) => {
                                const photo = comment.photo === 'user1' ? require('../Assets/General/img_user1.png') : require("../Assets/General/img_user2.png")
                                return (
                                    <View style={styles.bookDetailViewComment} key={index}>
                                        <Image source={photo} style={styles.cardBookImagen} resizeMode='contain' />
                                        <View style={styles.cardBookView}>
                                            <Text style={styles.textTitle} >{comment.name}</Text>
                                            <Text style={styles.customFont}>{comment.comment}</Text>
                                        </View>

                                    </View>
                                )
                            })
                        }
                    </View>}

            </ScrollView>
        </ViewContainer>
    );
}

export default BookDetail