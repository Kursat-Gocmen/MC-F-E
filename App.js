import React, { useState } from 'react';
import { StatusBar, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Login from './Screens/Login';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/backgroundhome.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Login />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
