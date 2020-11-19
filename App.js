
import React from 'react';
import Navigator from './Router'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
      <Navigator/>
    // </View>
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