import { Stack } from "expo-router";

export default function App() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Accueil' }} />
            <Stack.Screen name="Details/index"  options={{ title: 'Détails' }} />
            <Stack.Screen name="MoreDetails/index"  options={{ title: 'Plus de Détails' }} />
        </Stack>
    );
}
