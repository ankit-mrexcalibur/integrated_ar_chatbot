import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import startup_bg from '../assets/Images/startup_bg.png'
import chatbot from '../assets/Images/Chatbot.png'

export default function HopOnScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ImageBackground source={startup_bg} resizeMode='stretch' style={styles.bg}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate('Intro')
                        }
                    >
                        <Image source={chatbot} style={styles.button1} />
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 10,
        justifyContent: 'center'
    },
    bg: {
        height: "100%",
        width: Dimensions.get('window').width
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 75,
        height: 75,
        borderRadius: 75,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 55,
        elevation: 2,
        borderColor: '#F47421',
        borderWidth: 4,
        top: Dimensions.get('window').height * 3 / 4,
        left: Dimensions.get('window').width * 2 / 3 + 10

    },
    button1: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 70,
        height: 70,
        borderRadius: 70,
        padding: 20,

    }
})