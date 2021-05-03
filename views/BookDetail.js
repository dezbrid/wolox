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
import { colors, styles } from '../Constant/styles';
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

    console.log('bookData', bookData)
    console.log('books', books)
    console.log('suggestionBooks', suggestionBooks)

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
    function cardBook({ item }) {
        return (
            <TouchableNativeFeedback onPress={() => handleOpenBookDetail(item)}>

                <ImageBackground
                    source={item.image_url ? { uri: item.image_url } : require('../Assets/General/img_book_placeholder.png')}
                    style={{ flex: 1, height: 120, width: 80, marginLeft: 6 }}
                    resizeMode='stretch' />

            </TouchableNativeFeedback>
        )
    }
    return (
        <ViewContainer styleView={styles.viewContainer}>
            <ScrollView style={{ flex: 1, flexGrow: 1, paddingHorizontal: 20 }}>
                <View style={{ backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 15, minHeight: 320, marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 20, flex: 3 }}>
                        <Image
                            style={{ flex: 1, marginRight: 20, }}
                            source={bookData.image_url ? { uri: bookData.image_url } : require('../Assets/General/img_book_placeholder.png')}
                            resizeMode='stretch' />
                        <View style={{ flexDirection: 'column', flex: 2 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{bookData.title}</Text>
                            <Text>{bookData.author}</Text>
                            <Text>{bookData.publisher}</Text>
                            <Text>{bookData.year}</Text>
                            <Text>{bookData.genre}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'space-around', flex: 1 }}>
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
                    <View style={{ backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 10, marginBottom: 20 }}>
                        <FlatList
                            data={suggestionBooks}
                            horizontal={true}
                            renderItem={cardBook}
                            keyExtractor={(item) => item.id}
                            extraData={suggestionBooks}

                        />
                    </View>}

                {(bookData.hasOwnProperty('comments') && bookData.comments.length > 0) &&
                    <View style={{ backgroundColor: 'white', }}>
                        {
                            bookData.comments.map((comment, index) => {
                                console.log('comment', comment)
                                const photo = comment.photo === 'user1' ? require('../Assets/General/img_user1.png') : require("../Assets/General/img_user2.png")
                                return (
                                    <View style={styles.cardBookContainer} key={index}>
                                        <Image source={photo} style={styles.cardBookImagen} resizeMode='contain' />
                                        <View style={styles.cardBookView}>
                                            <Text style={styles.cardBookTitle} >{comment.name}</Text>
                                            <Text >{comment.comment}</Text>
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