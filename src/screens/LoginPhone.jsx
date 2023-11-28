import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { useState, useEffect } from 'react';

export default function Login() {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    const [buttonSubmit, setButtonSubmit] = useState('rgba(145, 145, 145, 1)');
    const [phone, setPhone] = useState('');
    const [user, setUser] = useState({});
    useEffect(() => {
        if (checked) {
            setButtonSubmit('rgba(31, 73, 222, 0.89)')
        } else {
            setButtonSubmit('rgba(145, 145, 145, 1)')
        }
    }, [checked]);

    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>
                <Text style={{ fontSize: 22, fontWeight: '700' }}>Nhập số điện thoại</Text>
                <TextInput onChangeText={setPhone} style={{outlineColor: 'transparent', marginTop: 35, fontSize: 28, fontWeight: '600', color: 'rgba(104, 102, 102, 1)' }} placeholder='Số điện thoại của bạn' multiline={1} autoFocus={true}></TextInput>

            </View>
            <SafeAreaView style={styles.bottomView}>
                <View style={styles.rowview}>
                    <CheckBox center
                        checked={checked}
                        checkedIcon={<Image style={{ width: 20, height: 20 }} source={require('../../assets/ic_check.png')} />}
                        uncheckedIcon={<Image style={{ width: 20, height: 20 }} source={require('../../assets/ic_uncheck.webp')} />}
                        onPress={() => setChecked(!checked)} />
                    <Text>Tôi đồng ý với Điều khoản sử dụng và Chính sách riêng tư của VNPT Money</Text>

                </View>
                <TouchableOpacity style={{ ...styles.buttonSubmit, backgroundColor:buttonSubmit}} onPress={() => {
                    if(!checked) return;
                    navigation.navigate('LoginPassword',{phone})
                }}>
                    <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500' }}>Đồng ý và tiếp tục</Text>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
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