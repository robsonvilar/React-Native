import React from "react";

import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';

export default props=>{
    return(
        <View style={estilos.bloco}>
            <Text>Informe sua Altura:</Text>
            <TextInput
            style={estilos.txt}
            autoFocus={false}
            keyboardType={'numeric'}
            onChangeText={text=>props.aoModificar(text)}
            ></TextInput>
        </View>
    );
}

const estilos = StyleSheet.create({
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
});

