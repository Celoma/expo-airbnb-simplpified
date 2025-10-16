
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { StatusBar as RNStatusBar, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    const colorScheme = useColorScheme();
    const AIRBNB = { primary: '#FF5A5F', background: '#F7F7F7', muted: '#6B6B6B' };
    const backgroundColor = colorScheme === 'dark' ? '#2B2B2B' : AIRBNB.background;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor }} edges={["top","bottom"]}>
            <RNStatusBar
                barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundColor}
                translucent={false}
            />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: AIRBNB.primary,
                    tabBarInactiveTintColor: AIRBNB.muted,
                    tabBarStyle: {
                        backgroundColor,
                        position: 'absolute',
                        height: 64,
                        marginHorizontal: 16,
                        borderRadius: 16,
                        bottom: 12,
                        left: 12,
                        right: 12,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 6 },
                        shadowOpacity: 0.08,
                        shadowRadius: 10,
                        elevation: 6,
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Accueil',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="home" size={size} color={color} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="Details"
                    options={{
                        title: 'Détails',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="info" size={size} color={color} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="MoreDetails"
                    options={{
                        title: 'Plus',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="more-horiz" size={size} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </SafeAreaView>
    );
}