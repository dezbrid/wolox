import React, { useContext, } from 'react';
import {
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
    View
} from 'react-native';
import PropTypes from 'prop-types';
import { styles, colors } from '../Constant/styles';
import { StoreContext } from '../store';
import ProgressFullView from './ProgressFullView';
import AlertInfo from './AlertInfo';


function ViewContainer(props) {
    const { enableKeyboardAvoidingView, children, backgroundColorView,styleView } = props
    const storeContext = useContext(StoreContext);
    const is_Loading = storeContext.state.is_loading;
    const alert_Info = storeContext.state.alert_Info;
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.blue} />
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'position' : 'height'}
                style={styles.flexOne}
                contentContainerStyle={styles.flexOne}
                enabled={enableKeyboardAvoidingView}
                keyboardVerticalOffset={Platform.OS == 'ios' ? -50 : 60}>
                {is_Loading && <ProgressFullView />}
                {alert_Info.open && <AlertInfo textInfo={alert_Info.text} type={alert_Info.type} />}
                <View style={[styles.flexOne, styles[backgroundColorView],styleView]}>
                    {children}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
ViewContainer.propTypes = {
    enableKeyboardAvoidingView: PropTypes.bool,
    children: PropTypes.node.isRequired,
    backgroundColorView: PropTypes.string,
    styleView:PropTypes.object
}
ViewContainer.defaultProps = {
    enableKeyboardAvoidingView: false,
    backgroundColorView: 'backgroundColorBlueLight',
    styleView:{}
}
export default ViewContainer