import React, {useState} from 'react'
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native'

import Local from '@react-native-community/geolocation'

/*

    Inserir no arquivo AndroidManifest.xml

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    <uses-permission android:name="android.permission.ACESS_COARSE_LOCATION"/>
*/

export default function() {

    const [lat,SetLatitude]=useState(0)
    const [lon,SetLongitude]=useState(0)

    const obterLocal=()=>{
        const p=(pos)=>{
            SetLatitude(pos.coords.latitude)
            SetLongitude(pos.coords.longitude)
        }

        const e=(erro)=>{
            alert('Erro: ' + erro.message)
        }

        Local.getCurrentPosition(p,e,{enableHighAccuracy:true,timeout:120000,maximumAge:1000})
    }

    return(
        <View>
            <Text>
                Robson - Geolocalização
            </Text>
            <TouchableHighlight
                onPress={obterLocal}
            >
                <Text>
                    Clique aqui para pegar a localização
                </Text>
            </TouchableHighlight>
            <Text>
                Latitude: {lat}
            </Text>
            <Text>
                Longitude: {lon}
            </Text>
        </View>
    )
}