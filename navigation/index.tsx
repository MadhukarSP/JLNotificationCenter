import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import TabNavigator from './tabs/TabNavigator';

const RootStack = createStackNavigator<RootStackParamList>();

// This container defines the navigation within app
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Root" component={TabNavigator} />
        <RootStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
