import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Intro from './screens/Intro';
import AR_Screen from './screens/AR_Screen';
import AR_Camera from './screens/AR_Camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AR from './screens/AR'
export default function App() {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (

    // <NavigationContainer>
    //   <Tab.Navigator screenOptions={{ headerShown: false }}>

    //     <Tab.Screen
    //       name='Intro'
    //       component={Intro}
    //     />
    //     <Tab.Screen
    //       name='AR_Screen'
    //       component={AR_Screen}
    //     />

    //     <Tab.Screen
    //       name='AR_Camera'
    //       component={AR_Camera}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Intro'
          component={Intro}
        />
        <Stack.Screen
          name='AR'
          component={AR}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
