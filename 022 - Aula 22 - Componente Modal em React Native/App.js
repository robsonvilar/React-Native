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

import Modal from './componentes/Modal'

export default function App1() {
  return (

    <View style={estilos_App.container}>
      <Text>CFB Cursos</Text>
      <Text>Curso de React Native</Text>
      <Modal/>
    </View>
  );
};

const estilos_App = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});