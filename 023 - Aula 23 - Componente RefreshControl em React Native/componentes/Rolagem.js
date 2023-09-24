import React, {useState} from "react";
import {
    View,
    Text,
    ScrollView,
    RefreshControl,
} from 'react-native';

export default function() {

    const [atualizando,setAtualizando] = useState(false)

    const aoAtualizar=()=> {
        setAtualizando(true);

        //Codigo de atualização!

        setTimeout(()=>{setAtualizando(false)},3000);
    }

    return(
        <View>
            <ScrollView 
                style={{backgroundColor:'white',padding:15}}
                refreshControl={
                    <RefreshControl
                        refreshing={atualizando}
                    />
                }
            >
                <Text style={{color:'green'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nisi eget vulputate placerat. Vestibulum sit amet quam eu metus consectetur egestas. Cras dapibus, dui eu tristique hendrerit, diam lectus vulputate ipsum, in posuere tellus diam sed dui. Etiam laoreet sed lorem id fermentum. Integer magna ex, ullamcorper nec condimentum tincidunt, semper at mi. Curabitur sagittis aliquam odio vitae iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ex nunc, viverra vitae tellus at, semper imperdiet arcu. Phasellus scelerisque tempus aliquet. Nam odio massa, ultricies at bibendum vitae, pretium eu felis. Quisque a est faucibus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nisi eget vulputate placerat. Vestibulum sit amet quam eu metus consectetur egestas. Cras dapibus, dui eu tristique hendrerit, diam lectus vulputate ipsum, in posuere tellus diam sed dui. Etiam laoreet sed lorem id fermentum. Integer magna ex, ullamcorper nec condimentum tincidunt, semper at mi. Curabitur sagittis aliquam odio vitae iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ex nunc, viverra vitae tellus at, semper imperdiet arcu. Phasellus scelerisque tempus aliquet. Nam odio massa, ultricies at bibendum vitae, pretium eu felis. Quisque a est faucibus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nisi eget vulputate placerat. Vestibulum sit amet quam eu metus consectetur egestas. Cras dapibus, dui eu tristique hendrerit, diam lectus vulputate ipsum, in posuere tellus diam sed dui. Etiam laoreet sed lorem id fermentum. Integer magna ex, ullamcorper nec condimentum tincidunt, semper at mi. Curabitur sagittis aliquam odio vitae iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ex nunc, viverra vitae tellus at, semper imperdiet arcu. Phasellus scelerisque tempus aliquet. Nam odio massa, ultricies at bibendum vitae, pretium eu felis. Quisque a est faucibus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nisi eget vulputate placerat. Vestibulum sit amet quam eu metus consectetur egestas. Cras dapibus, dui eu tristique hendrerit, diam lectus vulputate ipsum, in posuere tellus diam sed dui. Etiam laoreet sed lorem id fermentum. Integer magna ex, ullamcorper nec condimentum tincidunt, semper at mi. Curabitur sagittis aliquam odio vitae iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ex nunc, viverra vitae tellus at, semper imperdiet arcu. Phasellus scelerisque tempus aliquet. Nam odio massa, ultricies at bibendum vitae, pretium eu felis. Quisque a est faucibus.
                </Text>
            </ScrollView>
        </View>
    )
}