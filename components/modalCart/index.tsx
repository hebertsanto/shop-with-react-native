import React, { useState } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, Image } from "react-native";
import { ProductDetail } from '../../interfaces/ProductsDetails'

export const ModalCart = ({ image, title, price }: ProductDetail) => {

    const animatedValue = useState(new Animated.Value(-100))[0];
    const [cartValue, setCartValue] = useState(1);
    const [quant, setQuantity] = useState(price);

    const handleIncrementQt = () => {
        setQuantity(quant + price)
        setCartValue(cartValue + 1);
    }
    const handleDecrementQt = () => {
        setQuantity(quant - price)
        setCartValue(cartValue - 1);
    }
    const animatedStyle = {
        transform: [{ translateX: animatedValue }],
    }
    Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
    }).start();

    return (
        <Animated.View style={[style.container, animatedStyle]}>
            {cartValue === 0 ? <Text>your cart is empty</Text> : (
                <View>
                    <Text style={style.containerTitle}>cart</Text>
                    <View style={style.ViewTeste}>
                        <Image source={{ uri: image }} style={{ height: 40, width: 30, marginLeft: 30 }} />
                        {title?.length < 80 ? 
                                <View>
                                 <Text style={style.titleProduct}>{title}</Text>
                                 <Text>quantidade : {cartValue}</Text>
                                </View>
                            :(
                                <Text>{title?.slice(0, 30) + '...'}</Text>
                            )}
                    </View>
                    <View>
                        <Text>
                            subtotal: {quant.toFixed(2)}
                        </Text>
                        <View style={style.containerAddAndRemove}>
                            <TouchableOpacity style={style.sizeButton}>
                                <Text style={style.textButton} onPress={handleIncrementQt}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.sizeButton}>
                                <Text style={style.textButton} onPress={handleDecrementQt}>-</Text>
                            </TouchableOpacity>
                        </View>
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
    containerTitle: {
        fontWeight: 'bold',
        fontSize: 26
    },
    containerAddAndRemove: {
        marginTop: 6,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
        padding: 5
    },
    sizeButton: {
        borderWidth: 1,
        width: 40,
        fontSize: 60
    },
    textButton: {
        textAlign: 'center',
        fontSize: 40,
    },
    titleProduct: {
        fontSize: 13,
        marginEnd: 20,
    },
    container: {
        height: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        width: '90%',
    },
    ViewTeste: {
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
        width: 280,
        height: 40,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
})