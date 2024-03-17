import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Dimensions, ImageBackground, Image } from 'react-native';

const App = () => {
  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);
  const bottomScreenRef = useRef(null);
  const topScreenRef = useRef(null);

  const randomQuote = () => {
    setIsLoading(true);
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.content);
        setQuote(result.content);
        setAuthor(result.author);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <ImageBackground
      style={{
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
      }}
      source={{ uri: 'https://images.unsplash.com/photo-1710104434504-0261d06fa832?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
    >
      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} ref={topScreenRef} />

      <StatusBar barStyle="light-content" />
      <View
        style={{
          width: '100%',
          borderRadius: 20,
          padding: 20,
        }}
      >
        <Text
          style={{
            color: '#EEEEEE',
            fontSize: 16,
            lineHeight: 26,
            letterSpacing: 1.1,
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: 10,
            paddingHorizontal: 30,
          }}
        >
          {Quote}
        </Text>

        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            fontStyle: 'italic',
            fontSize: 16,
            color: '#EEEEEE',
          }}
        >
          —— {Author} ——
        </Text>
        <TouchableOpacity
          onPress={randomQuote}
          style={{
            backgroundColor: isLoading ? 'rgba(83, 114, 240, 0.7)' : 'rgba(83, 114, 240, 1)',
            padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>{isLoading ? 'Loading...' : 'Quote'}</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', position: 'absolute', bottom: 120, left: 0, right: 20, paddingHorizontal: 20, marginTop: 10, elevation: 0, justifyContent: 'center' }} ref={bottomScreenRef}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('./assets/speaker.png')} style={{ width: 40, height: 40 }}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ marginHorizontal: 10 }}>
          {/* <FontAwesome5 name="copy" size={22} color="#5372F0" style={{ color:'#000', backgroundColor:'#fff' }} /> */}
          <Image source={require('./assets/copy.png')} style={{ width: 40, height: 40 }}></Image>
          {/* <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><Path d="M320 448v40c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V120c0-13.3 10.7-24 24-24h72v296c0 30.9 25.1 56 56 56h168zm0-344V0H152c-13.3 0-24 10.7-24 24v368c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V128H344c-13.2 0-24-10.8-24-24zm121-31L375 7A24 24 0 0 0 358.1 0H352v96h96v-6.1a24 24 0 0 0 -7-17z"/></Svg> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('./assets/twitter.png')} style={{ width: 50, height: 40 }}></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default App;

//https://github.com/itzpradip/RNQuoteGenerator/blob/master/App.js
