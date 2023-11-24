import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Endow() {
    const navigation = useNavigation();
    const tinhNang = [
        { img: require('../../assets/ic_voucherhub_type_vienthong.png'), title: 'Viễn thông' },
        { img: require('../../assets/ic_voucherhub_type_hoadon.png'), title: 'Truyền hình' },
        { img: require('../../assets/ic_voucherhub_type_qr.png'), title: 'Quét QR' },
        { img: require('../../assets/ic_voucherhub_type_giaitri.png'), title: 'Giải trí - mua sắm' },
        { img: require('../../assets/ic_voucherhub_type_hocphi.png'), title: 'Học phí' },
        { img: require('../../assets/ic_voucherhub_type_dulich.png'), title: 'Di chuyển - du lịch' },
        { img: require('../../assets/ic_voucherhub_type_taichinh.png'), title: 'Tài chính - Bảo hiểm' },
        { img: require('../../assets/ic_voucherhub_type_hoadon_2.png'), title: 'Hóa đơn' },
    ]

    const dataUuDaiKhac = [
        { img: 'Uudai1 2.png', text: 'Hoàn 30.000đ nạp tài khoản VETC, ePass trên ...' },
        { img: 'Uudai1 2.png', text: 'Hoàn 30.000đ nạp tài khoản VETC, ePass trên ...' },
        { img: 'Uudai1 2.png', text: 'Hoàn 30.000đ nạp tài khoản VETC, ePass trên ...' },
        { img: 'Uudai1 2.png', text: 'Hoàn 30.000đ nạp tài khoản VETC, ePass trên ...' },
    ];
    return (
        <View style={styles.container}>
            <View style={{height:120}}></View>
            <ScrollView style={{ width: '100%', paddingHorizontal: 10 }}>

                <View style={{ width: '100%', height: 100, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity style={{ width: '45%', height: 60, border: 'solid 2px rgba(101, 101, 101, 0.4)', padding: 12, borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 10 }}>
                        <Image style={{ width: 45, height: 45, borderRadius: 15 }} source={require('../../assets/ic_voucherhub_entercode_svg.png')}></Image>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>Nhập mã</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '45%', height: 60, border: 'solid 2px rgba(101, 101, 101, 0.4)', padding: 12, borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 10 }}>
                        <Image style={{ width: 40, height: 40, borderRadius: 15 }} source={require('../../assets/ic_voucherhub_myvoucher_svg_new.png')}></Image>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>Voucher của tôi</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: '100%', height: 150, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20, flexWrap: 'wrap' }}>
                    {tinhNang.map((item, index) => {
                        return <TouchableOpacity key={index} style={{ width: 70, height: 100, borderRadius: 8, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginHorizontal: 10, gap: 5 }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 15 }} source={item.img} />
                            <Text style={{ fontSize: 13, fontWeight: '450', textAlign: 'center' }}>{item.title}</Text>
                        </TouchableOpacity>
                    })}
                </View>

                <View style={{ width: '100%', height: 300, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, flexWrap: 'wrap', padding: 10 }}>
                    <Text style={{ fontWeight: '700', fontSize: 24 }}>Săn ưu đãi</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: 'blue' }}>Xem tất cả</Text>
                    </TouchableOpacity>
                    <FlatList style={{ paddingTop: 8 }} data={dataUuDaiKhac} numColumns={2} renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ width: 160, height: 213, borderRadius: 15, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginHorizontal: 8,marginVertical:8, border: 'solid 1px grey' }}>
                                <Image style={{ width: 159, height: 150, borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: 'hidden', }} source={require('../../assets/' + item.img)} />
                                <Text style={{ fontSize: 13, fontWeight: '400', textAlign: 'center' }}>{item.text}</Text>
                                <Text style={{ color: 'blue', fontSize: 12, margin: 5 }}>Đang diễn ra</Text>
                            </TouchableOpacity>
                        )
                    }}></FlatList>
                </View>
            </ScrollView>

            {/* <ImageBackground style={{ position: 'absolute', width: '100%', height: 260, flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', padding: 20 }} source={require('../../assets/img_home_voucherhub_top.png')}>
                <Text style={{ fontSize: 18, fontWeight: '700', color: 'black' }}>Ưu đãi dành cho bạn</Text>
                <TouchableOpacity style={{ width: '96%', borderRadius: 15, backgroundColor: 'white', height: 35, margin: '2%', marginTop: 30, padding: 4 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ height: 26, width: 26 }} source={require('../../assets/ic_merchant_search.png')}></Image>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: 'grey', marginLeft: 10 }}>Tìm kiếm ưu đãi</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground> */}






        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
});
