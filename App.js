import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import LoginPhone from './src/screens/LoginPhone';
import LoginPassword from './src/screens/LoginPassword';
import In from './src/screens/TestInput';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginPassword'>
      {/* <Stack.Screen name="In" component={In} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPhone" component={LoginPhone} options={{
          headerTitle: '',
          headerBackImageSource: require('./assets/back.png'),
          headerStyle:{
            height: 55,
          }
        }} />
        <Stack.Screen name="LoginPassword" component={LoginPassword} options={{
          headerTitle: '',
          headerBackImageSource: require('./assets/back.png'),
          headerStyle:{
            height: 55,
          }
        }} />
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
