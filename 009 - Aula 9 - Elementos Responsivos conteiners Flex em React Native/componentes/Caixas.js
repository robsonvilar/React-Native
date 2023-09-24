import React from 'react';
import {View,StyleSheet} from 'react-native';

export default function(props) {
    return(
        <View style={estilos.visual1}>
            <View style={{flexGrow:1,backgroundColor:'#00f'}}></View>
            <View style={{flexGrow:1,backgroundColor:'#00a'}}></View>
            <View style={{flexGrow:1,backgroundColor:'#005'}}></View>
            <View style={{flexGrow:2,backgroundColor:'#f00'}}></View>
            <View style={{flexGrow:1,backgroundColor:'#a00'}}></View>
            <View style={{flexGrow:1,backgroundColor:'#500'}}></View>
        </View>
    )
}

const estilos=StyleSheet.create({
    visual1:{
        width:'90%',
        height:'98%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'stretch',
    },
});