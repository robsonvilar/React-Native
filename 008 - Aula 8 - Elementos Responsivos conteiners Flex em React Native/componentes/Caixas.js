import React from 'react';
import {View,StyleSheet} from 'react-native';

export default function(props) {
    return(
        <View style={estilos.visual1}>
            <View style={{width:50,height:50,backgroundColor:'#00f'}}> 

            </View>
            <View style={{width:50,height:50,backgroundColor:'#00a'}}>

            </View>
            <View style={{width:50,height:50,backgroundColor:'#005'}}>

            </View>
        </View>
    )
}

const estilos=StyleSheet.create({
    visual1:{
        width:'100%',
        height:'70%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'flex-end',
    },
});