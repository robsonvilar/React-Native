import React, {useState} from 'react';
import {
    View,
    Text,
    Button,
    Modal,
    StyleSheet
} from 'react-native'

export default function() {

    const [visivel, setVisivel] = useState(true)

    return(
        <View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={visivel}
                style={{}}
            >
                <View style={estilos.modal}>
                    <Text>CFB Cursos</Text>
                    <Text>Curso de React Native</Text>
                    <Button
                        title='Fechar'
                        onPress={()=>{setVisivel(false)}}
                    />
                </View>
            </Modal>
            <Button
                title='Mostrar'
                onPress={()=>{setVisivel(true)}}
            />
        </View>
    )
}

const estilos=StyleSheet.create({
    modal:{
        backgroundColor:'orange',
        margin:10,
        padding:10,
        borderRadius:10,
        elevation:10,
    }
})