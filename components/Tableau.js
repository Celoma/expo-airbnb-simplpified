import { ScrollView, StyleSheet, View } from "react-native";
import Profile from "./Profile";

export default function Tableau({ data }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.list}>
                {data.map((user) => (
                    <Profile key={user.id} firstname={user.firstname} name={user.name} age={user.age} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7', // light neutral background
        width: '100%'
    },
    list: {
        alignItems: 'center'
    }
});