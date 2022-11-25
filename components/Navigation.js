import React from 'react'
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import back from '../assets/Images/BackButton.png'
import ar from '../assets/Images/AR.png'

export default function Navigation({ isIntroScreen, navigation }) {
    if (isIntroScreen) {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate('Intro')
                    }
                >
                    <Image source={back} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate('AR')
                    }
                >
                    <Image source={ar} style={styles.button} />
                </TouchableOpacity>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('Intro')
                }
            >
                <Image source={back} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        zIndex: 1,
        position: 'relative',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 6,
        justifyContent: 'space-between'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 75,
        height: 75,
        borderRadius: 75,
    }
})

