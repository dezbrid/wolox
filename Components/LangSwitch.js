import React, { useContext, useState } from 'react';
import {
    Text,
    Switch,
    View
} from 'react-native';
import { styles, colors } from '../Constant/styles';
import { StoreContext } from '../store';
import { LANGUAGES_ACTION } from '../Constant/actionType';
import lang from '../Lang/translations';


function LangSwitch() {

    const storeContext = useContext(StoreContext);
    const languages = storeContext.state.languages;
    const [switchLang, setSwitchLang] = useState(languages==='es');
    const dispatch = storeContext.dispatch;
  
    function toggleSwitch() {
        if (switchLang) {
            dispatch({ type: LANGUAGES_ACTION, payload: 'en' })
        } else {
            dispatch({ type: LANGUAGES_ACTION, payload: 'es' })
        }
        setSwitchLang(previousState => !previousState);
    };

    return (
        <View style={styles.flexRow}>
            <Text style={[styles.alignSelfCenter, , styles.customFont]}> {lang.t("button.lang", { locale: languages })}</Text>
            <Switch
                trackColor={{ true: colors.blue, false: colors.gray, }}
                thumbColor={switchLang ? colors.blueDark : colors.grayBack}
                onValueChange={toggleSwitch}
                value={switchLang}
                style={styles.switch}
            />
        </View>
    );
}

export default LangSwitch