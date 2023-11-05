import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './src/screens/login';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={login} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => {
  const bottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <bottomTab.Navigator>
        {/* <bottomTab.Screen name="Home" component={Home} /> */}
        {/* <bottomTab.Screen name="Settings" component={Settings} /> */}
      </bottomTab.Navigator>
    </NavigationContainer>



  )
}
