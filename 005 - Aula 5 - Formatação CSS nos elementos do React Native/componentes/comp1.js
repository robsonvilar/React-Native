import React from 'react';
import {StyleSheet,Text} from 'react-native';

export default function() {
    return(
        <Text style={estilos.txt2}>
            CFB Cursos - Curso de React Native
        </Text>
    );
}

const estilos = StyleSheet.create({
    txt1:{
        color: '#f00',
        fontSize: 20,
    },
    txt2:{
        color: '#00f',
        fontSize: 15,
    }
});