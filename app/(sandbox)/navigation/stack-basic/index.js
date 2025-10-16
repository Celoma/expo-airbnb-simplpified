import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Accueil (Home)</Text>
            <Button title="Aller aux détails" onPress={() => router.push('/navigation/stack-basic/Details')}/>
            <Button title="Retour" onPress={() => router.back()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 20,
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#FF5A5F',
        padding: 10,
        borderRadius: 5,        margin: 10,
    },  
    buttonText: {
        color: '#753f3fff',
        fontSize: 16,
    },
});
