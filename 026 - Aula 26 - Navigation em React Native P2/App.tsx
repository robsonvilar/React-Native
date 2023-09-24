import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const Pilha=createStackNavigator();

function TelaHome({navigation}) {
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Tela Home</Text>
      <Text>CFB Cursos</Text>
      <Button
        title='Tela Canal'
        onPress={()=>navigation.navigate('Canal')}
      />
    </View>
  );
}

function TelaCanal({navigation}) {
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Tela Canal</Text>
      <Text>youtube.com/cfbcursos</Text>
      <Button
        title='Home'
        onPress={()=>navigation.navigate('Home')}
      />
      <Button
        title='Voltar'
        onPress={()=>navigation.goBack()}
      />
      <Button
        title='Cursos'
        onPress={()=>navigation.navigate('Cursos')}
      />
    </View>
  );
}

function TelaCursos({navigation}) {
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Tela Cursos</Text>
      <Button
        title='React Native'
        onPress={()=>navigation.navigate('CursoReactNative',{
          aulas:100,
          autor:'Bruno'
        })}
      />
    </View>
  );
}

function TelaCursoReactNative({route,navigation}) {
  
  const aulas1 = route.params.aulas;
  const autor1 = route.params.autor;

  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Curso de React Native</Text>
      <Text>Aulas: {aulas1}</Text>
      <Text>Autor: {autor1}</Text>
      <Button
        title='Home'
        onPress={()=>navigation.navigate('Home')}
      />
      <Button
        title='Voltar'
        onPress={()=>navigation.goBack()}
      />
    </View>
  );
}

export default function App1() {
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName='Telahome'>
        <Pilha.Screen
          name="Home"
          component={TelaHome}
          options={{title:"Tela inicial"}}
        />
        <Pilha.Screen
          name="Canal"
          component={TelaCanal}
          options={{title:"Tela Canal"}}
        />
        <Pilha.Screen
          name="Cursos"
          component={TelaCursos}
          options={{title:"Cursos do Canal"}}
        />
        <Pilha.Screen
          name="CursoReactNative"
          component={TelaCursoReactNative}
          options={{title:"Curso de React Native"}}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}
