import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Linking, ImageBackground, Image } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useFonts } from 'expo-font';


const App = () => {
  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');
  //use your own key
  const access_key = '*****************';
  

  const [fontsLoaded] = useFonts({
    'playfair': require('./assets/font/Playfair/static/Playfair_9pt_SemiCondensed-Medium.ttf'),
  });

  const randomQuote = () => {
    setIsLoading(true);
    Promise.all([fetch('https://api.quotable.io/random').then((res) => res.json()), fetch(`https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=${access_key}`).then((res) => res.json())])
      .then(([quoteResult, imageResult]) => {
        setQuote(quoteResult.content);
        setAuthor(quoteResult.author);
        setBackgroundImage(imageResult.urls.regular);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    randomQuote();
  }, []);

  const handleScreenPress = () => {
    randomQuote();
  };

  const handleCopy = () => {
    const textToCopy = `${Quote} ~by ${Author}`;
    Clipboard.setStringAsync(textToCopy);
    alert(`copied to clipboard!`);
  };

  const tweetNow = () => {
    const url = 'https://twitter.com/intent/tweet?text=' + Quote;
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={handleScreenPress}>
      <ImageBackground
        style={{
          flex: 1,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundSize: 'cover',
        }}
        source={{ uri: backgroundImage }}
      >
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />

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
              fontSize: 30,
              lineHeight: 26,
              fontFamily: 'playfair',
              letterSpacing: 1.1,
              fontWeight: '400',
              textAlign: 'center',
              marginBottom: 15,
              paddingHorizontal: 30,
            }}
          >
            {isLoading ? 'Loading...' : Quote}
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
        </View>

        {/* Fiture */}
        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 120, left: 0, right: 20, paddingHorizontal: 20, marginTop: 10, elevation: 0, justifyContent: 'center' }}>
          <TouchableOpacity onPress={handleCopy} style={{ marginHorizontal: 10 }}>
            <Image source={require('./assets/copy.png')} style={{ width: 40, height: 40 }}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={tweetNow}>
            <Image source={require('./assets/twitter.png')} style={{ width: 50, height: 40 }}></Image>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default App;

//https://github.com/itzpradip/RNQuoteGenerator/blob/master/App.js
