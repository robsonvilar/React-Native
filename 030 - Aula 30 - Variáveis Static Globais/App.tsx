/*
npm run android
npm start -- --reset-cache
*/

import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Globais from './componentes/Globais'

export default class App3 extends Component {
  
  nome = Globais.nome
  canal = Globais.canal
  numero = Globais.num

  render() {
    return(
      <View>
        <Text>Nome: {this.nome}</Text>
        <Text>Canal: {this.canal}</Text>
        <Text>Número: {this.numero}</Text>
      </View>
    )
  }

}

const estilos = StyleSheet.create({

})