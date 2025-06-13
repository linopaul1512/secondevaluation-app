import React from 'react';
import { Text, View } from 'react-native';

export default function HijoSaludo({ nombre }: { nombre: string }) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ fontSize: 18 }}>¡Hola, {nombre}!</Text>
    </View>
  );
}