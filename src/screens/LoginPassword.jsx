import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { useState, useEffect } from 'react';

export default function Login(route) {
    const navigation = useNavigation();
    const [ic_char, setIc_char] = useState({
        ic1: require('../../assets/ic_uncheck.webp'),
        ic2: require('../../assets/ic_uncheck.webp'),
        ic3: require('../../assets/ic_uncheck.webp'),
        ic4: require('../../assets/ic_uncheck.webp'),
        ic5: require('../../assets/ic_uncheck.webp'),
        ic6: require('../../assets/ic_uncheck.webp'),
    });
    const [buttonSubmit, setButtonSubmit] = useState('rgba(145, 145, 145, 1)');
    // const [phone, setPhone] = useState(route.params.phone);
    const [password, setPassword] = useState('');
    useEffect(() => {
        let ic_char_temp = {};
        for (let i = 0; i < 6; i++) {
            if(i<password.length){
                ic_char_temp['ic' + (i + 1)] = require('../../assets/pw_fill.png');
            }else
                ic_char_temp['ic' + (i + 1)] = require('../../assets/ic_uncheck.webp');
        }
        setIc_char(ic_char_temp);
        if(password.length == 6){
            setButtonSubmit('rgba(31, 73, 222, 0.89)')
            
        }else 
            setButtonSubmit('rgba(145, 145, 145, 1)')
    }, [password]);


    //     useEffect(() => {
    //         setChar('');
    // }, [char]);
    

    return (
        <View style={styles.container}>
            <View style={{ margin: 25 }}>
                <Text style={{ fontSize: 22, fontWeight: '700' }}>Nhập mật khẩu</Text>
                <Text style={{ fontSize: 15, marginTop: 13 }}>Nhập mật khẩu để đăng nhập vào VNPT Money</Text>

                <View style={styles.rowview}>
                    <Image style={{ width: 23, height: 23 }} source={ic_char.ic1}/>
                    <Image style={{ width: 23, height: 23 }} source={ic_char.ic2}/>
                    <Image style={{ width: 23, height: 23 }} source={ic_char.ic3}/>
                    <Image style={{ width: 23, height: 23 }} source={ic_char.ic4}/>
                    <Image style={{ width: 23, height: 23 }} source={ic_char.ic5}/>
                    <Image style={{ width: 23, height: 23 }} source={ic_char.ic6}/>
                    <TouchableOpacity style={{width:30,height:30}}>
                        <Image style={{ width: 29, height: 29, top:-3,left:5}} source={require('../../assets/ic_hide_pass.png')} />
                    </TouchableOpacity>
                </View>
                <TextInput onChangeText={setPassword} value={password} style={{ width: 280, height: 80,color:'transparent', outlineColor: 'transparent', margin: 25, marginTop: 60,fontSize:30,textAlign:'center',borderBottom:'solid 2px blue'}} maxLength={6} autoFocus={true} ></TextInput>



            </View>
            <SafeAreaView style={styles.bottomView}>
                <Text style={{ color: 'blue', fontSize: 15, marginBottom: 30 }}>Quên mật khẩu?</Text>
                <TouchableOpacity style={{ ...styles.buttonSubmit, backgroundColor: buttonSubmit }} onPress={() => {
                    navigation.navigate('LoginPhone', { phone })
                }}>
                    <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500' }}>Đăng nhập</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    bottomView: {
        width: '100%',
        height: 140,
        // backgroundColor: '#FF9800', 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    rowview: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'flex-start',
        top: 145,
        left: '14%',
        width: '80%',
        position: 'absolute',
        gap: 20,
    },
    buttonSubmit: {
        width: 354,
        height: 54,
        backgroundColor: 'rgba(145, 145, 145, 1)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
});