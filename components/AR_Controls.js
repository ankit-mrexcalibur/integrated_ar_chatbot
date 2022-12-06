import React, { Component, useState, useEffect } from 'react'
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import mic from '../assets/Images/Microphone.png'
import speaker from '../assets/Images/speaker.png'
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';




export default function AR_Controls({ navigation }) {
    const [result, setResult] = useState('');
    const [isLoading, setLoading] = useState(false);
    const onSpeechStartHandler = e => {
        console.log('start handler==>>>', e);
    };
    const onSpeechEndHandler = e => {
        setLoading(false);
        console.log('stop handler', e);
    };

    const onSpeechResultsHandler = e => {
        let text = e.value[0];
        setResult(text);
        console.log('speech result handler', e);
    };

    const startRecording = async () => {
        setLoading(true);
        try {
            await Voice.start('en-Us');
        } catch (error) {
            console.log('error raised', error);
        }
    };

    const stopRecording = async () => {
        try {
            console.log("here present")
            await Voice.stop();
        } catch (error) {
            console.log('error raised', error);
        }
    };

    const handleVoice = async () => {
        try {
            await Tts.speak(result, {
                iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
                rate: 0.5,
            });
        } catch (error) {
            console.log('text to speech failed', error);
        }
    };

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStartHandler;
        Voice.onSpeechEnd = onSpeechEndHandler;
        Voice.onSpeechResults = onSpeechResultsHandler;

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    return (
        <View style={styles.container}>
            {/* <View style={styles.mic_ar_container}>
                <TouchableOpacity style={styles.button}>
                    <Image source={mic} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={speaker} />
                </TouchableOpacity>
            </View> */}
            <View style={styles.textInputStyle}>
                <TextInput
                    value={result}
                    placeholder="your text"
                    style={{ flex: 1 }}
                    onChangeText={text => setResult(text)}
                />
                {isLoading ? (
                    <ActivityIndicator size="large" color="red" />
                ) : (
                    <TouchableOpacity onPress={startRecording}>
                        <Image
                            source={{
                                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
                            }}
                            style={{ width: 25, height: 25 }}
                        />
                    </TouchableOpacity>
                )}
            </View>

            <TouchableOpacity
                style={{
                    alignSelf: 'center',
                    marginTop: 24,
                    backgroundColor: 'red',
                    padding: 8,
                    borderRadius: 4,
                }}
                onPress={stopRecording}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
                    Stop
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        position: 'relative',
        left: 0,
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
