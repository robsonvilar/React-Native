/*
npm run android
npm start -- --reset-cache
*/

import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
} from 'react-native';

import Gasolina from './componentes/gasolina'
import Etanol from './componentes/etanol'
import BotaoCalcular from './componentes/btnCalcular'
import Resultado from './componentes/resultado'
import ImgResultado from './componentes/imgResultado'

export default function Main() {

  const [gasolina,setGasolina] = useState(0)
  const [etanol,setEtanol] = useState(0)
  const [resultado,setResultado] = useState('')

  const calcular=()=>{
    if(!gasolina) {
      alert('Informe o preço da Gasolina.')
      return
    }
    if(!etanol) {
      alert('Informe o preço do Etanol.')
      return
    }

    let res
    let calc=((etanol/gasolina)*100).toFixed(1)

    if (calc > 70) {
      res = 'Gasolina'
    }
    else{
      res = 'Etanol'
    }

    alert('O Etanol está custando ' + calc + '% da Gasolina. Portanto é melhor abastecer com ' + res)
    setResultado(res)
  }

  const limpar=()=>{
    setResultado('')
  }

  const setarGasolina=(v)=>{
    limpar()
    setGasolina(v)
  }

  const setarEtanol=(v)=>{
    limpar()
    setEtanol(v)
  }

  return(
    <SafeAreaView style={estilos.principal}>
      <Gasolina
        aoModificar={setarGasolina}
      />
      <Etanol
        aoModificar={setarEtanol}
      />
      <BotaoCalcular
        aoPressionar={calcular}
      />
      <Resultado
        resultado={resultado}
      />
      <ImgResultado
        comb={resultado.charAt(0)}
      />
    </SafeAreaView>
  );
}

const estilos=StyleSheet.create({
  principal:{
    padding:10,
  }
})