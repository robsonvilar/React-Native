//React Native 0.68 e android 12

/*
Para ativar o emulador: npm run android
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import Lp1 from './componentes/ListaPlana'

const imgbg1 = './assets/images1/image1.png'
const imgbg2 = './assets/images1/image2.png'
const imgbg3 = './assets/images1/image3.png'

export default function App1() {
  return (
    <View style={estilos.visual1}>
      <ImageBackground
        source={require(imgbg1)}
        style={estilos.imagemFundo}
      >
        <Lp1 style={estilos.visual1}/>
      </ImageBackground>
    </View>
  );
};

const estilos=StyleSheet.create({
  visual1:{
      font:30,
      width:'100%',
      height:'100%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
  },
  imagemFundo:{
    flex:1,
    resizeMode:'cover',
  }
});