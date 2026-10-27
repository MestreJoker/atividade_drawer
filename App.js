import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import ProdutosPopulares from './components/ProdutosPopulares';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

import styles from '../atividade_drawer/styles/style'
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.conteudo}>

        <View style={styles.subtitulo}>
          <FontAwesomeIcon icon={faFire} color='orange' />
          <Text style={styles.textoSubtitulo}>Produtos Polulares</Text>
        </View>

        <ProdutosPopulares />

        <TouchableOpacity style={[styles.bgColorMain, {width: '100%', display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems: 'center', gap: 8, padding: 7, borderRadius: 15,}]}>
            <Text>Ver cardápio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

