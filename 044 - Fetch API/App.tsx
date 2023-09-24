/*
npm run android
npm start -- --reset-cache
*/

import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import Rede from './componentes/Fetch'

export default function App() {
  return(
    <View>
      <Rede/>
    </View>
  );
}

const estilos = StyleSheet.create({

});