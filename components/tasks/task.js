import React from 'react'
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Task = ({ item , deleteTask }) => {
    return (
        <TouchableOpacity style={styles.item}>
        <Text style={styles.name}>{item.task} </Text>
        <MaterialCommunityIcons 
            name="delete-forever" 
            size={28} 
            color="#325772" 
            onPress={() => deleteTask(item.id)}
        />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        color: '#325772',
        padding: 15,
        borderColor: '#325772',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 15,
        borderStyle: 'solid',
        flexDirection: 'row',
        fontWeight: 'bold',
        justifyContent: 'space-between'
    },
    name: {
        color: '#325772',
        fontSize: 17,
        fontWeight: 'bold',
    }
})

export default Task