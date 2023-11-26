import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native';

export default function HeaderHistory() {
    return (
        <View style={{ height: 50, width: "100%", backgroundColor: "white", borderBottom: "solid 1px rgba(217, 217, 217, 1)", alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>Lịch Sử Giao Dịch</Text>
        </View>
    );
}