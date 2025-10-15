import {StyleSheet, View } from 'react-native';
import Bonjour from '../components/Bonjour';
import Cards from '../components/Cards';
import data from '../mock/data';
import { Link } from 'expo-router';
import sandbox from './(sandbox)/sandbox';

export default function index() {

    return (
        <View style={styles.ROUGE}>
            <View style={styles.screen}>
                <Bonjour  title="ExpoRBNB" />
                <Link style={styles.sandbox} href="/(sandbox)/sandbox">Sandbox</Link>
                <Cards data={data} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#F7F7F7',
    },
    ROUGE: {
        marginTop: -50,
        paddingTop: 35,
        flex : 1,
        backgroundColor: '#FF5A5F' 
    },
    sandbox: {
        marginBottom: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 24,
        width: '100%',
        fontWeight: '700'
    }
});