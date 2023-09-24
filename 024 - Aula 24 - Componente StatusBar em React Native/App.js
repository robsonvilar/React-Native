//React Native 0.68 e android 12

/*
Para ativar o emulador: npm run android
*/

import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

export default function App1() {

  const [cor,setCor] = useState('black')

  return (
    <View style={estilos_App.container}>
      <StatusBar
        backgroundColor={cor}
        barStyle={'default'}
        hidden={false}
        animated={true}
        translucent={true}
      />
      <Text>CFB Cursos</Text>
      <Text>Curso de React Native</Text>
      <View style={estilos_App.v1}>
        <Button
          style={estilos_App.v1}
          title='Vermelho'
          onPress={()=>{setCor('red')}}
        />
        <Button
          title='Azul'
          onPress={()=>{setCor('blue')}}
        />
        <Button
          title='Verde'
          onPress={()=>{setCor('green')}}
        />
      </View>
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
  v1:{
    margin:5,
  }
});