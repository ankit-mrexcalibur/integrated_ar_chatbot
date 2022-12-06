import React, { Component, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroARPlaneSelector,
} from '@viro-community/react-viro';
import VoiceModule from '../components/VoiceModule';

const InitialScene = () => {

  ViroMaterials.createMaterials({
    avatar: {
      diffuseTexture: require("../assets/bob/rp_eric_rigged_001_dif.jpg")
    },
  })

  return (
    <ViroARScene>
      <ViroAmbientLight color={"#ffffff"} />
      <ViroARPlaneSelector>
        <Viro3DObject
          source={require("../assets/bob/meet-bob.obj")}
          resources={[
            require('../assets/bob/meet-bob.mtl'),
          ]}
          position={[5, -6, -10]}
          scale={[7, 7, 6]}
          type="OBJ"
          rotation={[0, -22, 0]}
          materials={["avatar"]}
          dragType="FixedDistance" onDrag={() => { }}
          transformBehaviors={["billboard"]}
        />
      </ViroARPlaneSelector>
    </ViroARScene>
  )
}

export default function AR_Camera() {
  const [object, setObject] = useState('avatar');
  return (
    <View style={{ flex: 1 }}>
      <ViroARSceneNavigator
        initialScene={{
          scene: InitialScene
        }}
        viroAppProps={{ "object": object }}
        style={{ flex: 1 }}
      />
      <View style={styles.crosshair}>
        <VoiceModule isCamera={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  crosshair: {
    position: 'absolute',
    top: (Dimensions.get('window').height / 2),
    width: Dimensions.get('window').width * 5 / 6,
    height: (Dimensions.get('window').height / 2),
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    alignSelf: 'center'
  },
})

