import {View, Text, StyleSheet} from 'react-native';

export default function Profil() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profil</Text>
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
});
