import React from 'react';
import {
    TouchableHighlight,
    Text,
    ImageBackground
} from 'react-native';
import PropTypes from 'prop-types';
import { colors, styles } from "../Constant/styles";

function ButtonCustom (props) {
    const {
        onPressCustom,
        textButton,
        disabledCustom
    } = props
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
ButtonCustom.propTypes = {
    onPressCustom: PropTypes.func.isRequired,
    textButton: PropTypes.string.isRequired,
    disabledCustom: PropTypes.bool

}
ButtonCustom.defaultProps = {
    disabledCustom: false
}


export default ButtonCustom
