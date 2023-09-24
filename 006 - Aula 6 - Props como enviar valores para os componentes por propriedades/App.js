/*
Para ativar o emulador: npm run android
*/

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import C1 from './componentes/comp1'

export default function App1() {
  return (
    <View style={estilos.conteiner}>
      <C1 curso="React Native" nota="10" cor="purple"/>
      <C1 curso="C++" nota="10" cor="red"/>
      <C1 curso="JavaScript" nota="10" cor="blue"/>
      <C1 curso="C#" nota="10" cor="purple"/>
      <Text style={estilos.txt0}>
        Robson esteve aqui.
      </Text>
      <Text style={{color:'#f00',fontSize:20}}>
        Robson não esteve aqui.
      </Text>
    </View>
  );
};

const estilos=StyleSheet.create({
  conteiner:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  txt0:{
    color: "green",
    fontSize: 20,
  }
});