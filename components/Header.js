import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/style'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header({ navigation }) {
  return (
    <View style={[stylesHeader.header, styles.bgColorMain]}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={stylesHeader.menu}
      >
        <FontAwesomeIcon
          icon={faBars}
          color="white"
          size={25}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingRight: 30}}>
        <Image
          source={require('../assets/logoSaborExpress.png')}
          style={stylesHeader.logo}
        />
      </View>
    </View>
  );
}

const stylesHeader = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    width: '100%',
    alignItems: 'center',
    gap: 30,
  },
  logo: {
    width: 197,
    height: 40,
  }
});
