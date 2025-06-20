import { View, Button } from 'react-native';
import { Link } from 'expo-router';

export default function OtrosIndex() {
  return (
    <View style={{flex:1,padding:20}}>
      <Link asChild href="../(otros)/saludo">
        <Button title="Saludo" />
      </Link>
      <Link asChild href="../(otros)/formulario">
        <Button title="Formulario" /></Link>
      <Link asChild href="../(otros)/scroll">
        <Button title="Scroll" />
      </Link>
    </View>
  );
}


