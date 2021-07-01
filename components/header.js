import React from 'react'
import { StyleSheet, Text, View} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> Dewa's TaskList </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4c6a82',
        height: 90,
        paddingTop: 25,
    },
    title: {
        color: '#c1cbd4',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
})

export default Header;