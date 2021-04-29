import React from 'react';
import {
    View
} from 'react-native';
import { styles } from '../Constant/styles'
import { Picker } from '@react-native-picker/picker';
import PropTypes from 'prop-types';

function PickerCustom(props) {
    const {
        value,
        setValue
    } = props
    return (
        <View style={styles.textInputContainer}>
            <Picker
                selectedValue={value}
                onValueChange={(itemValue, itemIndex) =>
                    setValue(itemValue)
                }
                style={{flex:1, maxHeight:40}}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    );
}
PickerCustom.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func,
}
PickerCustom.defaultProps = {

}

export default PickerCustom