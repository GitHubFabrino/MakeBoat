import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from '../app/index';
import detail from './detail';
import singUpScreen from './singUpScreen';

type stackScreens = {
  index: undefined;
  detail: undefined;
  Screen2: undefined;
  Home: undefined;
  singUpScreen: undefined;

};

const Stack = createNativeStackNavigator<stackScreens>();

export default function RootLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" component={index} options={{ title: 'Index' }} />
      <Stack.Screen name="detail" component={detail} options={{ title: 'Detail' }} />
      <Stack.Screen name="singUpScreen" component={singUpScreen} options={{ title: 'Sign Up' }} />

    </Stack.Navigator>
  );
}
