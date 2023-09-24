//React Native 0.68 e android 12

/*
Para ativar o emulador: npm run android
*/

import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import Estilos from './estilos/estilos'

export default function App1() {
  
  const [ligado,setLigado] = useState(false)

  return (
    <View style={estilos.visual1}>
      <Button
        title={ligado?'Desligar':'Ligar'}
        onPress={()=>setLigado(!ligado)}
      />
      {ligado?
        <View>
          <Text>CFB Cursos</Text>
          <Text>Curso de React Native</Text>
        </View>
        :
        <Text>* * *</Text>
      }
    </View>
  );
};

const estilos=StyleSheet.create({
  visual1:{
    fontSize:18,
    alignItems:'center',
  }
});