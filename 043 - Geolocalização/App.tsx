/*
npm run android
npm start -- --reset-cache
*/

import React, {useState} from 'react';

import Local from './componentes/Geolocalizacao'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default function App() {
  return(
    <View>
      <Local/>
    </View>
  );
}

const estilos = StyleSheet.create({

});