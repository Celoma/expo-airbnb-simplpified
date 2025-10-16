// Sandbox page to test things
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Navigation() {
    const router = useRouter();

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
                    router.push('/(sandbox)/navigation/drawer-basic');
                }}
            >
                <Text style={styles.buttonText}>Go to Drawer Basic</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={() => {
                    router.push('/(sandbox)/navigation/tabs-basic');
                }}
            >
                <Text style={styles.buttonText}>Go to Tabs Basic</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={() => {
                    router.push('/(sandbox)/navigation/stack-basic');
                }}
            >
                <Text style={styles.buttonText}>Go to Stack Basic</Text>
            </Pressable>
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