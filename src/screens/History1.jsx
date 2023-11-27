import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fetchTransactions } from '../apis/transaction.api';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function History1({ route }) {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState('');
    const [loc, setLoc] = useState('');
    const groupByMonthAndYear = (dataList) => {
        const groups = new Map();
        dataList.forEach((item) => {
            const key = `${item.month}-${item.year}`;
            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key).push(item);
        });
        return Array.from(groups.values());
    };

    useEffect(() => {
        const getStoredUserId = async () => {
            const storedUserId = await AsyncStorage.getItem('userId');
            setUserId(storedUserId);
        }
        getStoredUserId();
    }, [])
    useEffect(() => {
        fetchTransactions(userId)
            .then((fetchedData) => {
                const filteredList = fetchedData.filter(item => item.code.includes(loc));
                const groupedData = groupByMonthAndYear(filteredList);
                setData(groupedData);
            })
    }, [loc,userId])

    const calculateIncome = (transactions) => {
        return transactions
            .filter(transaction => transaction.code === 'NHANTIEN' || transaction.code === 'NAPTIEN')
            .reduce((totalIncome, transaction) => totalIncome + transaction.amount, 0);
    };

    const calculateExpense = (transactions) => {
        return transactions
            .filter(transaction => transaction.code === 'CHUYENTIEN' || transaction.code === 'THANHTOAN' || transaction.code === 'RUTTIEN')
            .reduce((totalExpense, transaction) => totalExpense + transaction.amount, 0);
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '83%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, borderRadius: 10, margin: 10, width: '99%', height: 50, backgroundColor: 'white' }}>
                    <Image source={require('../../assets/ic_merchant_search 1.png')} style={{ height: 30, width: 30 }} />
                    <TextInput style={{ width: '80%', height: '100%', fontSize: 18, backgroundColor: 'transparent', color: 'grey', padding: 5 }} placeholder='Tìm kiếm giao dịch'></TextInput>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../assets/ic_history_filter 1.png')} style={{ height: 30, width: 30 }} />
                    <Text style={{ fontSize: 14 }}>Bộ lọc</Text>
                </View>
            </View>
            <View style={{ marginBottom: 5 }}>
                <ScrollView horizontal style={{ width: 380, marginHorizontal: 10, width: '95%' }}>
                    <TouchableOpacity style={{ marginLeft: 5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, height: 50, backgroundColor: 'white' }}
                        onPress={() => {
                            setLoc('');
                        }}>
                        <Text style={{ fontSize: 14, color: 'grey' }}>Tất cả</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, height: 50, backgroundColor: 'white' }}
                        onPress={() => {
                            setLoc('CHUYENTIEN');
                        }}
                    >
                        <Text style={{ fontSize: 14, color: 'grey' }}>Chuyển tiền</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, height: 50, backgroundColor: 'white' }}
                        onPress={() => {
                            setLoc('NHANTIEN');
                        }}
                    >
                        <Text style={{ fontSize: 14, color: 'grey' }}>Nhận tiền</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, height: 50, backgroundColor: 'white' }}
                        onPress={() => {
                            setLoc('NAPTIEN');
                        }}
                    >
                        <Text style={{ fontSize: 14, color: 'grey' }}>Nạp tiền</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, height: 50, backgroundColor: 'white' }}
                        onPress={() => {
                            setLoc('RUTTIEN');
                        }}
                    >
                        <Text style={{ fontSize: 14, color: 'grey' }}>Rút tiền</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, height: 50, backgroundColor: 'white' }}
                        onPress={() => {
                            setLoc('THANHTOAN');
                        }}
                    >
                        <Text style={{ fontSize: 14, color: 'grey' }}>Thanh toán</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <ScrollView style={{ width: '100%' }}>
                {data.map((group, groupIndex) => {
                    return (
                        <View key={groupIndex} style={{ alignItems: 'center' }}>
                            <View style={{ width: '100%', height: 62, backgroundColor: 'rgba(19, 120, 213, 0.1)', flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', width: '73%' }}>Tháng {group[0].month}/{group[0].year}</Text>
                                <View style={{ padding: 5, borderLeft: 'solid 1px black', height: 35 }}></View>
                                <View style={{ width: '28%' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 95 }}>
                                        <Text style={{ fontSize: 13, fontWeight: 'bold', marginLeft: 10 }}>Thu:</Text>
                                        <Text style={{ textAlign: 'right', fontSize: 13, fontWeight: 'bold', marginLeft: 10, color: 'blue' }}>{calculateIncome(group)}đ</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 95 }}>
                                        <Text style={{ fontSize: 13, fontWeight: 'bold', marginLeft: 10, width: 80 }}>Chi:</Text>
                                        <Text style={{ textAlign: 'right', fontSize: 13, fontWeight: 'bold', marginLeft: 10, width: 80, color: 'rgba(255, 55, 55, 1)' }}>{calculateExpense(group)}đ</Text>
                                    </View>

                                </View>
                            </View>
                            {group.reverse().map((item, index) => (
                                <View key={index} style={{ width: '95%', height: 70, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 7, marginTop: 10, padding: 10 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                        <View style={{ borderRadius: 40, backgroundColor: 'rgba(217, 217, 217, 0.5)', height: 30, width: 30, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../../assets/' + item.code + '.webp')} style={{ height: 20, width: 20 }} />
                                        </View>



                                        <View style={{ marginLeft: 10, justifyContent: 'space-between', width: '100%' }}>
                                            <Text style={{ fontSize: 16, fontWeight: 'bold', width: 270 }}>{item.title}</Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                                <Text style={{ fontSize: 14, color: 'green' }}>Thành công</Text>
                                                <Text style={{ fontSize: 16, fontWeight: '800', color: 'black' }}>{(item.code === 'CHUYENTIEN' || item.code === 'THANHTOAN') ? '-' : '+'}{item.amount}đ</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                                <Text style={{ fontSize: 14, color: 'grey' }}>{(item.code === 'CHUYENTIEN' || item.code === 'THANHTOAN') ? 'Từ Ví VNPT Pay' : 'Vào Ví VNPT Pay'}</Text>
                                                <Text style={{ fontSize: 14, color: 'grey', marginLeft: 10 }}>{item.time} ngày {item.day}/{item.month}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            ))}

                        </View>

                    );
                })}
            </ScrollView>
            
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
