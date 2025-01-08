import { View, Text } from 'react-native'
import React from 'react'
import Home from './home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Job from './job';

const Tab = createBottomTabNavigator();
const index = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Job} />
    </Tab.Navigator>
  );
};

export default index