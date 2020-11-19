
import React from 'react';
import Navigator from './src/Router'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});