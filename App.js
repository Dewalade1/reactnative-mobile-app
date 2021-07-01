import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, FlatList, TouchableOpacity, TouchableWithoutFeedback, Alert, Keyboard } from 'react-native';

import TaskData from './data/taskData';

import Task from './components/tasks/task';
import Header from './components/header';
import AddTask from './components/tasks/addTask'

export default function App() {

  const [tasks, setTasks] = useState(TaskData)

  const addTask = (text) => {
    if (!text) {
      Alert.alert('No Task to Add', 'Please enter your new task', [{text: 'Alright'}])
    } else {
      setTasks(prevTasks => {
        return [{ id:uuidv4(), task: text, done: false }, ...prevTasks]
      })
    }
  }

  const deleteTask = id => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== id)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
      <SafeAreaView style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTask addTask={addTask} />
          <View style={styles.list}>
            <FlatList
              data={tasks}
              renderItem={({item}) => (
                <Task 
                  item={item}
                  deleteTask={deleteTask}/>
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
