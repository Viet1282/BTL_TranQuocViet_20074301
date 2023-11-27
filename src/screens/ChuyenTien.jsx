import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fetchUsers } from '../apis/users.api';


export default function ChuyenTien() {
    const navigation = useNavigation();
    var [search, setSrearch] = useState('');
    const [data, setData] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    useEffect(() => {
        fetchUsers().then(setData);
    }, [])
    console.log(data);

    useEffect(() => {
        if (search.length === 10) {
            setFilteredList(data.filter(item => item.phone.includes(search)));
        } else {
            setFilteredList([]);
        }
    }, [search])

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/background_blue_full.webp')} style={{ width: '100%', height: 220, resizeMode: 'cover', flex: 1, justifyContent: 'flex-start', alignItems: 'center' }} >
                <View style={{ flexDirection: 'row', height: 70, width: '100%', padding: 15, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Home');
                    }}>
                        <Image source={require('../../assets/back.png')} style={{ height: 30, width: 30 }}></Image>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 21, fontWeight: '600', color: 'white', marginLeft: 90 }}>Chuyển tiền</Text>
                </View>
                {search === '' ? <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, padding: 18, borderRadius: 10, backgroundColor: 'rgba(255, 255, 255, 0.4)', justifyContent: 'space-between', width: '100%', height: 50 }}>
                        <Image source={require('../../assets/search-icon.png')} style={{ height: 25, width: 25 }}></Image>
                        <TextInput onChangeText={setSrearch} value={search} style={{ color: 'white', fontSize: 17, width: '80%', outlineColor: 'transparent', }} placeholder='Nhập tên hoặc số điện thoại' autoFocus={true}></TextInput>
                        <Image source={require('../../assets/book_7559182.png')} style={{ height: 30, width: 30 }}></Image>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                        <TouchableOpacity style={{ width: 170, height: 130, borderRadius: 10, backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 40, padding: 15 }}>
                            <Image source={require('../../assets/img_app_launcher_default.png')} style={{ height: 47, width: 47 }}></Image>
                            <Text style={{ fontSize: 15, fontWeight: '600' }}>Đến VNPT Money</Text>
                            <Text style={{ fontSize: 13, fontWeight: '400' }}>Miễn phí - chỉ cần SĐT </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 170, height: 130, borderRadius: 10, backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 40, padding: 15 }}>
                            <Image source={require('../../assets/bank_5646181.png')} style={{ height: 45, width: 45 }}></Image>
                            <Text style={{ fontSize: 15, fontWeight: '600' }}>Đến ngân hàng</Text>
                            <Text style={{ fontSize: 13, fontWeight: '400' }}>Qua số thẻ/TK/mã ...</Text>
                        </TouchableOpacity>
                    </View>
                </View> : <View style={{ width: '90%', alignItems: 'center' }}>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, padding: 18, borderRadius: 10, backgroundColor: 'rgba(255, 255, 255, 0.4)', justifyContent: 'flex-start', width: '85%', height: 50 }}>
                            <Image source={require('../../assets/search-icon.png')} style={{ height: 25, width: 25 }}></Image>
                            <TextInput value={search} onChangeText={setSrearch} style={{ color: 'white', fontSize: 17, width: '80%', outlineColor: 'transparent', }} placeholder='Nhập tên hoặc số điện thoại' autoFocus={true}></TextInput>
                            <Image source={require('../../assets/book_7559182.png')} style={{ height: 30, width: 30 }}></Image>
                        </View>
                        <TouchableOpacity style={{ margin: 15 }} onPress={() => {
                            setSrearch('');
                        }}>
                            <Text style={{ color: 'white', fontSize: 17 }}>Trở lại</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderRadius: 7, width: '100%', backgroundColor: 'white', margin: 15, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                        {filteredList.length === 0 ? (
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../../assets/attention_7666088.png')} style={{ height: 60, width: 60 }}></Image>
                                <Text style={{ fontSize: 17, fontWeight: '500' }}>Không có kết quả tìm kiếm cho</Text>
                                <Text style={{ fontSize: 17, fontWeight: '500' }}>{search}</Text>
                            </View>
                        ) : (
                            <FlatList style={{ width: '100%' }}
                                data={filteredList}
                                renderItem={({ item, index }) => (
                                    <View style={{ width: '100%', alignItems: 'flex-start' }}>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, borderRadius: 5, backgroundColor: 'white', justifyContent: 'flex-start', width: '100%' }}
                                            onPress={() => {
                                                navigation.navigate('ChuyenTien1', { item: item });
                                            }}
                                        >
                                            <Image source={{ uri: item.avatar }} style={{ height: 40, width: 40 }}></Image>
                                            <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 5, width: '80%' }}>
                                                <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.name}</Text>
                                                <Text style={{ fontSize: 14, fontWeight: '400', color: 'grey' }}>{item.phone}</Text>
                                            </View>

                                        </TouchableOpacity>

                                    </View>
                                )}
                            />
                        )}
                    </View>




                </View>}
            </ImageBackground>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(123, 152, 255, 0.18)',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});