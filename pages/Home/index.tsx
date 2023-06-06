import { ScrollView, StyleSheet} from "react-native/"
import { Products } from "../../components/products"
export const Home = () => {
  return(
    <ScrollView style={style.homeContainer}>
      <Products />
    </ScrollView>
  )
}

const style = StyleSheet.create({
    homeContainer:{
        backgroundColor: '#fff'
    }
})