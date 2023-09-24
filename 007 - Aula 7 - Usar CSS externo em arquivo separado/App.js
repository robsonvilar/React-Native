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
import Estilos1 from './estilos/estilos' 

export default function App1() {
  return (
    <View style={Estilos1.textoCursos}>
      <C1 curso="React Native" nota="10"/>
      <C1 curso="C++" nota="10"/>
      <C1 curso="JavaScript" nota="10"/>
      <C1 curso="C#" nota="10"/>
      <Text style={Estilos1.conteiner}>
        Robson esteve aqui.
      </Text>
      <Text style={{color:'#f00',fontSize:20}}>
        Robson não esteve aqui.
      </Text>
    </View>
  );
};