import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function MoreDetails() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plus de Détails (Tabs)</Text>
      <Button title="Accueil" onPress={() => router.push('/navigation/tabs-basic')} />
      <Button title="Retour" onPress={() => router.back()} />
    </View>
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
