import React from 'react'
import { Dimensions, SafeAreaView, StyleSheet, View, ImageBackground } from 'react-native'
import Navigation from '../components/Navigation'
import avatar_intro from '../assets/Images/avatar_intro.png'
import AR_Controls from '../components/AR_Controls'

export default function AR_Screen({ navigation, reRender = false }) {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ImageBackground source={avatar_intro} resizeMode='cover' style={styles.bg}>
                    <Navigation isIntroScreen={false} navigation={navigation} />
                    <AR_Controls navigation={navigation} />
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        position: 'relative',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg: {
        height: '100%',
        width: '100%',
    },
})
