import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native'
import { useTaskStore } from './storeglobal.js' // Corrected import (removed braces


export default function Zustand() {
    const { tasks, addTask, removeTask, removeAll } = useTaskStore()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tasks: {tasks.length}</Text>
            <Pressable style={styles.button} onPress={() => addTask(`Task #${(Math.random() * 10).toFixed(0)}`)}>
                <Text style={styles.buttonText}>Add Task</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => removeTask(tasks[tasks.length - 1])} disabled={tasks.length === 0}>
                <Text style={styles.buttonText}>Remove Task</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => removeAll()} disabled={tasks.length === 0}>
                <Text style={styles.buttonText}>Remove all Tasks</Text>
            </Pressable>
            <FlatList
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        backgroundColor: '#FF5A5F',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    text: {
        fontSize: 20,
    },
});
