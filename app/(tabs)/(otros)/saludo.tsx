import React from 'react';
import { View, Text } from 'react-native';
import HijoSaludo from '@/components/hijopsaludo';

export default function Saludo() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20,  color: '#000'}}>Saludos y abrazos:</Text>
      <HijoSaludo nombre="Abner" />
      <HijoSaludo nombre="Siberia" />
      <HijoSaludo nombre="David" />
    </View>
  );
}
