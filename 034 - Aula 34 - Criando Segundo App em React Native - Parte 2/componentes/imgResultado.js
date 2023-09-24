import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

export default props=>{
  return(
    <View style={estilos.bloco}>
        {
            props.comb == '' ?
                <Image
                    source={require('../assets/v1.png')}
                    style={estilos.bomba}
                />
            :
                props.comb == 'G' ?
                    <Image
                        source={require('../assets/v2.png')}
                        style={estilos.bomba}
                    />
                :
                    <Image
                        source={require('../assets/v3.png')}
                        style={estilos.bomba}
                    />
        }
    </View>
  );
}

const estilos=StyleSheet.create({
    bloco:{
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
    },
    bomba:{
        width:290,
        height:290,
        resizeMode:'stretch',
    },
})