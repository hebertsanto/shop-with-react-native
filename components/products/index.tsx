import { useEffect, useState } from "react"
import { urlBase } from "../../api"
import {Image, StyleSheet, Text,TouchableOpacity,View  } from "react-native"
import { useNavigation } from "@react-navigation/native"
export const Products = () => {

  const [data, setData] = useState<Array <Product>>([])
  const navigation = useNavigation();
  
interface Product{
    image: string;
    title: string;
    price: number;
    id: any;
  }

  useEffect(() => {
    urlBase.get(`/products`)
    .then(res => setData(res.data))
    .catch(err => console.error(err))
  }, [])
  //fix the line 27
  return(
    <View style={styles.containerProducts}>
        {data?.map((item: Product) =>
          <View key={item.id} style={styles.containerItem}>
            <TouchableOpacity onPress={() => navigation.navigate('Details' as never, { id : item.id })} activeOpacity={1}> 
            <Image 
             style={styles.img} 
             resizeMode="cover"
             source={{ uri: `${item.image}` }} 
             />
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.price}>{item.price} $US</Text>
            </TouchableOpacity>
          </View>
        )}
        </View>
  )
}
const styles = StyleSheet.create({
    img: {
        height: 200,
        width: 140,
        borderRadius: 4,
      },
      containerProducts:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 7,
        justifyContent: 'center',
      },
      containerItem: {
        width: 170,
        marginTop: 30,
        borderWidth: 0.3,
        borderColor: 'rgba(200,200,200,890)',
        borderRadius: 3,
        padding: 10,
        
      },
      text: {
        fontSize: 15,
        paddingTop: 16,
        color: 'gray'
      },
      price: {
        color: 'green',
        fontSize: 17,
        paddingTop: 10
      }
})