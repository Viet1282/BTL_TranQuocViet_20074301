import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Endow() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground style={{ width: '100%', height:250, flex: 1, justifyContent: 'flex-end', alignItems: 'center' }} source={require('../../assets/img_home_voucherhub_top.png')}>
                    <Text style={{ fontSize: 22, fontWeight: '600', color: 'white' }}>Tặng quà</Text>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
