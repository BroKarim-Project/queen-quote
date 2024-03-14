import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotFound from './not-found';
import QuoteApi from './QuoteApi';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Quote"
      screenOptions={{ tabBarShowLabel: false, tabBarStyle: { position: 'absolute', bottom: 50, left: 20, right: 20, elevation: 0, backgroundColor: '#ffff', borderRadius: 15, height: 80, ...styles.shadow } }}
    >
      <Tab.Screen
        name="Home"
        component={NotFound}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../assets/Subtract.png')} resizeMode="contain" style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Note"
        component={NotFound}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../assets/note.png')} resizeMode="contain" style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Quote"
        component={QuoteApi}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../assets/quoteGenerate.png')} resizeMode="contain" style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notif"
        component={NotFound}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../assets/notif.png')} resizeMode="contain" style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={NotFound}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../assets/user.png')} resizeMode="contain" style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }} />
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
