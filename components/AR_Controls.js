import React, { Component } from 'react'
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import mic from '../assets/Images/Microphone.png'
import speaker from '../assets/Images/speaker.png'
import camera from '../assets/Images/camera.png'

export default function AR_Controls({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image source={mic} />
            </TouchableOpacity>
            <View style={styles.mic_ar_container}>
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate('AR_Camera')
                    }
                >
                    <Image source={camera} />
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.button}>
                    <Image source={speaker} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        position: 'relative',
        left: 0,
        top: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mic_ar_container: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: "#F47421",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 75,
        height: 75,
        borderRadius: 75
    }
})
