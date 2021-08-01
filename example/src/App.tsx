import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native-ada';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Ada 🤍</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.red500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.yellow50,
    fontSize: 30,
    fontWeight: '300',
  },
  line: {
    width: 150,
    height: 1,
    backgroundColor: Colors.yellow50,
    marginVertical: 10,
  },
});
