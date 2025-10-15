import { ScrollView, StyleSheet, View, FlatList } from "react-native";
import Profile from "./Profile";

export default function FlatListTab({ data }) {
    return (
            <View style={styles.list}>
                <FlatList
                    style={styles.FlatList}
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Profile firstname={item.firstname} name={item.name} age={item.age} />
                    }/>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        width: '100%'
    },
    list: {
        marginTop: 10,
        alignItems: 'center'
    },
    FlatList: {
        width: '100%'
    }
});