import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTaskStore } from '../../../../store/storeglobal.js';
import { useState } from 'react';
import { TextInput } from 'react-native';

export default function Zustand() {

    const [text, onChangeText] = useState('');

    const handleAddTask = () => {
        addTask(`Task # ${text}`)
        onChangeText('');
    }

    const { tasks, addTask, removeTask, removeAll } = useTaskStore()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tasks: {tasks.length}</Text>
            <Pressable style={styles.button} onPress={() => handleAddTask()} disabled={text === ''}>
                <Text style={styles.buttonText}>Add Task</Text>
            </Pressable>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Task name"
            />
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
    },
});
