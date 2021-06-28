import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hello World! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    height: 50,
    padding: 10,
    margin: 10,
  },

  myText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 40,
  },

  buttonStyle: {
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 1,
  },
});
