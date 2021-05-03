import React, { useContext } from 'react';
import {
    View, Text
} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../Constant/styles';
import { StoreContext } from '../store';
import ButtonCustom from './ButtonCustom';
import lang from '../Lang/translations';
import { DIALOG_ACTION } from '../Constant/actionType';



function Dialog(props) {
    const { children } = props
    const storeContext = useContext(StoreContext);
    const dispatch = storeContext.dispatch;
    const languages = storeContext.state.languages;
    const dialog = storeContext.state.dialog;

    function handleOnCloseDialog() {
        dispatch({
            type: DIALOG_ACTION, payload: {
                title: '',
                message: '',
                open: false
            }
        })
    }

    return (
        <View style={styles.progressViewContainer}>
            <View style={styles.dialogContainer}>
                <Text style={[styles.textTitle,styles.flexOne ,styles.textColorBlack]}>{dialog.title}</Text>
                <Text style={[styles.customFont,styles.flexOne]}>{dialog.message}</Text>
                {children}
                <ButtonCustom
                    typeImagen={false}
                    onPressCustom={handleOnCloseDialog}
                    textButton={lang.t("button.close", { locale: languages })}
                />
            </View>
        </View>
    );
}
Dialog.propTypes = {
    children: PropTypes.node
}
export default Dialog