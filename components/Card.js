import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from '../constants/theme';
import { useRouter } from "expo-router";

export default function Card({ title, city, price, image }) {
    const router = useRouter();

    return (
        <Pressable
            onPress={() => {
                router.push({
                    pathname: "/CardId",
                    params: { title, city, price, image },
                });
            }}
            style={styles.card}
        >
            <View style={styles.row}>
                <Text style={styles.firstname}>{title}</Text>
                <Text style={styles.age}>{price} €</Text>
            </View>
            <Text style={styles.lastname}>{city}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.light.background || '#FFFFFF',
        borderRadius: 12,
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 12,
        width: '94%',
        // shadow (iOS)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // elevation (Android)
        elevation: 3,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    firstname: {
        color: '#484848',
        fontSize: 16,
        fontWeight: '600'
    },
    lastname: {
        color: '#767676',
        fontSize: 14
    },
    age: {
        color: '#FF5A5F',
        fontWeight: '700'
    }
});
