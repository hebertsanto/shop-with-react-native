import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "../pages/Home";
import { Detail } from "../pages/details";


const Stack = createStackNavigator();

export const Routes = () => {
    

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
                }
            }
            />
            <Stack.Screen name="Details" component={Detail} initialParams={{ id : 1}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}