import { StyleSheet, Text, View} from 'react-native';

export default function Bonjour({ title = 'Bienvenue', primary }) {
    const bg = primary ?? '#FF5A5F';
    return (
        <View style={[styles.header, { backgroundColor: bg }]}> 
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FF5A5F', // Airbnb coral
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    title: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: '700'
    }
});