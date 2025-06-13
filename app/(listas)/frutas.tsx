import React from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet} from 'react-native';

const frutas = [
  "Mango", "Lechosa (papaya)", "Guayaba", "Patilla (sandía)", "Melón", "Níspero", "Tamarindo",
  "Merey (anacardo)", "Mamón (quenepa)", "Cereza criolla", "Parchita (maracuyá)", "Guanábana",
  "Cambur (banano)", "Plátano", "Piña", "Coco", "Mora", "Jobito", "Uva de playa", "Borojo"
];

export default function Frutas() {
   return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Frutas Tropicales</Text>
      <FlatList
        data={frutas}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#f9f9f9'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 6
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
    paddingLeft: 10
  }
});