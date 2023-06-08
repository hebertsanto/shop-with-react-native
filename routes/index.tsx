import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator();
import { Home } from "../pages/Home";

export const Routes = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={
                {
                    title: 'all products',
                    headerStyle:{
                        backgroundColor: '#070707dc',
                        height: 100,
                    },
                    headerTintColor: '#fff'
                }
            }
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}