import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'

const AddTask = ({addTask}) => {

    const [newTask, setNewTask] = useState('')

    const changeHandler = (value) => {
        setNewTask(value)
    }

    return(
        <View>
            <TextInput 
                style={styles.input}
                placeholder="Add a New Task"
                onChangeText={changeHandler}
            />

            <Button 
                title='Add Task' 
                color="#4c6a82"
                onPress={() => addTask(newTask)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#c1cbd4',
    }
})

export default AddTask