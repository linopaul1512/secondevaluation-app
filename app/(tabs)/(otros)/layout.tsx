import { Stack } from 'expo-router';

export default function OtrosLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Otras vistas' }} />
      <Stack.Screen name="saludo" options={{ title: 'Saludo' }} />
      <Stack.Screen name="formulario" options={{ title: 'Formulario' }} />
      <Stack.Screen name="scroll" options={{ title: 'Scroll' }} />
    </Stack>
  );
}
