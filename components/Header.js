import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/style'

export default function Header() {
  return (
    <View style={[stylesHeader.header, styles.bgColorMain]}>
      
    </View>
  );
}

const stylesHeader = StyleSheet.create({
  header: {
    display: 'flex',
    padding: 4,
    width: '100%',
    height: 40,
    alignItems: 'center',
    gap: 30,
  },
});
