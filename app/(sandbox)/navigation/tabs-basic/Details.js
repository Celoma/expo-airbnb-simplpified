import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Details() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails (Tabs)</Text>
      <Button title="Plus de détails" onPress={() => router.push('/navigation/tabs-basic/MoreDetails')} />
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
