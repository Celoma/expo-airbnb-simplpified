import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function DetailsScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Détails</Text>
            <Button title="Plus de Détails" onPress={() => router.push("/navigation/stack-basic/MoreDetails")} />
            <Button title="Retour" onPress={() => router.back()} />
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