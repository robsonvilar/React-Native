//React Native 0.68 e android 12

/*
Para ativar o emulador: npm run android
*/

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
} from 'react-native';
import C1 from './componentes/comp1'
import Caixas from './componentes/Caixas'
import Estilos1 from './estilos/estilos' 

function botao1() {
  Alert.alert('MSG','Botão apertado!')
}

export default function App1() {
  return (
    <View style={Estilos1.textoCursos}>
      <Image 
        source={require('./assets/imagemLogo.png')}
        style={estilos.logo}
      />
      <Button
        title='Mostrar mensagem'
        onPress={botao1}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  logo: {
    width:300,
    resizeMode:'contain'
  }
});