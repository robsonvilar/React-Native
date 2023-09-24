import React, {useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

export default function() {

    const [cont,setCont] = useState(0)
    const contar=()=>{
        setCont(cont+1)
    }

    return(
        <View>
            <TouchableHighlight
                style={estilos.botao}
                onPress={contar}
                underlayColor={'pink'}
            >
                <Text>
                    Robson
                </Text>
            </TouchableHighlight>
            <TouchableOpacity
                style={estilos.botao}
                onPress={contar}
                underlayColor={'pink'}
            >
                <Text>
                    Robson
                </Text>
            </TouchableOpacity>
            <Text>{cont}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    botao:{
        alignItems:'center',
        backgroundColor:'gray',
        padding:10,
    }
})
