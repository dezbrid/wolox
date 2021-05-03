import React, { useContext, useEffect, useRef } from 'react';
import {
    Text,
    TouchableNativeFeedback,
    Animated
} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../Constant/styles';
import { StoreContext } from '../store';
import { ALERT_INFO_ACTION } from '../Constant/actionType';


function AlertInfo(props) {
    const { textInfo, type } = props
    const fadeAnim = useRef(new Animated.Value(0)).current
    const storeContext = useContext(StoreContext);
    const dispatch = storeContext.dispatch;
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }
        ).start();
    }, [fadeAnim])
    useEffect(() => {
        setTimeout(() => {
            handleClose()
        }, 5000);

    }, [])
    function handleClose() {
        dispatch({ type: ALERT_INFO_ACTION, payload: { open: false, text: '', type: 'success' } })
    }

    return (
        <Animated.View style={[styles.alertInfoContainer, styles[type],{opacity: fadeAnim}]}>
            <TouchableNativeFeedback onPress={handleClose}>
                <Text style={styles.textColorWhite}> {textInfo}</Text>
            </TouchableNativeFeedback>
        </Animated.View>
    );
}
AlertInfo.propTypes = {
    textInfo: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}
AlertInfo.defaultProps = {

}
export default AlertInfo