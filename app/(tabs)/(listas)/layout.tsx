import { Stack } from 'expo-router';
export default function ListasLayout() {
  return (
    <Stack>
      <Stack.Screen name="frutas" options={{ title: 'Frutas' }} />
      <Stack.Screen name="animales" options={{ title: 'Animales' }} />
    </Stack>
  );
}

