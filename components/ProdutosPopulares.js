import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import styles from '../styles/style'

export default function ProdutosPopulares() {
    const produtos = [
        {
            id: 1,
            imagem: 'https://paulinlanches.pedidoturbo.com.br/_core/_uploads/129/2023/01/1611240123gkig53i7i1.jpeg',
            nome: "X-Burger",
            preco: 24.90
        },
        {
            id: 2,
            imagem: 'https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_orig.jpg',
            nome: "Pizza de Calabresa",
            preco: 39.90
        },
        {
            id: 3,
            imagem: 'https://beagaembalagem.com.br/wp-content/uploads/2021/06/batata-frita.jpeg',
            nome: "Batata Frita",
            preco: 14.90
        },
        {
            id: 4,
            imagem: 'https://s2.glbimg.com/GUda5oj9xkd_yQNyn36mDn9XJmo=/620x455/e.glbimg.com/og/ed/f/original/2018/08/17/beber-refrigerante-todos-os-dias-esta-te-matando.jpg',
            nome: "Refrigerante",
            preco: 6.00
        },
    ]

  return (
        <FlatList
          horizontal={true}
          gap
          data={produtos}
          keyExtractor={item => `produto${item.id}`}
          contentContainerStyle={{gap: 8}}
          renderItem={({item}) => (
              <View style={pp.produtoCard}>
                  <Image source={{ uri: item.imagem }} style={pp.produtoImagem} />
                  
                  <View style={{flex: 1, padding: 10}}>
                      <Text style={pp.nomeProduto}>{item.nome}</Text>
                      <Text style={pp.precoProduto}>R$ {item.preco.toFixed(2)}</Text>
                  </View>
              </View>
          )}
        />
  );
}

const pp = StyleSheet.create({
  produtoCard: {
    display: 'flex',
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#cac9c9',
    overflow: 'hidden',
    marginBottom: 12,
    width: 120, // Ajuste a largura conforme o seu design
  },
  produtoImagem: {
    width: '100%',
    height: 60, // Altura obrigatória para renderizar imagens remotas
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  precoProduto: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  }
});