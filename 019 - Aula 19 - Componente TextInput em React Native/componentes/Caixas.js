import React from 'react';
import {View,StyleSheet} from 'react-native';

export default function(props) {
    return(
        <View style={estilos.visual1}>
            {
                props.exibir ?
                    <View style={{flex:1}}>
                        <View style={{flexGrow:1,backgroundColor:'#00f'}}></View>
                        <View style={{flexGrow:1,backgroundColor:'#00a'}}></View>
                        <View style={{flexGrow:1,backgroundColor:'#005'}}></View>
                    </View>
                :
                    <View style={{flex:1}}>
                        <View style={{flexGrow:1,backgroundColor:'#f00'}}></View>
                        <View style={{flexGrow:1,backgroundColor:'#a00'}}></View>
                        <View style={{flexGrow:1,backgroundColor:'#500'}}></View>
                    </View>
            }
        </View>
    )
}

const estilos=StyleSheet.create({
    visual1:{
        width:'100%',
        height:300,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
});