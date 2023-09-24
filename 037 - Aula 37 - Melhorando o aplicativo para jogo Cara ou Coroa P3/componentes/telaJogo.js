import React, {useState} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';

import Globais from './globais';

export default function telaJogo() {
    const moedas=[1,2,3,4,5,6,7,8,9,10]

    let iMoeda=0
    
    const [moedaAtual,setMoedaAtual]=useState(moedas[iMoeda])
  
    let maxGiros = Globais.qrdeGiros
    let tempoGiro = Globais.tempEspera

    async function espera(tmp) {
      function tempo(ms) {
        return new Promise(resolve=>setTimeout(resolve,ms))
      }
      await tempo(tmp)
    }
  
    async function girarMoeda() {
      maxGiros = Globais.qrdeGiros
      tempoGiro = Globais.tempEspera
      iMoeda=2
      for (let i=0; i<(maxGiros)*8; i++) {
        iMoeda++
        if(iMoeda>9) {
          iMoeda=2
        }
        setMoedaAtual(moedas[iMoeda])
        await espera(tempoGiro)
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
        <View style={estilos.conteiner}>
            <Text style={estilos.titulo}>{Globais.titulo}</Text>
            <Text>{moedaAtual}</Text>
            <Button
                title='Girar'
                style={estilos.btnGirar}
                onPress={()=>{girarMoeda()}}
            />
        </View>
    );
}

const estilos=StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    titulo:{
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        fontSize:30,
        color:'#fc0',
        textTransform:'uppercase',
    },
    btnGirar:{
        margin:20,
        backgroundColor:'#fc0',
        padding:15,
        width:'100%',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    txtBtn:{
        color:'#000',
        textTransform:'uppercase',
        fontSize:20,
    }
})