import React, { useState } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, Image} from "react-native";

interface ProductDetail {
    image?: string;
    title?: string;
    price?: number;
    id?: number;
    description?: string;
}

export const ModalCart = ({ image, title, description, price, id}: ProductDetail) => {
 
    const animatedValue = useState(new Animated.Value(-100))[0];
    const [cartValue, setCartValue] = useState(0);
    const animatedStyle = {
        transform: [{ translateX: animatedValue }],
    }
    Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200, // Duração da animação em milissegundos
        useNativeDriver: true, // Use o driver nativo para melhor desempenho
      }).start();

    return(
        <Animated.View style={[style.container, animatedStyle]}>
            {cartValue === 1 ? <Text>your cart is empty</Text>: (
                <View>
                 <Text style={style.containerTitle}>cart</Text>
                 <View style={style.ViewTeste}>
                 <Image source={{ uri: image }} style={{ height: 40, width: 30, marginLeft: 30}} />
                     <Text>{title}</Text>
                    </View>
                 <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Checkout</Text>
                 </TouchableOpacity>
               </View>
             )}
        </Animated.View>
    )
}

const style = StyleSheet.create({
    containerTitle:{
       fontWeight: 'bold',
       fontSize: 26
    },
    container:{
        height: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        width: '80%',
    },
    ViewTeste:{
       marginTop: 20,
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       gap: 20,
       borderBottomWidth: 0.3,
       paddingBottom: 10

    },
    button: {
        position: 'absolute',
        top: 600,
        width:280,
        height: 40,
        backgroundColor: 'black',
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: 'white',
        fontSize: 20
    }
})