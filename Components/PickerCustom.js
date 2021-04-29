import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { styles } from '../Constant/styles'
import { Picker } from '@react-native-picker/picker';
import PropTypes from 'prop-types';

function PickerCustom(props) {
    const {
        value,
        setValue,
        placeholder,
        label
    } = props
    return (
        <View >
            <Text style={[label ? styles.opacityOn : styles.opacityOff, styles.labelTextInput]}>{placeholder}</Text>
            <View style={styles.textInputContainer}>
                <Picker
                    selectedValue={value}
                    onValueChange={(itemValue, itemIndex) =>
                        setValue(itemValue)
                    }
                    style={{ flex: 1, maxHeight: 40 }}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        </View>
    );
}
PickerCustom.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.bool,
}
PickerCustom.defaultProps = {

}

export default PickerCustom