import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import HomeScreen from '../screens/HomeScreen';

const Auth = createNativeStackNavigator();
const Main = createNativeStackNavigator();

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

  const MainStack = () => {
    return (
      <Main.Navigator>
        <Main.Screen
          name="auth"
          component={Authentication}
          options={{headerShown: false}}
        />
        <Main.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Main.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
