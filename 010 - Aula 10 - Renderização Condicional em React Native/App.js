//React Native 0.68 e android 12

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

function f_exibir(vp1) {
  if(vp1) {
    return(<Text>Curso de React Native</Text>)
  }
  else {
    return(<Text> - - - </Text>)
  }
}

export default function App1() {
  let v_exibir=false;
  return (
    <View style={Estilos1.textoCursos}>
      <Caixas exibir={v_exibir}/>
      {f_exibir(v_exibir)}
    </View>
  );
};