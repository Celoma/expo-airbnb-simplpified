import {View, Text, Pressable, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../../../context/AuthProvider';
import { use, useEffect } from 'react';

export default function FDPPPP() {
    const router = useRouter();
    const { user, setUser } = useAuth();

    useEffect(() => {
        if (!user) {
            router.replace('/(sandbox)/etat/FDPPPP/login');
        }
    }, [user]);

    return (
        <View style={styles.container}>
            <Text>Page avec Fichier, Dossier, Provider, Pattern, Playground</Text>
            <Pressable style={styles.button}
                onPress={() => {
                    setUser(false);
                }}>
                <Text style={styles.buttonText}>Se déconnecter</Text>
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