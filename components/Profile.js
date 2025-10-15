import { StyleSheet, Text, View } from "react-native";
import { Colors } from '../constants/theme';

// Profile card: expects props { firstname, name, age } or { name, age }
export default function Profile({ firstname, name, age }) {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Text style={styles.firstname}>{firstname ?? name}</Text>
                <Text style={styles.age}>{age} ans</Text>
            </View>
            <Text style={styles.lastname}>{name}</Text>
        </View>
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
    