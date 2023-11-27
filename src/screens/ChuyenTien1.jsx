import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fetchUser } from '../apis/user.api';
import { fetchUsers } from '../apis/users.api';

export default function ChuyenTien1({ route }) {
    const navigation = useNavigation();
    const item = route.params?.item;
    const [amount, setAmount] = useState('');
    console.log(item);
    const [user, setUser] = useState({});
    useEffect(() => {
        const getStoredUser = async () => {
            const storedUser = await AsyncStorage.getItem('user');
            console.log(storedUser);
            setUser(JSON.parse(storedUser));
        };
        getStoredUser();
    }, [])
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', height: 70, width: '100%', padding: 15, alignItems: 'center', borderBottom: 'solid 1px rgba(217, 217, 217, 0.5)', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ChuyenTien');
                }}>
                    <Image source={require('../../assets/back.png')} style={{ height: 30, width: 30 }}></Image>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 5, backgroundColor: 'white', justifyContent: 'flex-start', width: '100%' }}>
                    <Image source={{ uri: item.avatar }} style={{ height: 40, width: 40 }}></Image>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 5, width: '60%' }}>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.lastName} {item.middleName} {item.name}</Text>
                        <Text style={{ fontSize: 14, fontWeight: '400'}}>VNPT Money - {item.phone}</Text>
                    </View>
                    <TouchableOpacity style={{ width: 70, height: 30, borderRadius: 15, backgroundColor: 'rgba(0, 102, 255, 0.1)', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Thay đổi</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{borderBottom:'solid 1px grey', width:'90%',paddingTop:20}}>
                <Text style={{color:'grey'}}>Số tiền cần chuyển</Text>
                <TextInput value={amount} onChangeText={setAmount} style={{color:'grey', width: '100%', height: 50, borderRadius: 10, padding: 10, fontSize: 22, fontWeight: '700' }} placeholder='Nhập số tiền'></TextInput>
            </View>

            <SafeAreaView style={styles.bottomView}>
                <TouchableOpacity style={{ ...styles.buttonSubmit,backgroundColor:'rgba(31, 73, 222, 0.89)' }} onPress={() => {
                    if(amount > 1000 && amount !== '' && amount <= user.balance) 
                        navigation.navigate('ChuyenTien2', { item, amount })
                }}>
                    <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500' }}>Tiếp tục</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonSubmit: {
        width: 354,
        height: 54,
        backgroundColor: 'rgba(145, 145, 145, 1)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    bottomView: {
        width: '100%',
        height: 90,
        // backgroundColor: '#FF9800', 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
});