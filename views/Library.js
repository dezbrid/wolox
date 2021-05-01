import React, { useContext } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import lang from '../Lang/translations';
import { StoreContext } from '../store';
import { LANGUAGES_ACTION } from '../Constant/actionType';
import { ViewContainer } from '../Components';


function Library() {
    const storeContext = useContext(StoreContext)
    const languages = storeContext.state.languages

    return (
        <ViewContainer>
            <Text> Library</Text>
            <Text> {`${lang.t("errorInput.invalid", { textInput: lang.t("textInput.email", { locale: languages }), locale: languages })}${lang.t("errorInput.onlyEmail", { locale: languages })}`}</Text>
            <Button
                onPress={() => {
                    storeContext.dispatch({ type: LANGUAGES_ACTION, payload: 'es' })
                }}
                title="changes" />
        </ViewContainer>
    );
}

export default Library