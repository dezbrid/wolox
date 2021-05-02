import React from 'react';
import {
    TouchableHighlight,
    Text,
    ImageBackground
} from 'react-native';
import PropTypes from 'prop-types';
import { colors, styles } from "../Constant/styles";

function ButtonCustom(props) {
    const {
        onPressCustom,
        textButton,
        disabledCustom,
        typeImagen
    } = props

    if (typeImagen) {
        return (
            <TouchableHighlight
                style={[styles.buttonContainer, disabledCustom && styles.buttonDisable]}
                underlayColor={colors.blueOverlay}
                onPress={onPressCustom}
                disabled={disabledCustom}
            >
                <ImageBackground
                    source={require('../Assets/General/img_main_button.png')}
                    style={styles.buttonImagen} resizeMode="cover">
                    <Text style={styles.buttonText}>{textButton}</Text>
                </ImageBackground >
            </TouchableHighlight>
        );
    }
    return (
        <TouchableHighlight
            style={[{
                justifyContent: 'center',
                borderRadius: 50,borderWidth:2,borderColor:colors.blue,paddingVertical:10
            }, disabledCustom && styles.buttonDisable]}
            underlayColor={colors.blueOverlay}
            onPress={onPressCustom}
            disabled={disabledCustom}
        >
            <Text style={{
                fontSize: 13,
                color: colors.blue,
                textAlign: 'center',
                fontWeight:'bold'
            }}>{textButton}</Text>

        </TouchableHighlight>
    );


}
ButtonCustom.propTypes = {
    onPressCustom: PropTypes.func.isRequired,
    textButton: PropTypes.string.isRequired,
    disabledCustom: PropTypes.bool,
    typeImagen: PropTypes.bool

}
ButtonCustom.defaultProps = {
    disabledCustom: false,
    typeImagen: true
}


export default ButtonCustom
