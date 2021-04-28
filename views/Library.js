import React, { useContext } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import lang from '../Lang/translations';
import { StoreContext } from '../store';
import { LANGUAGES_ACTION } from '../Constant/actionType';


function Library() {
    const storeContext = useContext(StoreContext)
    const languages = storeContext.state.languages

    return (
        <View>
            <Text> Library</Text>
            <Text> {lang.t("universal.close", { locale: languages })}</Text>
            <Button
                onPress={() => {
                    storeContext.dispatch({ type: LANGUAGES_ACTION, payload: 'es' })
                }}
                title="changes" />
        </View>
    );
}

export default Library