
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { StyleSheet, useColorScheme, StatusBar as RNStatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    const colorScheme = useColorScheme();
    // Airbnb palette: primary red, light background, muted text
    const AIRBNB = {
        primary: '#FF5A5F',
        background: '#F7F7F7',
        muted: '#6B6B6B',
        white: '#FFFFFF',
    };
    const backgroundColor = colorScheme === 'dark' ? '#FF5A5F' : AIRBNB.background;

    return (
        <SafeAreaView style={[styles.safe, { backgroundColor }]} edges={["top", "bottom"]}> 
            <RNStatusBar
                barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundColor}
                translucent={false}
            />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: AIRBNB.white,
                    tabBarInactiveTintColor: AIRBNB.muted,
                    tabBarStyle: { backgroundColor },
                }}
            >
                <Tabs.Screen
                    title= 'Explorer'
                    name="(Explorer)"
                    options={{
                        title: 'Explorer',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="search" size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Profil"
                    options={{
                        title: 'Profil',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="person" size={size} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
});

