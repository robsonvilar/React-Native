import React, {useState} from 'react'
import {View, Text, Switch} from 'react-native'

export default function(props) {
    const [ligado,setLigado] = useState(false)
    const toggleLigado=()=>setLigado(!ligado)
    return(
        <View>
            <Text>Carro: {props.nome} - Ligado: {ligado ? "Sim":"Não"}</Text>
            <Switch
                trackColor={{false:'gray',true:'blue'}}
                thumbColor={ligado ? 'blue' : 'gray'}
                value={ligado}
                onValueChange={toggleLigado}
            />
        </View>
    )
}