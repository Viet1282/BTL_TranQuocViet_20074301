import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { useState, useEffect, useRef } from 'react';
import { fetchUsers } from '../apis/users.api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login(route) {
    const navigation = useNavigation();
    const [char1, setChar1] = useState(<Image style={{ width: 23, height: 23 }} source={require('../../assets/ic_uncheck.webp')} />);
    const [char2, setChar2] = useState(<Image style={{ width: 23, height: 23 }} source={require('../../assets/ic_uncheck.webp')} />);
    const [char3, setChar3] = useState(<Image style={{ width: 23, height: 23 }} source={require('../../assets/ic_uncheck.webp')} />);
    const [char4, setChar4] = useState(<Image style={{ width: 23, height: 23 }} source={require('../../assets/ic_uncheck.webp')} />);
    const [char5, setChar5] = useState(<Image style={{ width: 23, height: 23 }} source={require('../../assets/ic_uncheck.webp')} />);
    const [char6, setChar6] = useState(<Image style={{ width: 23, height: 23 }} source={require('../../assets/ic_uncheck.webp')} />);
    const inputRef = useRef(null);
    const [buttonSubmit, setButtonSubmit] = useState('rgba(145, 145, 145, 1)');
    const [pwHide, setPwHide] = useState(true);
    const [pwHideImg, setPwHideImg] = useState(require('../../assets/ic_hide_pass.png'));
    const phone = route.route.params?.phone;
    const [password, setPassword] = useState('');
    console.log(phone);
    const [data, setData] = useState([]);

    // useEffect(() => {

    // }, [])

    const handleLogin = async (user) => {
        await AsyncStorage.setItem('user', JSON.stringify(user));
        await AsyncStorage.setItem('userId', user.id);
        navigation.navigate('Home',{id:user.id});
      };
    console.log(data);
    useEffect(() => {
        fetchUsers().then(setData);

        let ic_char_temp = {};
        for (let i = 0; i < 6; i++) {
            if (i < password.length && pwHide) {
                ic_char_temp['ic' + (i + 1)] = <Image style={{ width: 23, height: 23 }} source={require('../../assets/pw_fill.png')} />;
            } else if (i < password.length && !pwHide) {
                ic_char_temp['ic' + (i + 1)] = <Text style={{ width: 23, height: 23, bottom: 7, fontSize: 27, fontWeight: '700', color: 'blue', alignItems: 'center', justifyContent: 'center' }}>{password[i]}</Text>;
            } else {
                ic_char_temp['ic' + (i + 1)] = <Image style={{ width: 23, height: 23 }} source={require('../../assets/ic_uncheck.webp')} />;
            }
        }
        setChar1(ic_char_temp.ic1);
        setChar2(ic_char_temp.ic2);
        setChar3(ic_char_temp.ic3);
        setChar4(ic_char_temp.ic4);
        setChar5(ic_char_temp.ic5);
        setChar6(ic_char_temp.ic6);
        if (password.length == 6) {
            for (let d of data) {
                if (d.phone == phone && d.password == password) {
                    // navigation.navigate('Home', { screen: 'Trang Chủ', params: { id: d.id } })
                    // navigation.navigate('Home', { id: d.id })
                    handleLogin(d);
                } else {

                }
            }
            setButtonSubmit('rgba(31, 73, 222, 0.89)')
        } else
            setButtonSubmit('rgba(145, 145, 145, 1)')
        if (pwHide) {
            setPwHideImg(require('../../assets/ic_hide_pass.png'));
            inputRef.current.focus();
        } else {
            setPwHideImg(require('../../assets/ic_view_svg.png'));
            inputRef.current.focus();
        }
    }, [password, pwHide]);





    return (
        <View style={styles.container}>
            <View style={{ margin: 25 }}>
                <Text style={{ fontSize: 22, fontWeight: '700' }}>Nhập mật khẩu</Text>
                <Text style={{ fontSize: 15, marginTop: 13 }}>Nhập mật khẩu để đăng nhập vào VNPT Money</Text>

                <View style={styles.rowview}>


                    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        {char1}
                        {char2}
                        {char3}
                        {char4}
                        {char5}
                        {char6}
                    </View>
                    <TouchableOpacity style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                        setPwHide(!pwHide);
                    }}>
                        <Image style={{ width: 29, height: 29, top: -3, left: 5 }} source={pwHideImg} />
                    </TouchableOpacity>
                </View>
                <TextInput ref={inputRef} onChangeText={setPassword} value={password} style={styles.HideTextInput} maxLength={6} autoFocus={true} ></TextInput>
                <View style={{ height: 1, width: '80%', margin: '10%', border: 'solid 1px blue' }}></View>



            </View>
            <SafeAreaView style={styles.bottomView}>
                <Text style={{ color: 'blue', fontSize: 15, marginBottom: 30 }}>Quên mật khẩu?</Text>
                <TouchableOpacity style={{ ...styles.buttonSubmit, backgroundColor: buttonSubmit }} onPress={() => {
                    if (password.length != 6) return;
                    // navigation.navigate('LoginPhone', { phone })
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
        // top: 145,
        marginTop: 80,
        left: '14%',
        width: '80%',
        // position: 'absolute',
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
    HideTextInput: {
        width: '85%',
        height: 80,
        top: 110,
        color: 'transparent',
        outlineColor: 'transparent',
        // border:'solid 2px blue',
        margin: 25,
        fontSize: 30,
        textAlign: 'center',
        position: 'absolute',
    },
});