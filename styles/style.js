import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  conteudo: {
    padding: '12px'
  },
  subtitulo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5px'
  },
  textoSubtitulo: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  bgColorMain: {
    backgroundColor: '#b92121'
  }
});

export default styles;