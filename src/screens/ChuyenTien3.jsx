import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fetchUsers } from '../apis/users.api';


export default function ChuyenTien3() {
    const navigation = useNavigation();
    const route = useRoute();
    const { user,item,amount } = route.params;
    console.log(user);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/header_transfer.webp')} style={{ width: '100%', height: 140, resizeMode: 'cover', flex: 1, justifyContent: 'flex-start', alignItems: 'center' }} >
                <Image source={require('../../assets/img_myqr_logo_vnpt_two_line.png')} style={{ height: 50, width: 150, marginTop: 45 }}></Image>
                <Image source={require('../../assets/ic_payment_success_new.gif')} style={{ height: 60, width: 60, marginTop: 13 }}></Image>
                <Text style={{ fontSize: 22, fontWeight: '800', marginTop: 10 }}>Chuyển tiền thành công</Text>
                <Text style={{ fontSize: 22, fontWeight: '800', marginTop: 10, color: 'blue' }}>{amount}đ</Text>
                {/* <Text style={{ fontSize: 15, fontWeight: '400', marginTop: 8, color: 'grey' }}>Đến: 0987654321</Text> */}

                <View style={{ border: 'solid 1px grey', borderRadius: 10, width: '90%', marginTop: 10, padding: 10 }}>
                    <View style={{ flexDirection: 'row', borderBottom: 'dotted 2px grey' }}>
                        <View>
                            <Image source={require('../../assets/ic_vnpt_pay_new.png')} style={{ height: 40, width: 40 }}></Image>
                            <Image source={require('../../assets/angle-down_8442683.png')} style={{ height: 40, width: 12, marginLeft: 14, marginBottom: 1 }}></Image>
                            <Image source={require('../../assets/ic_vnpt_pay_new.png')} style={{ height: 40, width: 40 }}></Image>
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 15, marginBottom: 5 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>{user.lastName} {user.middleName} {user.name}</Text>
                            <Text style={{ fontSize: 17, fontWeight: '500', color: 'grey' }}>Ví VNPT Pay - {user.phone}</Text>
                            <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 35 }}>{item.lastName} {item.middleName} {item.name}</Text>
                            <Text style={{ fontSize: 17, fontWeight: '500', color: 'grey' }}>Ví VNPT Pay - {item.phone}</Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 10, borderBottom: 'dotted 2px grey', flexDirection: 'row', alignItems: 'flex-start', gap: 10, borderRadius: 5, backgroundColor: 'white', justifyContent: 'space-between', width: '100%' }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'grey' }}>Lời nhắn</Text>
                        <Text style={{ fontSize: 18, fontWeight: '500', width: 120 }}>{user.lastName} {user.middleName} {user.name} chuyen tien tu VNPT Money</Text>
                    </View>
                    <View style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 5, backgroundColor: 'white', justifyContent: 'space-between', width: '100%' }}>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: 'grey', color: 'blue' }}>Xem chi tiết giao dịch</Text>
                        <Image source={require('../../assets/ic_arrow_right_svg.png')} style={{ height: 25, width: 25 }}></Image>
                    </View>
                </View>


            </ImageBackground>
            <View style={{ marginBottom: 15, flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 5, backgroundColor: 'white', justifyContent: 'space-between', width: '90%', marginTop: 10 }}>
                <TouchableOpacity style={{ width: 170, height: 50, borderRadius: 10, backgroundColor: 'white', border: 'solid 1px blue', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    <Text style={{ fontSize: 17, fontWeight: '500', color: 'blue' }}>Về trang chủ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 170, height: 50, borderRadius: 10, backgroundColor: 'blue', border: 'solid 1px blue', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        navigation.navigate('ChuyenTien1', { item: item });
                    }}
                >
                    <Text style={{ fontSize: 17, fontWeight: '500', color: 'blue',color:'white' }}>Chuyển thêm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});