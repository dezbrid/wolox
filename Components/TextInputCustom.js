import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from "../Constant/styles";
import PropTypes from 'prop-types';

function TextInputCustom(props) {
    const {
        valueInput,
        setCustom,
        nameInput,
        placeholder,
        errorInput,
        errorText,
        setCustomWithValue,
        label,

    } = props


    function handleOnChangeText(newValue) {
        if (setCustom) {
            setCustom((obj) => ({
                ...obj,
                [nameInput]: newValue
            }))
        }
        if (setCustomWithValue) {
            setCustomWithValue((obj) => ({
                ...obj,
                [nameInput]: {
                    ...obj[nameInput],
                    value: newValue,
                    error: !obj[nameInput].regex.test(newValue)
                }
            }))
        }

    };
    function handleOnBlur() {
        if (onBlurCustom) {
            onBlurCustom(nameInput)
        }
    };


    return (
        <View >
            <Text style={[label ? styles.opacityOn : styles.opacityOff, styles.labelTextInput]}>{placeholder}</Text>
            <View style={[errorInput && styles.errorTextInputContainer, styles.textInputContainer]}>
                <TextInput
                    placeholder={placeholder}
                    onChangeText={text => handleOnChangeText(text)}
                    value={valueInput}
                    style={[styles.flexOne, styles.customFont]}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                />

            </View>
            <Text style={[errorInput ? styles.opacityOn : styles.opacityOff, styles.errorTextInputText,]}>{errorText}</Text>
        </View>
    );
}

TextInputCustom.propTypes = {
    valueInput: PropTypes.string.isRequired,
    setCustom: PropTypes.func,
    setCustomWithValue: PropTypes.func,
    nameInput: PropTypes.string,
    icon: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    errorInput: PropTypes.bool,
    errorText: PropTypes.string,
    label: PropTypes.bool,
    iconTouch: PropTypes.bool,
    iconTouchFunction: PropTypes.func
}
TextInputCustom.defaultProps = {
    setCustom: null,
    icon: null,
    nameInput: '',
    errorInput: false,
    errorText: '',
    setCustomWithValue: null,
    label: false,
    iconTouch: false,
    iconTouchFunction: null
}
export default TextInputCustom
