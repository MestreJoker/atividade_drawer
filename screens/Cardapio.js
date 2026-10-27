import { View, Text } from 'react-native';
import Header from '../components/Header';
import styles from '../styles/style';

export default function Cardapio({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View style={styles.conteudo}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                Nosso Cardápio
            </Text>

            <Text style={{fontSize: 15}}>
                Confira nossas opções e escolha o que mais combina com você!
            </Text>
      </View>
    </View>
  );
}