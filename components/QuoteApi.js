import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Dimensions, ImageBackground } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Nav from './components/Nav';

// import Tts from 'react-native-tts';
// import Clipboard from '@react-native-clipboard/clipboard';
// import Snackbar from 'react-native-snackbar';

// Tts.setDefaultLanguage('en-GB');
// Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
// Tts.setDefaultRate(0.5);
// Tts.setDefaultPitch(1.2);
const { height } = Dimensions.get('window');
const QuoteApi = () => {
  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
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
  const handlePress = (event) => {
    const { locationY } = event.nativeEvent;

    if (locationY > height / 2) {
      // Bottom half of the screen
      randomQuote();
    } else {
      // Top half of the screen
      // Do nothing, keep the previous quote
    }
  };
  useEffect(() => {
    randomQuote();
  }, []);

  // const speakNow = () => {
  //   Tts.stop();
  //   Tts.speak(Quote + ' by ' + Author);
  //   Tts.addEventListener('tts-start', (event) => setIsSpeaking(true));
  //   Tts.addEventListener('tts-finish', (event) => setIsSpeaking(false));
  // };

  // const copyToClipboard = () => {
  //   Clipboard.setString(Quote);
  //   Snackbar.show({
  //     text: 'Quote copied!',
  //     duration: Snackbar.LENGTH_SHORT,
  //   });
  // };

  // const tweetNow = () => {
  //   const url = 'https://twitter.com/intent/tweet?text=' + Quote;
  //   Linking.openURL(url);
  // };

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
      onTouchStart={handlePress}
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
            // backgroundColor: isLoading ? 'rgba(83, 114, 240, 0.7)' : 'rgba(83, 114, 240, 1)',
            // padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>{isLoading ? 'Loading...' : 'Quote'}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', position: 'absolute', bottom: 120, left: 0, right: 20, paddingHorizontal:20, marginTop: 10, elevation: 0, justifyContent: 'space-between' }} ref={bottomScreenRef}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderWidth: 2,
            borderColor: '#5372F0',
            borderRadius: 50,
            padding: 15,
            marginHorizontal: 5,
            backgroundColor: isSpeaking ? '#5372F0' : '#fff',
          }}
        >
          {/* <FontAwesome name="volume-up" size={22} color={isSpeaking ? '#fff' : '#5372F0'} /> */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderWidth: 2,
            borderColor: '#5372F0',
            borderRadius: 50,
            padding: 15,
            marginHorizontal: 5,
          }}
        >
          <FontAwesome5 name="copy" size={22} color="#5372F0" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          // onPress={tweetNow}
          style={{
            borderWidth: 2,
            borderColor: '#5372F0',
            borderRadius: 50,
            padding: 15,
            marginHorizontal: 5,
          }}
        >
          <FontAwesome name="twitter" size={22} color="#5372F0" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default QuoteApi;

//https://github.com/itzpradip/RNQuoteGenerator/blob/master/App.js
