import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity
} from 'react-native';
import {colors} from "../Constant/styles";
import PropTypes from 'prop-types';


const TextInputCustom = (props) => {
    const {
        valueInput,
        setCustom,
        handleOnChangeTextCustom,
        nameInput,
        icon,
        placeholder,
        styling,
        editable,
        keyboardType,
        hidePassword,
        errorInput,
        errorText,
        handleOnBlur,
        setCustomWithValue,
        stylingTextError,
        label,
        stylingContainer,
        iconTouch,
        iconTouchFunction,

    } = props


    const handleOnChangeText = (newValue) => {
        if (setCustom) {
            setCustom((obj) => ({
                ...obj,
                [nameInput]: newValue
            }))
        }
        if (setCustomWithValue) {
            setCustomWithValue((obj) => ({
                ...obj,
                [nameInput]: { ...obj[nameInput], value: newValue }
            }))
        }
        if (handleOnChangeTextCustom) {
            handleOnChangeTextCustom(newValue)
        }

    }
    /*const IconCustom = () => {
        if (iconTouch) {
            return (
                <TouchableOpacity onPress={iconTouchFunction}>
                    <Icon
                        name={icon}
                        size={17}
                        color={Colors.gray}
                        style={styles.inputIconContent} />
                </TouchableOpacity>
            )
        }
        return (
            <Icon
                name={icon}
                size={17}
                color={Colors.gray}
                style={styles.inputIconContent} />
        )
    }*/

    return (
        <View style={[{ flexDirection: 'column' }, stylingContainer]}>
            <Text style={[label ? { opacity: 1 } : { opacity: 0 }, styles.label]}>{placeholder}</Text>
            <View style={[errorInput && styles.styleError, styles.inputContainer, styling,]}>

                <View
                    style={styles.inputSubContainer}>
                    <TextInput
                        placeholder={placeholder}
                        style={{ flex: 1 }}
                        onChangeText={text => handleOnChangeText(text)}
                        value={valueInput}
                        editable={editable}
                        autoCorrect={false}
                        autoCompleteType="off"
                        keyboardType={keyboardType}
                        secureTextEntry={hidePassword}
                        autoCapitalize={'none'}
                        onBlur={() => handleOnBlur(nameInput, setCustomWithValue)}
                    />
                    {/*icon && <IconCustom />*/}
                </View>

            </View>
            <Text style={[errorInput ? { opacity: 1 } : { opacity: 0 }, styles.errorText, stylingTextError]}>{errorText}</Text>
        </View>
    );
}

TextInputCustom.propTypes = {
    valueInput: PropTypes.string.isRequired,
    setCustom: PropTypes.func,
    handleOnChangeTextCustom: PropTypes.func,
    nameInput: PropTypes.string,
    icon: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    styling: PropTypes.object,
    editable: PropTypes.bool,
    keyboardType: PropTypes.string,
    hidePassword: PropTypes.bool,
    errorInput: PropTypes.bool,
    errorText: PropTypes.string,
    handleOnBlur: PropTypes.func,
    setCustomWithValue: PropTypes.func,
    stylingTextError: PropTypes.object,
    stylingContainer: PropTypes.object,
    onEndEditing: PropTypes.func,
    label: PropTypes.bool,
    iconTouch: PropTypes.bool,
    iconTouchFunction: PropTypes.func
}
TextInputCustom.defaultProps = {
    setCustom: null,
    handleOnChangeTextCustom: null,
    icon: null,
    editable: true,
    keyboardType: "default",
    hidePassword: false,
    nameInput: '',
    errorInput: false,
    errorText: '',
    handleOnBlur: (x) => console.log('handleOnBlur default'),
    setCustomWithValue: null,
    label: false,
    iconTouch: false,
    iconTouchFunction: null


}
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: colors.grayLight,
        borderRadius: 50,
        paddingLeft: 10,
        paddingVertical: 10,
        flex: 1,
        elevation: -1,
        marginBottom: 10
    },
    inputSubContainer: {
        flexDirection: 'row',
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
        paddingStart: 10,
        paddingEnd: 10,
    },
    inputIconContent: {
        marginEnd: 0,
    },
    inputTextContent: {
        fontSize: 18,
        color: '#FAFAFA',
        marginStart: 2
    },
    styleError: {
        borderColor: '#ff4d4d',
        borderWidth: 0.5
    },
    errorText: {
        color: '#ff4d4d',
        paddingLeft: 20,
        fontSize: 10,
        marginTop: -10,
        marginBottom: 12

    },
    label: {
        fontSize: 8,
        marginLeft: 10,
        backgroundColor: "#664533",
        color: "white",
        paddingHorizontal: 5,
        borderRadius: 3,
        marginBottom: -6,
        alignSelf: 'flex-start',
        zIndex: 1,
        elevation: 1
    }
});


export default TextInputCustom
