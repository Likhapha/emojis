import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Dislay({ image }) {


  return (

    <View style={styles.details}>
      <Image style={styles.image} source={image} />
    </View>
  );
}


const styles = StyleSheet.create({
  details: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  like: {
    height: 100,
    widht: 100,

  },
  image: {
    height: '100%',
    width: '100%'
  }
})