import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

import TaskData from './data/taskData';

import Header from './components/header';

export default function App() {

  const [tasks, setTasks] = useState(TaskData)

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({item}) => (
              <Text> {item.task} </Text>
            )}
          />
         </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 30,
  },

  list: {
    marginTop: 30,
  }
});
