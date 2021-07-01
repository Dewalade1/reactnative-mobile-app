import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

import TaskData from './data/taskData';

import Task from './components/tasks/task';
import Header from './components/header';
import AddTask from './components/tasks/addTask'

export default function App() {

  const [tasks, setTasks] = useState(TaskData)

  const addTask = (text) => {
    setTasks(prevTasks => {
      return [{ id:uuidv4(), task: text, done: false }, ...prevTasks]
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTask addTask={addTask} />
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({item}) => (
              <Task item = {item}/>
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
