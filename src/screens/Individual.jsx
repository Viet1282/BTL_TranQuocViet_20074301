import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useEffect } from 'react';
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fetchUser } from '../apis/user.api';

export default function Individual(route) {
    const id = route.route.params?.id;
    // const id = 1;
    const navigation = useNavigation();
    const [user, setUser] = useState([]);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    useEffect(() => {
        fetchUser(id).then(setUser);
    }, [])

    const tinhNang = [
        { img: require('../../assets/Group 34.png'), title: 'QR của tôi' },
        { img: require('../../assets/Group 33.png'), title: 'Voucher' },
        { img: require('../../assets/Group 32.png'), title: 'Trợ giúp' },
        { img: require('../../assets/Group 31.png'), title: 'Thông tin cá nhân' },
    ]
    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={{ width: '100%', height: 360, backgroundColor: 'white', justifyContent: 'flex-start' }}>
                    <ImageBackground style={{ width: '100%', height: 150, flex: 1, justifyContent: 'flex-start', alignItems: 'center' }} source={require('../../assets/img_p_header_default.png')}>
                        <Image style={{ height: 60, width: 60, marginTop: 120, border: 'solid 4px white', borderRadius: 30 }} source={{ uri: user.avatar }}></Image>
                        <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 5 }}>{user.lastName + ' ' + user.middleName + ' ' + user.name}</Text>
                        <Text style={{ fontSize: 12, fontWeight: '600', marginTop: 3 }}>{user.phone}</Text>

                        <View style={{ width: '100%', height: 150, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
                            {tinhNang.map((item, index) => {
                                return <TouchableOpacity key={index} style={{ width: 70, height: 100, borderRadius: 8, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginHorizontal: 10, gap: 5 }}>
                                    <Image style={{ width: 50, height: 50, borderRadius: 15 }} source={item.img} />
                                    <Text style={{ fontSize: 13, fontWeight: '450', textAlign: 'center' }}>{item.title}</Text>
                                </TouchableOpacity>
                            })}
                        </View>
                    </ImageBackground>
                </View>

                <View style={{ width: 'auto', height: 155, justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 15, marginHorizontal: 10, paddingHorizontal: 14, paddingVertical: 6, backgroundColor: 'white', borderRadius: 10 }}>
                    <Text style={{ fontWeight: '700', fontSize: 15 }}>Tiện ích</Text>

                    <View style={{ flexDirection: 'row', alignContent: 'space-between', width: '100%', height: 60, alignItems: 'center', gap: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/ic_face_id_auth 1.png')} />
                        <View style={{width:'70%'}}>
                            <Text style={{ fontWeight: '700', fontSize: 15 }}>Xác thực sinh trắc học</Text>
                            <Text style={{ fontWeight: '400', fontSize: 13 }}>Khi đăng nhập và thanh toán</Text>
                        </View>
                        <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                    </View>

                    <View style={{ width: '88%',marginLeft:'10%', height: 2, backgroundColor:'rgba(0, 0, 0, 0.2)'}}></View>

                    <View style={{ flexDirection: 'row', alignContent: 'space-between', width: '100%', height: 60, alignItems: 'center', gap: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/ic_face_id_auth 1 (1).png')} />
                        <View style={{width:'70%'}}>
                            <Text style={{ fontWeight: '700', fontSize: 15 }}>Thanh toán nhanh</Text>
                            <Text style={{ fontWeight: '400', fontSize: 13 }}>Bỏ qua OTP khi xác thực và thanh toán</Text>
                        </View>
                        <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch2}
                                value={isEnabled2}
                            />
                    </View>
                </View>
                <View style={{ width: 'auto', height: 285, justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 15, marginHorizontal: 10, paddingHorizontal: 14, paddingVertical: 6, backgroundColor: 'white', borderRadius: 10 }}>
                    <Text style={{ fontWeight: '700', fontSize: 15 }}>Quản lí tài khoản</Text>

                    <View style={{ flexDirection: 'row', alignContent: 'space-between', width: '100%', height: 50, alignItems: 'center', gap: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/ic_face_id_auth 1 (2).png')} />
                        <Text style={{ fontWeight: '400', fontSize: 13 }}>Thông tin tài khoản</Text>                        
                    </View>

                    <View style={{ width: '88%',marginLeft:'10%', height: 2, backgroundColor:'rgba(0, 0, 0, 0.2)'}}></View>

                    <View style={{ flexDirection: 'row', alignContent: 'space-between', width: '100%', height: 50, alignItems: 'center', gap: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/ic_face_id_auth 1 (3).png')} />
                        <Text style={{ fontWeight: '400', fontSize: 13 }}>Ngân hàng liên kết</Text>   
                    </View>

                    <View style={{ width: '88%',marginLeft:'10%', height: 2, backgroundColor:'rgba(0, 0, 0, 0.2)'}}></View>

                    <View style={{ flexDirection: 'row', alignContent: 'space-between', width: '100%', height: 50, alignItems: 'center', gap: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/ic_face_id_auth 1 (4).png')} />
                        <Text style={{ fontWeight: '400', fontSize: 13 }}>Theo dõi hóa đơn</Text>   
                    </View>

                    <View style={{ width: '88%',marginLeft:'10%', height: 2, backgroundColor:'rgba(0, 0, 0, 0.2)'}}></View>

                    <View style={{ flexDirection: 'row', alignContent: 'space-between', width: '100%', height: 50, alignItems: 'center', gap: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/ic_face_id_auth 1 (5).png')} />
                        <Text style={{ fontWeight: '400', fontSize: 13 }}>Thanh toán tự động</Text>   
                    </View>

                    <View style={{ width: '88%',marginLeft:'10%', height: 2, backgroundColor:'rgba(0, 0, 0, 0.2)'}}></View>

                    <View style={{ flexDirection: 'row', alignContent: 'space-between', width: '100%', height: 50, alignItems: 'center', gap: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/ic_face_id_auth 1 (6).png')} />
                        <Text style={{ fontWeight: '400', fontSize: 13 }}>Mở khóa tài khoản ngân hàng</Text>   
                    </View>
                </View>

                <View style={{ width: 'auto', height: 80, justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 15, marginHorizontal: 10, paddingHorizontal: 14, paddingVertical: 6, backgroundColor: 'white', borderRadius: 10 }}>
                    <Text style={{ fontWeight: '700', fontSize: 15 }}>Kinh doanh</Text>

                    <View style={{ flexDirection: 'row', alignContent: 'space-between', width: '100%', height: 50, alignItems: 'center', gap: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/ic_face_id_auth 1 (9).png')} />
                        <Text style={{ fontWeight: '400', fontSize: 13 }}>Đăng kí điểm chấp nhận thanh toán</Text>                        
                    </View>

                </View>

                <View style={{ width: 'auto', height: 235, justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 15, marginHorizontal: 10, paddingHorizontal: 14, paddingVertical: 6, backgroundColor: 'white', borderRadius: 10 }}>
                    <Text style={{ fontWeight: '700', fontSize: 15 }}>Khác</Text>

                    <View style={{ flexDirection: 'row', alignContent: 'space-between', width: '100%', height: 50, alignItems: 'center', gap: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/ic_face_id_auth 1 (10).png')} />
                        <Text style={{ fontWeight: '400', fontSize: 13 }}>Chia sẻ bạn bè</Text>                        
                    </View>

                    <View style={{ width: '88%',marginLeft:'10%', height: 2, backgroundColor:'rgba(0, 0, 0, 0.2)'}}></View>

                    <View style={{ flexDirection: 'row', alignContent: 'space-between', width: '100%', height: 50, alignItems: 'center', gap: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/ic_face_id_auth 1 (7).png')} />
                        <Text style={{ fontWeight: '400', fontSize: 13 }}>Điều khoản sử dụng</Text>   
                    </View>

                    <View style={{ width: '88%',marginLeft:'10%', height: 2, backgroundColor:'rgba(0, 0, 0, 0.2)'}}></View>

                    <View style={{ flexDirection: 'row', alignContent: 'space-between', width: '100%', height: 50, alignItems: 'center', gap: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/ic_face_id_auth 1 (7).png')} />
                        <Text style={{ fontWeight: '400', fontSize: 13 }}>Đổi mật khẩu</Text>   
                    </View>

                    <View style={{ width: '88%',marginLeft:'10%', height: 2, backgroundColor:'rgba(0, 0, 0, 0.2)'}}></View>

                    <View style={{ flexDirection: 'row', alignContent: 'space-between', width: '100%', height: 50, alignItems: 'center', gap: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/ic_face_id_auth 1 (8).png')} />
                        <Text style={{ fontWeight: '400', fontSize: 13 }}>Đăng xuất</Text>   
                    </View>
                </View>
                <Text style={{textAlign:'center',marginTop:20, marginBottom:60}}>Phiên bản 1.1.6.9</Text>


            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(217, 217, 217, 1)',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});