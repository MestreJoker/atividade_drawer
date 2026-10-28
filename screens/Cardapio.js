import { StyleSheet, View, Text, FlatList } from 'react-native';
import Header from '../components/Header';
import styles from '../styles/style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBacon, faBurger, faMartiniGlass, faCakeCandles, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Cardapio({ navigation }) {
  const opcoes = [
    {
      id: 1,
      cor: 'red',
      icone: <FontAwesomeIcon icon={faBurger} size={30} color='white' />,
      texto: "Lanches"
    },
    {
      id: 2,
      cor: '#f4ab17',
      icone: <FontAwesomeIcon icon={faBacon} size={30} color='white' />,
      texto: "Porções"
    },
    {
      id: 3,
      cor: 'green',
      icone: <FontAwesomeIcon icon={faMartiniGlass} size={30} color='white' />,
      texto: "Bebidas"
    },
    {
      id: 4,
      cor: 'brown',
      icone: <FontAwesomeIcon icon={faCakeCandles} size={30} color='white' />,
      texto: "Sobremesas"
    },
  ];

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View style={styles.conteudo}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
          Nosso Cardápio
        </Text>

        <Text style={{ fontSize: 15, marginBottom: 10 }}>
          Confira nossas opções e escolha o que mais combina com você!
        </Text>

        <FlatList
          data={opcoes}
          keyExtractor={item => `opcao${item.id}`}
          contentContainerStyle={{ gap: 8 }}
          renderItem={({ item }) => (
            <View style={[stylesCardapio.opcaoCard]}>
              <View style={{ width: 55, height: 55, justifyContent: 'center', alignItems: 'center', borderRadius: '100%', backgroundColor: item.cor }}>
                {item.icone}
              </View>
              <Text style={{marginLeft: 10, fontSize: 20, flex: 1 }}>{item.texto}</Text>
              <FontAwesomeIcon icon={faAngleRight} size={25}/>
            </View>
          )}
        />
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