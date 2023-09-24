import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';

import Globais from './globais'

export default function telaConfig() {
    
    const [giros,setGiros] = useState(Globais.qrdeGiros)
    const [tempo,setTempo] = useState(Globais.tempEspera)

    const setarGiros=(v)=>{
        Globais.qrdeGiros=parseInt(v)
        setGiros(v)
    }

    const setarTempo=(v)=>{
        Globais.tempEspera=parseInt(v)
        setTempo(v)
    }
    
    return(
        <View style={estilos.container}>
            <Text style={estilos.txt}>Quantidade de giros:</Text>
            <TextInput
                style={estilos.cxTexto}
                value={String(giros)}
                onChange={(valor)=>{setGiros(valor)}}
            />
            <Text style={estilos.txt}>Velocidade de giro:</Text>
            <TextInput
                style={estilos.cxTexto}
                value={String(tempo)}
                onChangeText={(valor)=>{setTempo(valor)}}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    container:{
        padding:10,
    },
    txt:{
        color:'#fff'
    },
    cxTexto:{
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:10,
        padding:10,
        marginBottom:20,
        color:'#fc0',
    },
})