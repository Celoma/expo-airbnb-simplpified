// Sandbox page to test things
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTaskStore } from './zustand/storeglobal';

export default function Context() {
    const router = useRouter();
    const tasks = useTaskStore((state) => state.tasks);
    return (
        <View style={styles.container}>
            <Text>Sandbox Page</Text>

            <Pressable
                style={styles.button}
                onPress={() => {
                    router.back();
                }}
            >
                <Text style={styles.buttonText}>Retour</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={() => {
                    router.push('/(sandbox)/etat/UseEffect');
                }}
            >
                <Text style={styles.buttonText}>Go to Use Effect</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={() => {
                    router.push('/(sandbox)/etat/UseState');
                }}
            >
                <Text style={styles.buttonText}>Go to State of america</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={() => {
                    router.push('/(sandbox)/etat/FDPPPP');
                }}
            >
                <Text style={styles.buttonText}>Go to Use FDPPPP</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => {
                    router.push('/(sandbox)/etat/zustand');
                }}
            >
                <Text style={styles.buttonText}>Go to zustand</Text>
            </Pressable>
            <Text style={styles.text}>Tasks in store: {tasks.length}</Text>
            <Text style={styles.text}>{tasks[tasks.length - 1]}</Text>
        </View>
    );
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
});