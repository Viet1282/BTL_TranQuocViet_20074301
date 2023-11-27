import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import LoginPhone from './src/screens/LoginPhone';
import LoginPassword from './src/screens/LoginPassword';
import Home from './src/screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Endow from './src/screens/Endow';
import HeaderRedow from './src/components/HeaderEndow';
import HeaderEndow from './src/components/HeaderEndow';
import Individual from './src/screens/Individual';
// import Gif from 'react-native-gif';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import History1 from './src/screens/History1';
import HeaderHistory from './src/components/HeaderHistory';
import ChuyenTien1 from './src/screens/ChuyenTien1';
import ChuyenTien from './src/screens/ChuyenTien';
import ChuyenTien2 from './src/screens/ChuyenTien2';
import ChuyenTien3 from './src/screens/ChuyenTien3';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
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
        <Stack.Screen name="ChuyenTien1" component={ChuyenTien1} options={{headerShown: false}} />
        <Stack.Screen name="ChuyenTien" component={ChuyenTien} options={{headerShown: false}} />
        <Stack.Screen name="ChuyenTien2" component={ChuyenTien2} options={{headerShown: false}} />
        <Stack.Screen name="ChuyenTien3" component={ChuyenTien3} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({route}) => {
  const id = route.params?.id;
  console.log(id);
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Trang Chủ' screenOptions={{
      tabBarStyle: { backgroundColor: 'white', justifyContent: 'space-between', height: 63 },
      tabBarLabelStyle: { fontSize: 12, fontWeight: '700', marginBottom: 5 },
      headerShown: false,
    }}>
      <Tab.Screen name="Trang Chủ" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <Image style={{ height: 25, width: 25 }} source={focused ? require('./assets/ic_home_active_v4.png') : require('./assets/ic_home_v4.png')}></Image>
        )
      }} />
      <Tab.Screen name="Ưu Đãi" component={Endow} options={{
        header: HeaderEndow,
        headerShown: true,
        tabBarIcon: ({ focused }) => (
          <Image style={{ height: 25, width: 25 }} source={focused ? require('./assets/ic_home_voucher_active_v4.png') : require('./assets/ic_home_voucher_v4.png')}></Image>
        ),
      }} />
      <Tab.Screen name="Quét Mã QR" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <Image style={{ height: 65, width: 65, borderRadius: 40, bottom: 23 }} source={focused ? require('./assets/uiv3_scan_qr.gif') : require('./assets/uiv3_scan_qr.gif')}></Image>
        )
      }} />
      <Tab.Screen name="Lịch Sử" component={HistoryScreen} initialParams={{id}} options={{
        header: HeaderHistory,
        headerShown: true,
        tabBarIcon: ({ focused }) => (
          <Image style={{ height: 25, width: 25 }} source={focused ? require('./assets/ic_home_history_active_v4.png') : require('./assets/ic_home_history_v4.png')}></Image>
        )
      }} />
      <Tab.Screen name="Cá Nhân" component={Individual} options={{
        tabBarIcon: ({ focused }) => (
          <Image style={{ height: 25, width: 25 }} source={focused ? require('./assets/ic_home_account_active_v4.png') : require('./assets/ic_home_account_v4.png')}></Image>
        )
      }} />
    </Tab.Navigator>
  )
}

const HistoryScreen = ({route}) => {
  const Tab = createMaterialTopTabNavigator();
  const id = route.params?.id;
  console.log(id);
  return (
    <Tab.Navigator initialRouteName='Giao Dịch' screenOptions={{
        tabBarLabelStyle: { fontSize: 15, fontWeight: '700'},
      }} >
      <Tab.Screen name="Giao Dịch" component={History1} initialParams={{id}}  />
      <Tab.Screen name="Thống Kê" component={History1} initialParams={{id}}/>
      <Tab.Screen name="Sao Kê" component={History1} initialParams={{id}}/>
    </Tab.Navigator>
  )
}
