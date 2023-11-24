import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fetchUser } from '../apis/user.api';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home(route) {
  const navigation = useNavigation();
  const id = route.route.params?.id;
  // const id = 1;
  const [balance, setBalance] = useState(
    <Image style={{ width: 68, height: 8 }} source={require('../../assets/6-hide.png')}></Image>
  );
  // Show-Hide-Pass
  const [pwHide, setPwHide] = useState(false);
  const [pwHideImg, setPwHideImg] = useState(require('../../assets/ic_hide_pass.png'));
  // DataApi
  const [data, setData] = useState([]);
  const datatemp = [
    { img: 'ic_home_cashin.png', text: 'Nạp tiền' },
    { img: 'ic_home_withdraw.png', text: 'Rút tiền' },
    { img: 'ic_home_transfer_money.png', text: 'Chuyển tiền' },
    { img: 'ic_home_voucher.png', text: 'Ưu đãi' }
  ];
  const datatemp2 = [
    { img: 'ic_topup_new.gif', text: 'Nạp điện thoại' },
    { img: 'icon_bill.png', text: 'Hóa đơn viễn thông' },
    { img: 'ic-dien.png', text: 'Tiền điện' },
    { img: 'ic-nuoc.png', text: 'Tiền nước' }
  ];
  const dataDV = [
    { img: 'ic_vnedu 1.png', text: 'Học phí VnEdu' },
    { img: 'ic_vnedu 1.png', text: 'VnEdu' },
    { img: 'ic_vnedu 1.png', text: 'VnEdu' },
    { img: 'ic_vnedu 1.png', text: 'VnEdu' },
    { img: 'ic_vnedu 1.png', text: 'VnEdu' },
    { img: 'ic_vnedu 1.png', text: 'VnEdu' },
  ];

  const dataDanhRiengChoBan = [
    { img: 'event1.png', title: 'Chỉ một bước nhận quà...', text: 'Tặng 10.000đ vào tài khoản chính trên tài khoản điện thoại di động của khách hàng.' },
    { img: 'event1.png', title: 'Chỉ một bước nhận quà...', text: 'Tặng 10.000đ vào tài khoản chính trên tài khoản điện thoại di động của khách hàng.' },
    { img: 'event1.png', title: 'Chỉ một bước nhận quà...', text: 'Tặng 10.000đ vào tài khoản chính trên tài khoản điện thoại di động của khách hàng.' },
  ];

  const dataUuDaiKhac = [
    { img: 'Uudai1 2.png', text: 'Hoàn 30.000đ nạp tài khoản VETC, ePass trên ...' },
    { img: 'Uudai1 2.png', text: 'Hoàn 30.000đ nạp tài khoản VETC, ePass trên ...' },
  ];
  useEffect(() => {
    fetchUser(id).then(setData);
    if (pwHide) {
      setPwHideImg(require('../../assets/ic_view_svg.png'));
      setBalance(<Text style={{ fontSize: 16 }}>{data.balance + 'đ'}</Text>)
    } else {
      setPwHideImg(require('../../assets/ic_hide_pass.png'));
      setBalance(<Image style={{ width: 68, height: 8 }} source={require('../../assets/6-hide.png')}></Image>)
    }
  }, [pwHide])
  return (
    <View style={styles.container}>
      {/* <View style={{ backgroundColor: 'rgba(48, 120, 254, 1)', height: 800 }}> */}
      {/* header */}
      <ScrollView style={{ width: '100%', height: 1200}}>
      <View style={styles.rowview}>
        <Image style={{ width: 40, height: 40, borderRadius: 40, border: 'solid 3px white' }} source={{ uri: data.avatar }} />
        <Text style={{ fontSize: 20, fontWeight: '650', color: 'white', width: '70%' }}>{'Chào ' + data.lastName + ' ' + data.name}</Text>
        <TouchableOpacity onPress={() => { }}>
          <Image style={{ width: 23, height: 23, marginRight: 15 }} source={require('../../assets/search-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Image style={{ width: 26, height: 26 }} source={require('../../assets/ic_uiv3_bell.webp')} />
        </TouchableOpacity>
      </View>

      {/* body */}
      <View style={{ width: '100%', height: 200, marginTop: 10 }}>
        <Image source={require('../../assets/event1.jpg')} style={{ width: '100%', height: 120 }}></Image>

        <View style={{ width: '92%', height: 156, backgroundColor: 'white', marginHorizontal: '4%', borderRadius: 8 }}>

          <View style={{ flexDirection: 'row', height: 55, justifyContent: 'space-around', padding: 10, alignItems: 'center', gap: 130 }}>
            <Text style={{ color: 'rgba(117, 117, 117, 1)', fontSize: 18, fontWeight: 'normal' }}>VNPT Pay</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 15 }}>
              {balance}
              <TouchableOpacity style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                setPwHide(!pwHide);
              }}>
                <Image style={{ width: 29, height: 29 }} source={pwHideImg} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ width: '100%', height: 1, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 15, alignItems: 'center' }}>
            {datatemp.map((item, index) => {
              return <View key={index} style={{ alignItems: 'center' }}>
                <Image style={{ width: 45, height: 47 }} source={require('../../assets/' + item.img)}></Image>
                <Text style={{ fontSize: 12, fontWeight: '500', marginTop: 5 }}>{item.text}</Text>
              </View>
            })}
          </View>
        </View>

        <View style={{ width: '100%', height: 855, backgroundColor: 'white', borderRadius: 20, marginTop: 20, padding: 15 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', height: 166, marginTop: 10 }}>
            {datatemp2.map((item, index) => {
              return <TouchableOpacity key={index} style={{ width: '45%', height: 65, backgroundColor: 'rgba(186, 218, 255, 0.2)', borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 10 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 15 }} source={require('../../assets/' + item.img)}></Image>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.text}</Text>
              </TouchableOpacity>
            })}
          </View>


          {/* Dich vu khac */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: '700', fontSize: 19 }}> Dịch vụ khác </Text>
            <TouchableOpacity style={{ width: 90, borderRadius: 8, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginHorizontal: 10, padding: 10, }}>
              <Text style={{ fontSize: 14, fontWeight: '500', color: 'blue' }}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal style={{ flexDirection: 'row', width: 380 }}>
            {dataDV.map((item, index) => {
              return <TouchableOpacity key={index} style={{ width: 70, height: 100, borderRadius: 8, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginHorizontal: 10, padding: 10 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 15 }} source={require('../../assets/' + item.img)} />
                <Text style={{ fontSize: 13, fontWeight: '400', textAlign: 'center' }}>{item.text}</Text>
              </TouchableOpacity>
            })}
          </ScrollView>


          {/* Danh rieng cho ban */}
          <Text style={{ fontWeight: '700', fontSize: 19 }}> Dành riêng cho bạn </Text>
          <ScrollView horizontal style={{ flexDirection: 'row', width: 380, paddingTop: 10 }}>
            {dataDanhRiengChoBan.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={{ width: 280, height: 190, borderRadius: 8, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginHorizontal: 10, border: 'solid 1px grey', borderRadius: 15 }}>
                  <Image style={{ width: 279, height: 130, borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: 'hidden', }} source={require('../../assets/' + item.img)} />

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', width: '65%', alignItems: 'flex-start' }}>
                      <Text style={{ fontSize: 14, fontWeight: '600', textAlign: 'center', margin: 4 }}>{item.title}</Text>
                      <Text style={{ fontSize: 9, fontWeight: '400', textAlign: 'center' }}>{item.text}</Text>
                    </View>

                    <TouchableOpacity style={{ width: '33%', borderRadius: 4, padding: 2, backgroundColor: 'blue', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 10, color: 'white', fontWeight: '600' }}>Chi tiết tại đây</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>

          {/* Uu dai khac */}
          <Text style={{ fontWeight: '700', fontSize: 19 }}> Ưu đãi khác </Text>
          <FlatList style={{ paddingTop: 8 }} data={dataUuDaiKhac} numColumns={2} renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ width: 160, height: 213, borderRadius: 15, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginHorizontal: 10, border: 'solid 1px grey' }}>
                <Image style={{ width: 159, height: 150, borderTopLeftRadius: 15, borderTopRightRadius: 15, overflow: 'hidden', }} source={require('../../assets/' + item.img)} />
                <Text style={{ fontSize: 13, fontWeight: '400', textAlign: 'center' }}>{item.text}</Text>
                <Text style={{ color: 'blue', fontSize: 12, margin: 5 }}>Đang diễn ra</Text>
              </TouchableOpacity>
            )
          }}></FlatList>
        </View>
      </View>
      {/* <View style={{ width: '100%', height: 100, backgroundColor: 'white', marginTop: 20, padding: 15 }}>

      </View> */}
      <Image style={{ width: '100%', height: 450, alignItems: 'center', justifyContent: 'center', marginTop:950 }} source={require('../../assets/bkg_footer_default.png')}></Image>  
      
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(48, 120, 254, 1)',
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  rowview: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    height: 60,
    gap: 10,
  },
});

