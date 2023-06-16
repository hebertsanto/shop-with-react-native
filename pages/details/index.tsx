import { View, Text, Image, StyleSheet, Button, Touchable, TouchableOpacity, ScrollView } from "react-native"
import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { urlBase } from "../../api";

export const Detail = () => {
    const route = useRoute();
    const { id }: any = route.params;
    const [dataDetail, setDataDetail] = useState<ProductDetail>();
    const [loading, setLoading] = useState(true)
    
    interface ProductDetail {
        image: string;
        title: string;
        price: number;
        id: number;
        description: string;
    }
    useEffect(() => {
        urlBase.get(`/products/${id}`)
            .then(res => {
                setDataDetail(res.data)
                setLoading(false)
            })
            .catch(err => console.error(err))
    }, [id])


    function handleAddCart(product?: ProductDetail) {
        console.log(product)
        if (product) {
            alert('add cart successfully')
        } else {
            console.log('error')
        }
    }
    return (
        <ScrollView>
            {loading ? <Text>loading</Text> : (
                <View style={styles.container}>
                    <Image source={{ uri: dataDetail?.image }} style={{ height: 400, width: 300, marginLeft: 30 }} />
                    <View>
                        <Text style={styles.text}>{dataDetail?.title}</Text>
                        <Text style={styles.detailsText}>{dataDetail?.description}</Text>
                        <Text style={styles.price}>{dataDetail?.price}$US</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnBuy}>
                            <Button
                                title="buy"

                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnCart} onPress={() => handleAddCart}>
                            <Button
                                title="add cart"
                                color='#000000'
                                onPress={() => handleAddCart(dataDetail)}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '120%',
    },
    text: {
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    btnBuy: {
        backgroundColor: '#23b6fa',
        margin: 5,
        height: 40,
        width: 360,
        fontWeight: 'bold',
    },
    btnCart: {
        backgroundColor: 'black',
        margin: 5,
        height: 40,
        width: 360,
        fontSize: 20,
        fontWeight: 'bold',

    },
    detailsText: {
        padding: 6
    },
    price: {
        color: 'green',
        fontSize: 20,
        padding: 5,
    }

})