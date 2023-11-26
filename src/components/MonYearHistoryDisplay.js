import React from 'react';
import { View, Text } from 'react-native';

const MonthYearDisplay = ({ month, year }) => {
  // Kiểm tra nếu giá trị month không hợp lệ
  if (month < 1 || month > 12) {
    throw new Error('Invalid month value. Month should be between 1 and 12.');
  }

  // Tạo một mảng các tên của các tháng
  const monthNames = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];

  // Lấy tên tháng dựa trên giá trị month
  const monthName = monthNames[month - 1];

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{monthName}</Text>
      <Text style={{ fontSize: 16 }}>{year}</Text>
    </View>
  );
};

export default MonthYearDisplay;