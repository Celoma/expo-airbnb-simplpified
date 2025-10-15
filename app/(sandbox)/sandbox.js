// Sanbox page to test things
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function sandbox() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text>Sandbox Page</Text>
            <Pressable style={styles.button}
                onPress={() => {
                    router.back();
                }}>
                <Text style={styles.buttonText}>Test Button</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={() => {
                    router.push({ pathname: "/(sandbox)/drawer-basic/" });
                }}>
                <Text style={styles.buttonText}>Go to Drawer Basic</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={() => {
                    router.push({ pathname: "/(sandbox)/stack-basic/" });
                }}>
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