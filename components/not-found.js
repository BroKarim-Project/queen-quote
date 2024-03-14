import { View, Text } from 'react-native';
import React from 'react';

export default function NotFound({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#8fcbbc' }}>
      <Text style={{ color:'#000', }}>404</Text>
    </View>
  );
}
