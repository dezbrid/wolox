import React, { useContext, useEffect } from 'react';
import {
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../Constant/styles';
import { StoreContext } from '../store';
import { ALERT_INFO_ACTION } from '../Constant/actionType';


function AlertInfo(props) {
    const { textInfo, type } = props
    const storeContext = useContext(StoreContext);
    const dispatch = storeContext.dispatch;
    useEffect(() => {
        setTimeout(() => {
            handleClose()
        }, 1000);

    }, [])
    function handleClose() {
        dispatch({ type: ALERT_INFO_ACTION, payload: { open: false, text: '', type: 'success' } })
    }

    return (
        <View style={[styles.alertInfoContainer, styles[type]]}>
            <TouchableNativeFeedback onPress={handleClose}>
                <Text style={styles.textColorWhite}> {textInfo}</Text>
            </TouchableNativeFeedback>
        </View>
    );
}
AlertInfo.propTypes = {
    textInfo: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}
AlertInfo.defaultProps = {

}
export default AlertInfo