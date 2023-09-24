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
} from 'react-native'

export default function App() {

  const [operacao,setOperacao] = useState(0)
  const [resultado,setResultado] = useState(0)

  const operar=()=>{
    setResultado(eval(operacao))
  }

  return(
    <SafeAreaView style={estilos.container}>
      <Text>
        Calculadora - CFB Cursos
      </Text>
      <View style={estilos.display}>
        <TextInput
          style={estilos.txtDsOper}
          value={String(operacao)}
          onChangeText={(texto)=>{setOperacao(texto)}}
        ></TextInput>
        <TextInput
          style={estilos.txtDsRes}
          value={String(resultado)}
        ></TextInput>
      </View>
      <View>
        <TouchableHighlight
          style={estilos.btn}
          onPress={()=>operar()}
        >
          <Text>
            OPERAR
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView> 
  );
}

const estilos = StyleSheet.create({
  container:{

  },
  display:{
    backgroundColor:'#333',
    padding:10,
  },
  txtDsOper:{
    color:'#fff',
  },
  txtDsRes:{
    color:'#fff',
  },
  btn:{
    backgroundColor:'#aaa',
    padding:20,
  },
  txtBtn:{

  }
});