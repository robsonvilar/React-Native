/*
npm run android
npm start -- --reset-cache
*/

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';

import TelaCanalE from './componentes/TelaCanal'

const Gavetas=createDrawerNavigator();

function TelaHome({navigation}) {
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Tela Home</Text>
      <Text>CFB Cursos</Text>
    </View>
  );
}

function TelaCanal({navigation}){
  return (
    <TelaCanalE nav={navigation}/>
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
    </View>
  );
}

export default function App3() {
  return (
    <NavigationContainer>
      <Gavetas.Navigator initialRouteName='Telahome'>
        <Gavetas.Screen
          name="Home"
          component={TelaHome}
          options={{
            title:"Tela inicial",
            headerStyle:{backgroundColor:'blue'},
            headerTintColor:'white',
            headerTitleStyle:{
              fontWeight:'bold'
            },
            headerRight:()=>(
              <Button
                title='Cursos'
                color='black'
                onPress={()=>alert('Botão Cursos Clicado!')}
              />
            ),
          }}
        />
        <Gavetas.Screen
          name="Canal"
          component={TelaCanal}
          options={{
            title:"Tela Canal",
            headerStyle:{backgroundColor:'blue'},
            headerTintColor:'white'
          }}
        />
        <Gavetas.Screen
          name="Cursos"
          component={TelaCursos}
          options={{title:"Cursos do Canal"}}
        />
      </Gavetas.Navigator>
    </NavigationContainer>
  );
}
