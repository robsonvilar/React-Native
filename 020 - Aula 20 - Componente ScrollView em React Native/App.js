//React Native 0.68 e android 12

/*
Para ativar o emulador: npm run android
*/

import React,{useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Estilos from './estilos/estilos'
import Rolagem from './componentes/Rolagem'

export default function App1() {
  return (
    <View>
      <Rolagem/>
    </View>
  );
};

const estilos=StyleSheet.create({
  visual1:{
    fontSize:18,
    alignItems:'center',
  }
});