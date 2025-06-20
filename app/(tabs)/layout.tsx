import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(listas)" options={{ title: 'Listas' }} />
      <Tabs.Screen name="(otros)" options={{ title: 'Otras vistas' }} />
    </Tabs>
  );
}
