import { Stack } from "expo-router";
import { AuthProvider } from "../../../../context/AuthProvider";

export default function HomeStackLayout() {
    return (
        <AuthProvider>
            <Stack></Stack>
        </AuthProvider>
    );
}