import React from 'react';
import { FlatList, Text, View } from 'react-native';

const frutas = [
  "Mango", "Lechosa (papaya)", "Guayaba", "Patilla (sandía)", "Melón", "Níspero", "Tamarindo",
  "Merey (anacardo)", "Mamón (quenepa)", "Cereza criolla", "Parchita (maracuyá)", "Guanábana",
  "Cambur (banano)", "Plátano", "Piña", "Coco", "Mora", "Jobito", "Uva de playa", "Borojo"
];

export default function Frutas() {
  return (
    <FlatList
      data={frutas}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Text style={{ fontSize: 18, margin: 5 }}>{item}</Text>}
      contentContainerStyle={{ padding: 20 }}
    />
  );
}
