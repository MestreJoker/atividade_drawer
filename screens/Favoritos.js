import { StyleSheet, View, Text, Image } from 'react-native';
import Header from '../components/Header';
import styles from '../styles/style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBacon, faBurger, faMartiniGlass, faCakeCandles, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Favoritos({ navigation }) {

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
        <Image source={require(`../assets/coracaoFavoritos.png`)} style={{ width: 130, height: 63, marginHorizontal: 'auto'}} />

        <View style={styles.conteudo}>
          <Text style={{ fontSize: 27, fontWeight: 'bold', textAlign: 'center' }}>
            Meus Favoritos
          </Text>

          <Text style={{ fontSize: 18, marginBottom: 10, textAlign: 'center', width: '70%', marginHorizontal: 'auto' }}>
            Aqui ficarão os alimentos que você mais gosta.
          </Text>
        </View>
      </View>

    </View>
  );
}

const stylesCardapio = StyleSheet.create({
  opcaoCard: {
    width: '100%',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f3ef',
    border: '1px solid lightgray'
  }
});