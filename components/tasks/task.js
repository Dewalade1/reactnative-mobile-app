import React from 'react'
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native'

const Task = ({item}) => {
    return (
        <TouchableOpacity style={styles.item}>
        <Text>{item.task} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderColor: '#325772',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 15,
        borderStyle: 'solid',
    }
})

export default Task