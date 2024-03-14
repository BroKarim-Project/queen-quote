//ni versi yg awk buat sendiri

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const [quote, setQuote] = useState();
  const [Author, setAuthor] = useState();
  useEffect(() => {
    randomQuote();
  }, []);
  const randomQuote = async () => {
    try {
      // const response = await fetch('https://type.fit/api/quotes');
      const response = await fetch('https://api.quotable.io/quotes/random');
      const result = await response.json();
      console.log(result.content);
      setQuote(result.content);
      setAuthor(result.author);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const newQuoteFunction = () => {
    randomQuote();
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', paddingHorizontal: 10 }}>
      {/* <StatusBar /> */}
      <View style={{ display: 'flex', backgroundColor: '#fff', flexDirection: 'column', borderRadius: 20, padding: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '600', color: '#333', marginBottom: 20 }}>Quote of the day</Text>

        {quote && ( // Render quote content only if Quote has a value
          <Text style={{ color: '#000', fontSize: 16, fontWeight: '400', textAlign: 'center', marginBottom: 10, paddingHorizontal: 30 }}>{quote}</Text>
        )}
        {/* <Text style={{ color: '#000', fontSize: 16, fontWeight: '400', textAlign: 'center', marginBottom: 10, paddingHorizontal: 30 }}>{Quote}</Text> */}
        <Text style={{ textAlign: 'right', fontWeight: '300', fontStyle: 'italic', fontSize: 16, color: '#000' }}> --{Author}</Text>

        <TouchableOpacity onPress={newQuoteFunction} style={{ padding: 10, borderRadius: 20, marginVertical: 20, backgroundColor: '#A6D1E6' }}>
          <Text style={{ color: '#000', fontSize: 18, textAlign: 'center' }}>New quote</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => {}} style={{ borderWidth: 2, padding: 2, borderColor: '#000', borderRadius: 30 }}>
            <FontAwesome name="volume-up" size={22} color="#000"></FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{ borderWidth: 2, padding: 2, borderColor: '#000', borderRadius: 30 }}>
            <FontAwesome5 name="copy" size={22} color="#000"></FontAwesome5>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{ borderWidth: 2, padding: 2, borderColor: '#000', borderRadius: 30 }}>
            <FontAwesome name="twitter" size={22} color="#000"></FontAwesome>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// TouchableOpacity adalah salah satu komponen yang digunakan dalam React Native untuk membuat elemen yang dapat di-klik

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//https://github.com/WebdeveloperIsaac/quotesgenerator/blob/master/src/App.js
// g bisa pake android studio karena g cukop penyimpanan
