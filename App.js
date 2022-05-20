import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import Dislay from './Dislay';

export default function App() {
  const [image, setImage] = useState(require("./assets/happy.jpg"));

  function happy() {
    setImage(require("./assets/happy.jpg"))
  }

  function normal() {
    setImage(require('./assets/love.jpg'))

  }

  function sad() {
    setImage(require('./assets/sad.jpg'))
  }
  return (
    <View style={styles.container}>

      <View style={{ width: '100%', height: '60%' }}>
        <Dislay image={image} />

      </View>


      <View style={styles.life}>
        <TouchableOpacity onPress={happy}>
          <Image style={styles.image} source={require('./assets/happy.jpg')}></Image>
          <Text style={styles.Text}>Happy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={normal}>
          <Image style={styles.image} source={require('./assets/love.jpg')}></Image>
          <Text style={styles.Text}>Normal</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={sad}>
          <Image style={styles.image} source={require('./assets/sad.jpg')}></Image>
          <Text style={styles.Text}>Sad</Text>
        </TouchableOpacity >
      </View >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },

  life: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    height: '20%',
    width: '98%',
    backgroundColor: 'blue',
    padding: 10


  },

  Text: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: 'red'
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 5,
    backgroundColor: 'blue',

  }
})
