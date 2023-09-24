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
  TouchableHighlight,
  TextInput,
  Alert,
} from 'react-native'

import Display1 from './componentes/display'
import Botao from './componentes/botao'

let estados = {
  valorTela:'',
  resultado:0,
  operado:false,
  ponto:false,
}

export default function App() {

  const [vtela,setVtela] = useState(estados.valorTela)
  const [vres,setVres] = useState(estados.resultado)

  const addDigito=(d)=>{
    
    if (d=='+' || d=='-' || d=='/' || d=='*') {
      estados.ponto = false
    }

    if(d == '.' && estados.ponto == false) {
      estados.ponto = true
      estados.operado = false
    }
    else if (d=='.' && estados.ponto == true) {
      return
    }

    if((d=='+' || d=='-' || d=='/' || d=='*') && estados.operado == true) {
      estados.valorTela = estados.resultado
      estados.resultado = 0
    }

    estados.valorTela = estados.valorTela+d
    setVtela(estados.valorTela)
    setVres(estados.resultado)
    estados.operado=false
  }

  const limparTela=()=>{
    estados = {
      valorTela:'',
      resultado:0,
      operado:false,
      ponto:false,
    }
    setVtela(estados.valorTela)
    setVres(estados.resultado)
  }

  const opera=(d)=>{
    if (d=='AC') {
      limparTela()
      return
    }
    else if(d == 'BS') {
      estados.valorTela = vtela.substring(0,(vtela.length - 1))
      setVtela(estados.valorTela)
      return
    }
    else if (d=='igual') {
      try{
        estados.resultado=eval(vtela)
        estados.operado = true
        setVres(estados.resultado)
      }
      catch {
        estados.resultado='Erro'
        estados.operado = true
        setVres(estados.resultado)
      }
    }
  }

  return(
    <SafeAreaView style={estilos.container}>
      <Text>
        Calculadora - CFB Cursos
      </Text>
      <Display1 
        valor={vtela} 
        res={vres}
      />
      <View style={estilos.botoes}>
        <Botao label='AC' ac aoClicar={()=>{opera('AC')}}></Botao>
        <Botao label='(' aoClicar={()=>{addDigito('(')}}></Botao>
        <Botao label=')' aoClicar={()=>{addDigito(')')}}></Botao>
        <Botao label='/' operacao aoClicar={()=>{addDigito('/')}}></Botao>
        <Botao label='7' aoClicar={()=>{addDigito('7')}}></Botao>
        <Botao label='8' aoClicar={()=>{addDigito('8')}}></Botao>
        <Botao label='9' aoClicar={()=>{addDigito('9')}}></Botao>
        <Botao label='*' operacao aoClicar={()=>{addDigito('*')}}></Botao>
        <Botao label='4' aoClicar={()=>{addDigito('4')}}></Botao>
        <Botao label='5' aoClicar={()=>{addDigito('5')}}></Botao>
        <Botao label='6' aoClicar={()=>{addDigito('6')}}></Botao>
        <Botao label='-' operacao aoClicar={()=>{addDigito('-')}}></Botao>
        <Botao label='1' aoClicar={()=>{addDigito('1')}}></Botao>
        <Botao label='2' aoClicar={()=>{addDigito('2')}}></Botao>
        <Botao label='3' aoClicar={()=>{addDigito('3')}}></Botao>
        <Botao label='+' operacao aoClicar={()=>{addDigito('+')}}></Botao>
        <Botao label='.' aoClicar={()=>{addDigito('.')}}></Botao>
        <Botao label='0' aoClicar={()=>{addDigito('0')}}></Botao>
        <Botao label='<-' bs aoClicar={()=>{opera('BS')}}></Botao>
        <Botao label='=' igual aoClicar={()=>{opera('igual')}}></Botao>
      </View>
    </SafeAreaView> 
  );
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  botoes:{
    flexDirection:'row',
    flexWrap:'wrap',
  }
});