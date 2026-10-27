
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Inicio from './screens/Inicio';
import Cardapio from './screens/Cardapio';
import Favoritos from './screens/Favoritos';
import Pedidos from './screens/Pedidos';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: '#D62828',
        }}
      >
        <Drawer.Screen
          name="Inicio"
          component={Inicio}
        />

        <Drawer.Screen
          name="Cardapio"
          component={Cardapio}
        />

        <Drawer.Screen
          name="Favoritos"
          component={Favoritos}
        />

        <Drawer.Screen
          name="Pedidos"
          component={Pedidos}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
