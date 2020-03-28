import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CursosListScreen from './screens/CursosListScreen';

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cursos" component={CursosListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
