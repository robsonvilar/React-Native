//React Native 0.68 e android 12

/*
Para ativar o emulador: npm run android
*/

import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import Estilos from './estilos/estilos'
import CarroC from './componentes/CarroC'
import CarroF from './componentes/CarroF'

export default function App1() {
  return (
    <View style={estilos.visual1}>
      <CarroC
        nome='Golf'
      />
      <CarroC
        nome='HRV'
      />
      <CarroF
        nome='Polo'
      />
      <CarroF
        nome='Fiat'
      />
    </View>
  );
};

const estilos=StyleSheet.create({
  visual1:{
    fontSize:18,
    alignItems:'center',
  }
});