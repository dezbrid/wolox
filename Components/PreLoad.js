import React from 'react';
import {
    SafeAreaView,
    ImageBackground,
    Image,
    StatusBar
} from 'react-native';
import { styles } from '../Constant/styles';


function PreLoad() {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground
                source={require('../Assets/General/bc_inicio.png')}
                style={styles.imageBackground}>
                <Image
                    source={require('../Assets/General/wbooks_logo.png')}
                    style={styles.LogoCenter}
                   />
            </ImageBackground>
        </SafeAreaView>
    );
}

export default PreLoad