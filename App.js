// External Libraries
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Components
import Converter from './src/Converter';

function App() {
  return (
    <View style={styles.container}>
      <Converter fromCcy="USD" toCcy="BRL" />
    </View>
  );
}

// Stylization
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
