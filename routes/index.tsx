import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "../pages/Home";
import { Detail } from "../pages/details";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

export const Routes = () => {
    
  const navigation = useNavigation();

  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={
                {
                    title: 'products',
                    headerStyle:{
                        backgroundColor: '#070707',
                        height: 100,
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <Button
                          title="cart"
                          color="#fff"
                          onPress={() => navigation.navigate('Details' as never)}
                        />
                      ),
                }
            }
            />
            <Stack.Screen name="Details" component={Detail} initialParams={{ id : 1}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}