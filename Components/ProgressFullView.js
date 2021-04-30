import React from 'react';
import {
    ActivityIndicator,
    View
} from 'react-native';
import { styles,colors } from '../Constant/styles';


function ProgressFullView() {

    return (
        <View style={styles.progressViewContainer}>
            <ActivityIndicator size="large" color={colors.blue} />
        </View>
    );
}

export default ProgressFullView