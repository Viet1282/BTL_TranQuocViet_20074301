import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import LoginPhone from './src/screens/LoginPhone';
import LoginPassword from './src/screens/LoginPassword';
import In from './src/screens/TestInput';
import Home from './src/screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Endow from './src/screens/Endow';
import HeaderRedow from './src/components/HeaderEndow';
import HeaderEndow from './src/components/HeaderEndow';
// import Gif from 'react-native-gif';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen name="In" component={In} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPhone" component={LoginPhone} options={{
          headerTitle: '',
          headerBackImageSource: require('./assets/back.png'),
          headerStyle: {
            height: 55,
          }
        }} />
        <Stack.Screen name="LoginPassword" component={LoginPassword} options={{
          headerTitle: '',
          headerBackImageSource: require('./assets/back.png'),
          headerStyle: {
            height: 55,
          }
        }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Ưu Đãi' screenOptions={{
      tabBarStyle: { backgroundColor: 'white', justifyContent: 'space-between', height: 63},
      tabBarLabelStyle: { fontSize: 12, fontWeight: '700', marginBottom: 5 },
      headerShown: false,
    }}>
      <Tab.Screen name="Trang Chủ" component={Home} options={{
        tabBarIcon: ({focused}) => (
          <Image style={{ height: 25, width: 25 }} source={focused?require('./assets/ic_home_active_v4.png'):require('./assets/ic_home_v4.png')}></Image>
        )
      }} />
      <Tab.Screen name="Ưu Đãi" component={Endow} options={{
        header: HeaderEndow,
        headerShown: true,
        tabBarIcon: ({focused}) => (
          <Image style={{ height: 25, width: 25 }} source={focused?require('./assets/ic_home_voucher_active_v4.png'):require('./assets/ic_home_voucher_v4.png')}></Image>
        ),
      }} />
      <Tab.Screen name="Quét Mã QR" component={Home} options={{
        tabBarIcon: ({focused}) => (
          <Image style={{ height: 65, width: 65, borderRadius:40,bottom:23 }} source={focused?require('./assets/uiv3_scan_qr.gif'):require('./assets/uiv3_scan_qr.gif')}></Image>
        )
      }} />
      <Tab.Screen name="Lịch Sử" component={Home} options={{
        tabBarIcon: ({focused}) => (
          <Image style={{ height: 25, width: 25 }} source={focused?require('./assets/ic_home_history_active_v4.png'):require('./assets/ic_home_history_v4.png')}></Image>
        )
      }} />
      <Tab.Screen name="Cá Nhân" component={Home} options={{
        tabBarIcon: ({focused}) => (
          <Image style={{ height: 25, width: 25 }} source={focused?require('./assets/ic_home_account_active_v4.png'):require('./assets/ic_home_account_v4.png')}></Image>
        )
      }} />
    </Tab.Navigator>
  )
}
