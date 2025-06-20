import { View, Button } from 'react-native';
import { Link } from 'expo-router';

export default function ListasIndex() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Link asChild href="../(listas)/frutas">
        <Button title="Ver Frutas" />
      </Link>

      <Link asChild href="../(listas)/animales">
        <Button title="Ver Animales" />
      </Link>
    </View>
  );
}
