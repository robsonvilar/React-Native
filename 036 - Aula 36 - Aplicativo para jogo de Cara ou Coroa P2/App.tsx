/*
npm run android
npm start -- --reset-cache
*/

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button
} from 'react-native';

export default function Main() {

  const moedas=[1,2,3,4,5,6,7,8,9,10]

  let iMoeda=0
  const maxGiros=5
  
  const [moedaAtual,setMoedaAtual]=useState(moedas[iMoeda])

  async function espera(tmp) {
    function tempo(ms) {
      return new Promise(resolve=>setTimeout(resolve,ms))
    }
    await tempo(tmp)
  }

  async function girarMoeda() {
    iMoeda=2
    for (let i=0; i<(maxGiros)*8; i++) {
      iMoeda++
      if(iMoeda>9) {
        iMoeda=2
      }
      setMoedaAtual(moedas[iMoeda])
      await espera(10)
    }
    let res=Math.floor(Math.random()*10)+1
    if(res<=5){
      res=0
    }
    else{
      res=1
    }
    setMoedaAtual(moedas[res])
  }
 
  return(
    <SafeAreaView style={estilos.container}>
      <View>
        <Text>Cara ou Coroa:</Text>
        <Text style={estilos.fontMoeda}>{moedaAtual}</Text>
        <Button
          title='Girar'
          onPress={()=>{girarMoeda()}}
        />
      </View>
    </SafeAreaView>
  );
}

const estilos=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  fontMoeda:{
    fontSize:130,
    alignItems:'center',
    justifyContent:'center'
  }
})