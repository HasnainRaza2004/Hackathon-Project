import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Simulation from './Simulation';
import TestQuestion from './TestQuestion';
import Profile from './Profile';



const HomePage = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Simulation') {
            iconName = focused ? 'auto-stories' : 'auto-stories';
          }

          if (route.name === 'TestQuestion') {
            iconName = focused
              ? 'star'
              : 'star';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Simulation" component={Simulation} options={{ headerShown: true,headerTitleAlign:"center"}}/>
        <Tab.Screen name="TestQuestion" component={TestQuestion} options={{ headerShown: false }}/>
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown : false }}/>
      </Tab.Navigator>
  )
}

export default HomePage

const styles = StyleSheet.create({})