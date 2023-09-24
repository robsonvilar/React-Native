import React, {useEffect,useState} from 'react'
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
} from 'react-native'

//http://cfbcursos.com.br/filmes.json

export default function() {
    
    const [carregando,setCarregando] = useState(true)
    const [dados,setDados] = useState([])

    useEffect(
        ()=>{
            fetch('http://cfbcursos.com.br/filmes.json')
                .then((resp)=>resp.json())
                .then((json)=>setDados(json.filmes))
                .catch(()=>(alert('Erro ao carregar lista de filmes')))
                .finally(()=>setCarregando(false))
        },[]
    )
    
    return(
        <View>
            {
                carregando ? <ActivityIndicator/> : (
                    <FlatList
                        data={dados}
                        keyExtractor={({id},index)=>id}
                        renderItem={({item})=>(
                            <Text>
                                {item.titulo}, {item.AnoLancamento}
                            </Text>
                        )}
                    />
                )
            }
        </View>
    )
}