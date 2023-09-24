//React Native 0.68 e android 12

/*
Para ativar o emulador: npm run android
*/

import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
} from 'react-native';

import Estilos from './estilos/estilos'
import CarroF from './componentes/CarroF'

export default function App1() {
  return (
    <SafeAreaView style={estilos.visual1}>
      <CarroF
        nome='Polo'v
      />
      <CarroF
        nome='Fiat'
      />
    </SafeAreaView>
  );
};

const estilos=StyleSheet.create({
  visual1:{
    fontSize:18,
    alignItems:'center',
  }
});