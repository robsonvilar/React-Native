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
} from 'react-native';
import C1 from './componentes/comp1'
import Caixas from './componentes/Caixas'
import Estilos1 from './estilos/estilos' 

function f_exibir(vp1) {
  if(vp1) {
    return(<Text>Curso de React Native</Text>)
  }
  else {
    return(<Text> - - - </Text>)
  }
}

function dobro(n) {
  return n*2;
}

function soma(n1,n2) {
  return n1+n2;
}

export default function App1() {
  let v_exibir=true;
  return (
    <View style={Estilos1.textoCursos}>
      <Text>{dobro(2)}</Text>
      <Text>{soma(5,5)}</Text>
      <Image 
        source={require('./assets/imagemLogo.png')}
        style={estilos.logo}
      />
      {f_exibir(v_exibir)}
    </View>
  );
};

const estilos = StyleSheet.create({
  logo: {
    width:300,
    resizeMode:'contain'
  }
});