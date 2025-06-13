import React from 'react';
import { SectionList, Text, View, SafeAreaView, StyleSheet} from 'react-native';

const animales = [
  { title: 'Mamíferos', data: ['León', 'Elefante', 'Delfín', 'Oso polar', 'Murciélago'] },
  { title: 'Aves', data: ['Águila', 'Pingüino', 'Colibrí', 'Flamenco', 'Búho'] },
  { title: 'Reptiles', data: ['Cocodrilo', 'Iguana', 'Tortuga marina', 'Serpiente pitón', 'Camaleón'] },
  { title: 'Anfibios', data: ['Rana arbórea', 'Salamandra', 'Sapo común'] },
  { title: 'Peces', data: ['Tiburón blanco', 'Caballito de mar'] }
];


export default function Animales() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={animales}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    backgroundColor: '#eee'
  },
  item: {
    paddingLeft: 20,
    fontSize: 16,
    paddingVertical: 4
  }
});