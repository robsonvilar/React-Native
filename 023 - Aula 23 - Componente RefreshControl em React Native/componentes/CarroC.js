import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

export default class Carro extends Component {
    state={
        ligado:true,
        nome:'Golf'
    }
    render(props) {
        return(
            <View>
                <Text>Carro: {this.props.nome} - Ligado: {this.props.ligado ? "Sim":"Não"}</Text>
                <Button
                    title={this.state.ligado ? 'Desligar' : 'Ligar'}
                    onPress={
                        ()=>{this.setState({ligado:!this.state.ligado})}
                    }
                />
            </View>
        )
    }
}