/*
npm run android
npm start -- --reset-cache
*/

import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Gasolina from './componentes/gasolina'
import Etanol from './componentes/etanol'
import BotaoCalcular from './componentes/btnCalcular'
import Resultado from './componentes/resultado'
import ImgResultado from './componentes/imgResultado'

export default function Main() {
  return(
    <SafeAreaView style={estilos.principal}>
      <Gasolina/>
      <Etanol/>
      <BotaoCalcular/>
      <Resultado/>
    </SafeAreaView>
  );
}

const estilos=StyleSheet.create({
  principal:{
    padding:10,
  }
})