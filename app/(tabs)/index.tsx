import { Link } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>

      <Link href="/(tabs)/(listas)" asChild>
        <Button title="Ir a Listas" />
      </Link>

      <Link href="/(tabs)/(otros)" asChild>
        <Button title="Ir a Otras Vistas" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});
