//React Native 0.68 e android 12

/*
Para ativar o emulador: npm run android
*/

import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Estilos from './estilos/estilos'
import Toque from './componentes/Toque'

export default function App1() {
  return (
    <View>
      <Toque/>
    </View>
  );
};