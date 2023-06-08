import { View, Text, Image, StyleSheet } from "react-native"
import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { urlBase } from "../../api";

export const Detail = () => {
    const route = useRoute();
    const { id }: any = route.params;
    const [dataDetail, setDataDetail] = useState<ProductDetail>();
  
    useEffect(() => {
        urlBase.get(`/products/${id}`)
        .then(res => setDataDetail(res.data))
        .catch(err => console.error(err))
    }, [id])

    interface ProductDetail{
        image: string;
        title: string;
        price: number;
        id: number;
      }

    return(
        <View style={styles.container}>
            <Image source={{ uri : dataDetail?.image}} style={{ height: 420, width: 400}}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff'
    }
})