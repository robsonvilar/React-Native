/*
Para ativar o emulador: npm run android
*/

import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

//Componentes de função
/*
export default function App1() {
  return (
    <View>
      <View>
        <Text>
          CFB Cursos
        </Text>
        <Text>
          Curso de React Native
        </Text>
      </View>
      <View>
        <Text>
          Aula 3
        </Text>
        <Text>
          www.cfbcursos.com.br
        </Text>
      </View>
    </View>
  );
};
*/

//Componentes de classe
export default class App1 extends Component {
  render() {
    return (
      <View>
      <View>
        <Text>
          CFB Cursos
        </Text>
        <Text>
          Curso de React Native
        </Text>
      </View>
      <View>
        <Text>
          Aula 3
        </Text>
        <Text>
          www.cfbcursos.com.br
        </Text>
      </View>
    </View>
    );
  }
}