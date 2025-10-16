import { useState, useEffect} from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function UseState() {
    const [count, setCount] = useState(0);
    const router = useRouter();

    function handleCountMinus(){
        console.log(count);
        setCount(count - 1);
        console.log(count);
    }

    function handleCountPlus(){
        console.log(count);
        setCount(count => count + 1);
        console.log(count);

    }

    useEffect(() => {
        console.log("Le composant a été monté.");
    }, []);
    
    useEffect(() => {
        console.log("Le composant a été monté ou mis à jour. : ", count);
    }, [count]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Compteur : {count}</Text>
            <Pressable style={styles.button}
                onPress={() => handleCountPlus()}>
                <Text style={styles.buttonText}>Incrémenter</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={() => handleCountMinus()}>
                <Text style={styles.buttonText}>Décrémenter</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={() => {
                    router.back();}}>
                <Text style={styles.buttonText}>Retour</Text>
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