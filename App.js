import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text> Our Todo List </Text>
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

  todo: {
    margin: 10,
    color: 'white',
    fontSize: 10,
    padding: 10,
  }
});
