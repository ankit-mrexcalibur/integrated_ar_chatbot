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
} from '@viro-community/react-viro';

const InitialScene = () => {

  ViroMaterials.createMaterials({
    avatarFace: {
      diffuseTexture: require("../assets/maleAvatar/texture.png")
    },
    avatarTexture2: {
      diffuseTexture: require("../assets/maleAvatar/texture_2.png")
    },
    avatarTexture3: {
      diffuseTexture: require("../assets/maleAvatar/texture_3.png")
    },
    earth: {
      shininess: 2.0,
      lightingModel: "Lambert",
      diffuseTexture: require('../assets/maleAvatar/skin.jpg'),
    }
  })

  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateY: '+=90'
      }
    }
  })

  return (
    <ViroARScene>
      <ViroAmbientLight color={"#ffffff"} />
      <ViroARPlaneSelector>
        <Viro3DObject
          source={require("../assets/maleAvatar/avatar.obj")}
          resources={[require("../assets/maleAvatar/material.mtl"), require("../assets/maleAvatar/texture.png"), require("../assets/maleAvatar/texture_2.png"), require("../assets/maleAvatar/texture_3.png")]}
          position={[0, -1, 0]}
          // scale={[0.05, 0.05, 0.05]}
          type="OBJ"
          materials={["earth"]}
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
