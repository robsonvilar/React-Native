/*
npm run android
npm start -- --reset-cache
*/

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Alert,
} from 'react-native';

export default function App3() {

  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)

  const calcImc=()=>{
    if(peso==0 || !peso) {
      alert('Informe o Peso!')
      return
    }
    if(altura==0 || !altura) {
      alert('Informe a altura')
    }
    
    const r = (peso/(altura*altura))

    setResultado(r.toFixed(1))
  }

  return(
    <SafeAreaView style={estilos.corpo}>
      <View style={estilos.bloco}>
        <Text>Calculadora de IMC</Text>
      </View>
      <View style={estilos.bloco}>
        <Text>Informe seu Peso:</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={true}
          keyboardType={'numeric'}
          onChangeText={text=>setPeso(text)}
        ></TextInput>
      </View>
      <View style={estilos.bloco}>
        <Text>Informe sua Altura:</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={false}
          keyboardType={'numeric'}
          onChangeText={text=>setAltura(text)}
        ></TextInput>
      </View>
      <View style={estilos.bloco}>
        <TouchableHighlight
          style={estilos.btnCalc}
          onPress={()=>calcImc()}
        >
          <Text style={estilos.txtBtn}>Calcular IMC</Text>
        </TouchableHighlight>
      </View>
      <View style={estilos.bloco}>
        <Text>Resultado: {resultado}</Text>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  corpo:{
    padding:10,
  },
  bloco:{
    marginBottom:20,
  },
  txt:{
    width:'98%',
    borderWidth:1,
    borderColor:'#000',
    padding:10,
    borderRadius:10,
  },
  btnCalc:{
    backgroundColor:'#048',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:10,
  },
  txtBtn:{
    fontSize:15,
    textTransform:'uppercase',
    color:'#fff',
  }
});