import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
    const navigation = useNavigation() ;
  return (
    <View style={styles.container}>
      <ImageBackground style={{width:'100%',resizeMode:'cover',flex:1, justifyContent:'flex-end', alignItems:'center'}} source={require('../../assets/ic_intro_new.png')}>
        <View style={{width:'80%',gap:5,height:'16%'}}>
            <Text style={{fontSize:22,fontWeight:'600',color:'black'}}>Nhập số điện thoại</Text>
            <Pressable style={{width:300,height:50,borderBottom:'solid 2px rgba(0, 102, 255, 1)'}}
            onPress={()=>{
                navigation.navigate('LoginPhone')
            }}>
                            <Text style={{color:'rgba(104, 102, 102, 1)',fontSize:24,fontWeight:'bold'}}>Nhập số điện thoại</Text>
            </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});