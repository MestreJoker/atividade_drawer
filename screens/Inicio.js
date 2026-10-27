
import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Linking,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Header from '../components/Header';
import ProdutosPopulares from '../components/ProdutosPopulares';
import styles from '../styles/style';

export default function Inicio({ navigation }) {
  async function abrirWhatsApp() {
    const url = 'https://wa.me/5511999999999';

    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert('Erro', 'Não foi possível abrir o WhatsApp.');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Header navigation={navigation} />

      <Image
        source={require('../assets/imagemPrincipal.jpg')}
        style={stylesMain.image}
      />

      <View style={[styles.conteudo, { gap: 17 }]}>
        <ProdutosPopulares />

        <TouchableOpacity
          style={[styles.bgColorMain, styles.botao]}
          onPress={() => navigation.navigate('Cardapio')}
        >
          <FontAwesomeIcon
            icon={faBell}
            color="white"
            size={26}
          />
          <Text style={styles.textoBotao}>
            Ver cardápio
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesMain.viewWhatsapp}
          onPress={abrirWhatsApp}
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            color="green"
            size={36}
          />

          <View style={{ flex: 1, paddingHorizontal: 7 }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#005e14',
              }}
            >
              Falar com o restaurante
            </Text>

            <Text>
              Tire suas dúvidas ou faça seu pedido
            </Text>
          </View>

          <FontAwesomeIcon
            icon={faArrowRight}
            color="green"
            size={22}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const stylesMain = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },

  viewWhatsapp: {
    width: '100%',
    minHeight: 70,
    borderRadius: 12,
    backgroundColor: '#ebf4ed',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
