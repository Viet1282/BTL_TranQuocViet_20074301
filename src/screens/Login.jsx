import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function login() {
  return (
    <View style={styles.container}>
      <ImageBackground style={{width:'100%',resizeMode:'cover',flex:1}} source={require('../../assets/ic_intro_new.png')}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'black'}}>Nhập số điện thoại</Text>
            <TextInput style={{width:300,height:50,backgroundColor:'rgba(104, 102, 102, 1)',marginTop:20,borderRadius:10,paddingLeft:10}} placeholder="Nhập số điện thoại"/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});