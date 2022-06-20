import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Auth = createNativeStackNavigator();

const MainNavigator = () => {
  const Authentication = () => {
    return (
      <Auth.Navigator initialRouteName="Login">
        <Auth.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Auth.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
      </Auth.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Authentication />
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
