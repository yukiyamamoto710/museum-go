import React from 'react';
import { View, ScrollView, Image, TextInput, Pressable, Text, StyleSheet, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Artists from './Artists.js';
import Biography from './Biography.js';

const Stack = createStackNavigator();

const ArtistsPage = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Artist" component={Artists} />
        <Stack.Screen name="Biography" component={Biography} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}