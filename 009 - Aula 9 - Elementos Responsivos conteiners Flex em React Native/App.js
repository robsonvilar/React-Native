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
import Caixas from './componentes/Caixas'
import Estilos1 from './estilos/estilos' 

export default function App1() {
  return (
    <View style={Estilos1.textoCursos}>
      <Caixas/>
    </View>
  );
};