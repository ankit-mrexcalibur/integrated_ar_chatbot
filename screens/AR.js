import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AR_Screen from './AR_Screen'
import AR_Camera from './AR_Camera';


export default function AR() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name='AR_Screen'
                component={AR_Screen}
            />

            <Tab.Screen
                name='AR_Camera'
                component={AR_Camera}
            />
        </Tab.Navigator>
    )
}
