import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen, SCREENS } from '../views/screens';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.HOME_SCREEN}>
      <Stack.Screen
        name={SCREENS.HOME_SCREEN}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
