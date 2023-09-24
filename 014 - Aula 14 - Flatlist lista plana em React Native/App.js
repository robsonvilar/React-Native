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

import Lp1 from './componentes/ListaPlana'

export default function App1() {
  return (
    <View style={estilos.visual1}>
      <Lp1 style={estilos.visual1}/>
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
});