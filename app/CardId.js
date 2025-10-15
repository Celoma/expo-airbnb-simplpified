import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function CardId() {
    const { title, city, price, image } = useLocalSearchParams();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.city}>{city}</Text>
            <Text style={styles.price}>{price} €</Text>
            {image && (
                <Image source={{ uri: image }} style={styles.image} />
            )}
            <Pressable
                onPress={() => {
                    router.back();
                }}
                style={styles.card}
            >
                <Text style={styles.age}>Retour</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 10,
    },
    city: {
        fontSize: 18,
        color: "#666",
    },
    price: {
        fontSize: 20,
        color: "#FF5A5F",
        marginVertical: 10,
    },
    image: {
        width: 250,
        height: 180,
        borderRadius: 12,
        marginTop: 20,
    },
});
