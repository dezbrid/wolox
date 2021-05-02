import React, { useLayoutEffect, useContext } from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    View,
    ScrollView,
    FlatList
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
    const suggestionBooks = books.filter((bookObj) => { return bookObj.genre === bookData.genre })

    console.log(route)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <TouchableOpacity onPress={() => navigation.navigate("Library")}>
                <Image source={require('../Assets/NavigationBar/ic_back.png')} style={styles.iconsHeader} />
            </TouchableOpacity>,
        });
    }, []);

    return (
        <ViewContainer styleView={styles.viewContainer}>
            <ScrollView style={{ flex: 1, flexGrow: 1, paddingHorizontal: 20 }}>
                <View style={{ backgroundColor: 'white', paddingHorizontal: 30, paddingVertical: 15, minHeight:320 }}>
                    <View style={{ flexDirection: 'row',marginBottom:20,flex:3 }}>
                        <Image
                            style={{ flex:1,marginRight:20,}}
                            source={bookData.image_url ? { uri: bookData.image_url } : require('../Assets/General/img_book_placeholder.png')}
                            resizeMode='stretch' />
                        <View style={{ flexDirection: 'column',flex:2 }}>
                            <Text style={{fontWeight:'bold',fontSize:20}}>{bookData.title}</Text>
                            <Text>{bookData.author}</Text>
                            <Text>{bookData.publisher}</Text>
                            <Text>{bookData.year}</Text>
                            <Text>{bookData.genre}</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'space-around',flex:1}}>
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
                <FlatList
                    data={suggestionBooks}
                    horizontal={true}
                    renderItem={({ item }) => <Image source={item.image_url ? { uri: item.image_url } : require('../Assets/General/img_book_placeholder.png')} style={{ height: 90 }} resizeMode='contain' />}
                    keyExtractor={(item) => item.id}
                    extraData={suggestionBooks}

                />
                <View style={{ backgroundColor: 'white', }}>

                </View>

            </ScrollView>
        </ViewContainer>
    );
}

export default BookDetail