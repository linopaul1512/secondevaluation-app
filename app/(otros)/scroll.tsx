import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';

export default function ScrollViewExample() {
  return (
    <ScrollView style={{ padding: 20 }}>
      {[...Array(10)].map((_, i) => (
        <View key={i} style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 20 }}>Texto número {i + 1}</Text>
          <Image source={{ uri: 'https://placekitten.com/300/200' }} style={{ width: '100%', height: 200 }} />
        </View>
      ))}
    </ScrollView>
  );
}
