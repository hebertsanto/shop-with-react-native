import { useEffect, useState } from "react"
import { urlBase } from "../../api"
import axios from "axios"
import { View , Image, Text, StyleSheet } from "react-native"
export const Products = () => {

  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
    .then(res => setData(res.data))
    .catch(err => console.error(err))
  }, [])

  return(
    <View style={styles.containerProducts}>
        {data?.map((item: any) =>
          <View key={item.id} style={styles.containerItem}>
            <Image source={{ uri: `${item.image}` }} style={styles.img} />
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
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
        justifyContent: 'center'
      },
      containerItem: {
        width: 170,
        marginTop: 30
      },
      text: {
        fontSize: 12,
        paddingTop: 16,
        color: 'gray'
      },
      price: {
        color: 'green'
      }
})