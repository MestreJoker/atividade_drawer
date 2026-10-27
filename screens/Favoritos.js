import { View, Text } from 'react-native';
import Header from '../components/Header';

export default function Favoritos({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />

      <Text>Favoritos</Text>
    </View>
  );
}