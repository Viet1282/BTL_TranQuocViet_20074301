import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fetchUser } from '../apis/user.api';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home(route) {
  const navigation = useNavigation();
  // const id = route.route.params?.id;
  const id = 1;
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
      <ScrollView style={{ width: '100%', height: 200, marginVertical: 10 }}>
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

        <View style={{ width: '100%', height: 456, backgroundColor: 'white', borderRadius: 20, marginTop: 20,padding:15 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', height: 166,marginTop:10 }}>
            {datatemp2.map((item, index) => {
              return <TouchableOpacity key={index} style={{ width: '45%', height: 65, backgroundColor: 'rgba(186, 218, 255, 0.2)', borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap:10 }}>
                <Image style={{ width: 50, height: 50, borderRadius:15 }} source={require('../../assets/' + item.img)}></Image>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.text}</Text>
              </TouchableOpacity>
            })}
          </View>
        </View>




      </ScrollView>
      {/* </View> */}
      {/* <ImageBackground style={{width:'100%',resizeMode:'cover',flex:1, justifyContent:'flex-end', alignItems:'center'}} source={require('../../assets/ic_intro_new.png')}>
        
      </ImageBackground> */}
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

