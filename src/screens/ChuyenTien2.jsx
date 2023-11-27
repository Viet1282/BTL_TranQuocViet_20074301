import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fetchUser } from '../apis/user.api';
import { fetchUsers } from '../apis/users.api';

export default function ChuyenTien2() {
    const navigation = useNavigation();
    const route = useRoute();
    const { item, amount } = route.params;
    console.log(item);
    console.log(amount);
    const [user, setUser] = useState({});
    useEffect(() => {
        const getStoredUser = async () => {
            const storedUser = await AsyncStorage.getItem('user');
            console.log(storedUser);
            setUser(JSON.parse(storedUser));
        };
        getStoredUser();
    }, [])
    const handleHoanThanh = async (user,item,amount) => {
        await AsyncStorage.setItem('user', JSON.stringify(user));
        navigation.navigate('ChuyenTien3',{user,item,amount});
      };
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', height: 60, width: '100%', padding: 15, alignItems: 'center', borderBottom: 'solid 1px rgba(217, 217, 217, 0.5)', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image source={require('../../assets/back.png')} style={{ marginLeft: 10, height: 30, width: 30 }}></Image>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 5, backgroundColor: 'white', justifyContent: 'center', width: '100%' }}>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>Xác nhận giao dịch</Text>
                </View>
            </View>
            <View style={{ width: '100%', padding: 20, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 17, fontWeight: '700', marginBottom: 10 }}>Nguồn tiền</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 5, backgroundColor: 'white', justifyContent: 'flex-start', width: '100%' }}>
                    <Image source={require('../../assets/ic_vnpt_pay_new.png')} style={{ height: 40, width: 40 }}></Image>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 5, width: '60%' }}>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>Ví VNPT Pay</Text>
                        <Text style={{ fontSize: 14, fontWeight: '400' }}>{user.balance}đ</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', height: 12, backgroundColor: 'rgba(123, 152, 255, 0.18)' }}></View>
            <View style={{ width: '100%', padding: 20, backgroundColor: 'white', gap: 5 }}>
                <Text style={{ fontSize: 17, fontWeight: '700', marginBottom: 10 }}>Chi tiết giao dịch</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 5, backgroundColor: 'white', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: 'grey' }}>Tài khoản nhân</Text>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>VNPT Money</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 5, backgroundColor: 'white', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: 'grey' }}>Tên người nhận</Text>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.lastName} {item.middleName} {item.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 5, backgroundColor: 'white', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: 'grey' }}>Số điện thoại</Text>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.phone}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 5, backgroundColor: 'white', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: 'grey' }}>Số tiền chuyển</Text>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>{amount} đ</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 5, backgroundColor: 'white', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: 'grey' }}>Phí giao dịch</Text>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: 'green' }}>MIễn phí</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, borderRadius: 5, backgroundColor: 'white', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: 'grey' }}>Nội dung giao dịch</Text>
                    <Text style={{ fontSize: 18, fontWeight: '500', width: 120 }}>{user.lastName} {user.middleName} {user.name} chuyen tien tu VNPT Money</Text>
                </View>
            </View>
            <SafeAreaView style={styles.bottomView}>
                <TouchableOpacity style={{ ...styles.buttonSubmit, backgroundColor: 'rgba(31, 73, 222, 0.89)' }} onPress={() => {
                    user.balance = user.balance - parseInt(amount);
                    item.balance = item.balance + parseInt(amount);
                    fetch(`https://6549dd1de182221f8d52037f.mockapi.io/user/${user.id}`, {
                        method: 'PUT', // or PATCH
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(user)
                    }).then(res => {
                        if (res.ok) {
                            return res.json();
                        }
                        // handle error
                    }).then(task => {
                        // Do something with updated task
                    }).catch(error => {
                        // handle error
                    })
                    fetch(`https://6549dd1de182221f8d52037f.mockapi.io/user/${item.id}`, {
                        method: 'PUT', // or PATCH
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(item)
                    }).then(res => {
                        if (res.ok) {
                            return res.json();
                        }
                        // handle error
                    }).then(task => {
                        // Do something with updated task
                    }).catch(error => {
                        // handle error
                    })
                    const currentTime = new Date();
                    const newTransaction = {
                        "title": `Chuyển tiền đến ${item.lastName} ${item.middleName} ${item.name}`,
                        "amount": parseInt(amount),
                        "time": `${currentTime.getHours()}:${currentTime.getMinutes()}`,
                        "day": currentTime.getDate(),
                        "month": currentTime.getMonth() + 1,
                        "year": currentTime.getFullYear(),
                        "code": "CHUYENTIEN",
                    };
                    console.log(newTransaction);
                    fetch(`https://6549dd1de182221f8d52037f.mockapi.io/user/${user.id}/Transaction`, {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(newTransaction)
                    }).then(res => {
                        if (res.ok) {
                            return res.json();
                        }
                        // handle error
                    }).then(task => {
                        // do something with the new task
                    }).catch(error => {
                        // handle error
                    })

                    handleHoanThanh(user,item,amount);
                }}>
                    <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500' }}>Chuyển tiền</Text>
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