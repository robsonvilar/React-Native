//React Native 0.68 e android 12

/*
Para ativar o emulador: npm run android
*/

import React,{useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import Estilos from './estilos/estilos'
import CxT from './componentes/CaixaDeTexto'

export default function App1() {
  return (
    <SafeAreaView style={estilos.visual1}>
      <CxT/>
    </SafeAreaView>
  );
};

const estilos=StyleSheet.create({
  visual1:{
    fontSize:18,
    alignItems:'center',
  }
});