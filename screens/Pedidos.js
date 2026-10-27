import { View, Text } from 'react-native';
import Header from '../components/Header';

export default function Pedidos({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />

      <Text>Pedidos</Text>
    </View>
  );
}