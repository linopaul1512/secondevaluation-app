import { registerRootComponent } from 'expo';

import Animales from './(listas)/animales';
import Frutas from './(listas)/frutas';
import Saludo from './(otros)/saludo';
import Formulario from './(otros)/formulario';
import ScrollViewExample from './(otros)/scroll';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Animales);