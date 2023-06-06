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
                    title: 'overview',
                    headerBackgroundContainerStyle:{
                        backgroundColor: '#000',
                        height: 100,
                        borderColor: 'gainsboro',
                        borderWidth: 0.1,
                    }
                }
            }
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}