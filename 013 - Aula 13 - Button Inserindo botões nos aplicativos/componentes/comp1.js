import React from 'react';
import {StyleSheet,Text} from 'react-native';

import Estilos1 from '../estilos/estilos';

let nt;

export default function(props) {
    nt=props.nota
    return(
        <Text style={Estilos1.textoCursos}>
            CFB Cursos - Curso de {props.curso} e {nt}
        </Text>
    );
}