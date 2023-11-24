import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native';

export default function HeaderEndow() {
  return (
    <ImageBackground style={{ position: 'absolute', width: '100%', height: 260, flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', padding: 20 }} source={require('../../assets/img_home_voucherhub_top.png')}>
      <Text style={{ fontSize: 18, fontWeight: '700', color: 'black' }}>Ưu đãi dành cho bạn</Text>
      <TouchableOpacity style={{ width: '96%', borderRadius: 15, backgroundColor: 'white', height: 35, margin: '2%', marginTop: 30, padding: 4 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('../../assets/ic_merchant_search.png')}></Image>
          <Text style={{ fontSize: 15, fontWeight: '500', color: 'grey', marginLeft: 10 }}>Tìm kiếm ưu đãi</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}
