import React, { useContext } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { StoreContext } from '../store';
import { LOGOUT_ACTION } from '../Constant/actionType';
import { ViewContainer, ButtonCustom, LangSwitch } from '../Components';
import { styles } from '../Constant/styles';
import lang from '../Lang/translations';

function Settings() {
    const storeContext = useContext(StoreContext);
    const languages = storeContext.state.languages;

    return (
        <ViewContainer styleView={styles.viewContainer}>

            <LangSwitch />

            <ButtonCustom
                onPressCustom={() => {
                    storeContext.dispatch({ type: LOGOUT_ACTION })
                }}
                textButton={lang.t("button.logout", { locale: languages })}

            />
        </ViewContainer>
    );
}

export default Settings