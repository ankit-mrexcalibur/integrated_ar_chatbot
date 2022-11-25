import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Intro from './screens/Intro';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AR from './screens/AR'
export default function App() {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  console.disableYellowBox = true;
  return (
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
