import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Header from './components/Header';
import ProdutosPopulares from './components/ProdutosPopulares';

import styles from '../atividade_drawer/styles/style'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBell } from '@fortawesome/free-solid-svg-icons'

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <Image 
        source={require('./assets/imagemPrincipal.jpg')} 
        style={stylesMain.image} 
      />

      <View style={[styles.conteudo, {display: 'flex', gap: 17}]}>

        

        <ProdutosPopulares />

        <TouchableOpacity
        style={[styles.bgColorMain, styles.botao]}>
          <FontAwesomeIcon icon={faBell} style={{color: 'white', fontSize: 26}}/>
            <Text style={styles.textoBotao}>Ver cardápio</Text>
        </TouchableOpacity>

        <View style={stylesMain.viewWhatsapp}>
          <FontAwesomeIcon icon={faWhatsapp} style={{color: 'green', fontSize: 36}}/>
          <View style={{flex: 1, paddingHorizontal: 7}}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#005e14'}}>Falar com o restaurante</Text>
            <Text>Tire suas dúvidas ou faça seu pedido</Text>
          </View>
          <FontAwesomeIcon icon={faArrowRight} color='green'/>
        </View>
      </View>
    </View>
  );
}

const stylesMain = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover', // Controla como a imagem se ajusta ao espaço
  },
  viewWhatsapp: {
    width: '100%',
    height: 70,
    borderRadius: 12,
    backgroundColor: '#ebf4ed',
    padding: 14,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

