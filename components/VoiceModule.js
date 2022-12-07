import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight,
  Dimensions,
  Pressable,
} from 'react-native';
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';
import {Card, Button, Icon} from 'react-native-elements';

export default function VoiceModule() {
  const [result, setResult] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isPressed, setPressed] = useState(false);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

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
      Voice.start('en-Us');
    } catch (error) {
      console.log('error raised', error);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.log('error raised', error);
    }
  };
  const handleVoice = async () => {
    try {
      await Tts.speak(result, {
        iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
        rate: 0.51,
      });
    } catch (error) {
      console.log('text to speech failed', error);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.textInputStyle}>
          <TextInput
            class="my"
            value={result}
            // placeholder="your text"
            style={{flex: 1}}
            multiline={true}
            onChangeText={text => setResult(text)}
            fontSize={22}
            color={'black'}
          />
          {isLoading ? (
            <ActivityIndicator size="large" color="orange" />
          ) : (
            <TouchableOpacity></TouchableOpacity>
          )}
        </View>
        <View style={{alignItems: 'center'}}>
          <Pressable
            onLongPress={startRecording}
            onPressOut={stopRecording}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'grey' : 'white',
                transform: pressed ? [{scale: 1.0}] : [{scale: 0.9}],
              },
              styles.roundButton,
            ]}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
              }}
              style={{width: 50, height: 50}}
            />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  headingText: {
    alignSelf: 'center',
    marginVertical: 26,
    fontWeight: 'bold',
    fontSize: 26,
  },
  textInputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 140,
    width: (Dimensions.get('window').width ) - 50,
    borderRadius: 20,
    paddingHorizontal: 16,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 10,
    elevation: 2,
    shadowOpacity: 0.7,
    marginTop: Dimensions.get('window').height / 3,
    opacity: 0.7,
  },
  my: {
    opacity: 1,
  },

  roundButton: {
    marginVertical: 40,
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'darkgrey',
  },
});
