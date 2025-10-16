import { FlatList, StyleSheet, View } from "react-native";
import Card from "./Card";

export default function Cards({ data }) {
    return (
            <View style={styles.list}>
                <FlatList
                    style={styles.FlatList}
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => 
                        <Card title={item.title} city={item.city} price={item.price} image={item.image}/>
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
        marginBottom: 20,
        marginTop: 10,
        alignItems: 'center',
    },
    FlatList: {
        width: '100%',
        marginBottom: 330,
        paddingBottom: 20
    }
});