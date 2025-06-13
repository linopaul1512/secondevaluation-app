import React from 'react';
import { SectionList, Text, View } from 'react-native';

const animales = [
  { title: 'Mamíferos', data: ['León', 'Elefante', 'Delfín', 'Oso polar', 'Murciélago'] },
  { title: 'Aves', data: ['Águila', 'Pingüino', 'Colibrí', 'Flamenco', 'Búho'] },
  { title: 'Reptiles', data: ['Cocodrilo', 'Iguana', 'Tortuga marina', 'Serpiente pitón', 'Camaleón'] },
  { title: 'Anfibios', data: ['Rana arbórea', 'Salamandra', 'Sapo común'] },
  { title: 'Peces', data: ['Tiburón blanco', 'Caballito de mar'] }
];

export default function Animales() {
  return (
    <SectionList
      sections={animales}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text style={{ paddingLeft: 20 }}>{item}</Text>}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>{title}</Text>
      )}
      contentContainerStyle={{ padding: 20 }}
    />
  );
}
