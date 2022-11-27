import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroAmbientLight,
  ViroARPlaneSelector,
  ViroSpotLight,
} from '@viro-community/react-viro';

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
    <ViroARSceneNavigator
      initialScene={{
        scene: InitialScene
      }}
      viroAppProps={{ "object": object }}
      style={{ flex: 1 }}
    />
  );
};

var styles = StyleSheet.create({

})
