import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nombre" onChangeText={setNombre} style={styles.input} />
      <TextInput placeholder="Apellido" onChangeText={setApellido} style={styles.input} />
      <Text style={styles.resultado}>Hola, {nombre} {apellido}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  { padding: 20, 
    flex: 1,
    backgroundColor: '#fff' 
  },
  input: 
  { borderWidth: 1, 
    padding: 10, 
    marginBottom: 10, 
    backgroundColor: '#fff',
    color: '#000'
  },
  resultado: {
    fontSize: 24,
    backgroundColor: '#bde0fe',
    padding: 10,
    textAlign: 'center',
    flex: 1,
    color: '#000'
  },
});
