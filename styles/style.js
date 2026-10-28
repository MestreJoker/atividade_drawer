import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f7',

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
  iconeSubtitulo: {
    fontSize: 25
  },  
  textoSubtitulo: {
    fontSize: '23px',
    fontWeight: 'bold'
  },
  bgColorMain: {
    backgroundColor: '#b92121'
  },
  botao: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    gap: 8,
    padding: 7,
    borderRadius: 15,
  },
  textoBotao: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  shadowMd: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
});

export default styles;