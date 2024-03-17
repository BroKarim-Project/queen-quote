import { StyleSheet, useWindowDimensions, View, Text, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';

export default function NotFound() {
  // const animationRef = useRef < LottieView > null;

  // useEffect(() => {
  //   animationRef.current?.play();

  //   Or set a specific startFrame and endFrame with:
  //   animationRef.current?.play(30, 120);
  // }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#272730' }}>
      <View style={{ height: '300', aspectRatio: 1, marginBottom: 10 }}>
        <Image style={{ flex: 1 }} source={require('../assets/illustration.png')} />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 26,
          fontWeight: '600',
          color: '#fff',
          marginBottom: 20,
        }}
      >
        Oops!
      </Text>
      <Text style={{ color: '#fff' }}>Something wrong</Text>
    </View>
  );
}

//klo erro coba taru  navigation di NotFound()
