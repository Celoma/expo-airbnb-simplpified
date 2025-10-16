import { Stack } from "expo-router";
import { AuthProvider } from "./AuthProvider";

export default function HomeStackLayout() {
    return (
        <AuthProvider>
            <Stack></Stack>
        </AuthProvider>
    );
}