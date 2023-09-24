import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

export default props=>{
  return(
    <View style={estilos.bloco}>
        <Text>Melhor combustível:</Text>
    </View>
  );
}

const estilos=StyleSheet.create({
    bloco:{
        marginBottom:10,
    },
})