import React, { useState } from 'react';
import {
    View,
    Text,
    Platform,
    TouchableNativeFeedback,
    Modal
} from 'react-native';
import { styles } from '../Constant/styles';
import { Picker } from '@react-native-picker/picker';
import PropTypes from 'prop-types';

function PickerCustom(props) {
    const {
        value,
        setValue,
        placeholder,
        label,
        items,
    } = props
    const [openModal, setOpenModal] = useState(false);
    function handleModalOpen() {
        setOpenModal(true)
    };
    function handleModalClose() {
        setOpenModal(false)
    };
    if (Platform.OS == 'ios') {
        return (
            <View >
                <Text style={[label ? styles.opacityOn : styles.opacityOff, styles.labelTextInput]}>{placeholder}</Text>
                <TouchableNativeFeedback onPress={handleModalOpen}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.alignSelfCenter}>{value}</Text>
                    </View>
                </TouchableNativeFeedback>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={openModal}
                >
                    <View style={styles.modalContainer}>
                        <TouchableNativeFeedback onPress={handleModalClose}>
                            <View style={[styles.flexOne, styles.alignSelfStretch]} />
                        </TouchableNativeFeedback>
                        <View style={[styles.flexOne,styles.flexRow]}>
                            <TouchableNativeFeedback onPress={handleModalClose}>
                                <View style={[styles.flexOne, styles.alignSelfStretch]} />
                            </TouchableNativeFeedback>
                            <View style={styles.modalView}>
                                <Picker
                                    selectedValue={value}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setValue(itemValue)
                                    }
                                    style={{ height: 40 }}>
                                    {
                                        items.map((item, index) => {
                                            return (
                                                <Picker.Item label={item.label} value={item.value} key={index} />
                                            )
                                        })
                                    }

                                </Picker>
                            </View>
                            <TouchableNativeFeedback onPress={handleModalClose}>
                                <View style={[styles.flexOne, styles.alignSelfStretch]} />
                            </TouchableNativeFeedback>
                        </View>
                        <TouchableNativeFeedback onPress={handleModalClose}>
                            <View style={[styles.flexOne, styles.alignSelfStretch]} />
                        </TouchableNativeFeedback>

                    </View>

                </Modal>
            </View>
        )
    }
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
                    {
                        items.map((item, index) => {
                            return (
                                <Picker.Item label={item.label} value={item.value} key={index} />
                            )
                        })
                    }

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
    items: PropTypes.array.isRequired
}
PickerCustom.defaultProps = {

}

export default PickerCustom