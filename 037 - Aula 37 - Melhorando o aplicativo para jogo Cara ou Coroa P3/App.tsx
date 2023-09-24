/*
npm run android
npm start -- --reset-cache
*/

import React from 'react';

import TelaJogo from './componentes/telaJogo'
import TelaConfig from './componentes/telaConfig'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Menus = createBottomTabNavigator()

export default function App() {
  return(
    <NavigationContainer theme={temaMenu}>
      <Menus.Navigator initialRouteName='Jogo'>
        <Menus.Screen
          name='Jogo'
          component={TelaJogo}
          options={{
            title:'Jogo',
          }}
        />
        <Menus.Screen name='Configurações' component={TelaConfig}/>
      </Menus.Navigator>
    </NavigationContainer>
  );
}

const temaMenu = {
  dark: false,
  colors: {
    primary: 'rgb(255,255,255)',
    background: 'rgb(0,0,0)',
    card: 'rgb(0,0,0)',
    text: 'rgb(255,255,255)',
    border: 'rgb(255,255,255)',
    notification: 'rgb(255,0,0)',
  }
}