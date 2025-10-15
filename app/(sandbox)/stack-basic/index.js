import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Accueil (Home)</Text>
            <Button title="Aller aux détails" onPress={() => navigation.navigate('Details')} />
        </View>
    );
}

function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Détails</Text>
            <Button title="Plus de Détails" onPress={() => navigation.navigate('MoreDetails')} />
            <Button title="Retour" onPress={() => navigation.goBack()} />
        </View>
    );
}

function MoreDetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Plus de Détails</Text>
            <Button title="Retour" onPress={() => navigation.goBack()} />
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Détails' }} />
            <Stack.Screen name="MoreDetails" component={MoreDetailsScreen} options={{ title: 'Plus de Détails' }} />
        </Stack.Navigator>
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
