import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './Screens/HomePage';
import Signup from './Screens/Signup';
import ForgetPassword from './Screens/ForgetPassword';
import Intro from './Screens/Intro';
import HomePage from './Screens/HomePage';
import Developement from './Screens/Developement';
import Testing from './Screens/Testing';
import UIUX from './Screens/UIUX';
import Designing from './Screens/Designing';



const Appnavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} /> */}
          <Stack.Screen name="Introduction" component={Intro} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
          <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
          <Stack.Screen name="Designing" component={Designing} options={{ headerShown: false }} />
          <Stack.Screen name="Developement" component={Developement} options={{ headerShown: false }} />
          <Stack.Screen name="Testing" component={Testing} options={{ headerShown: false }} />
          <Stack.Screen name="UIUX" component={UIUX} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Appnavigation