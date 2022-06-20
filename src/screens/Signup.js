import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const Signup = () => {
  return (
    <View style={styles.bg}>
      <Image
        source={require('../assets/image33.jpg')}
        resizeMode="contain"
        style={styles.header}
      />
      <Text style={styles.log}>Signup</Text>
      <Text style={styles.welcome}>Welcome to</Text>
      <Text style={styles.nch}>New China Hut</Text>
      <View style={{marginTop: height * 0.02}}>
        <View style={styles.con}>
          <Image
            source={require('../assets/email.png')}
            resizeMode="contain"
            style={styles.icon}
          />
          <TextInput style={styles.ti} onChangeText={() => {}} />
        </View>
        <View style={styles.con}>
          <Image
            source={require('../assets/pass.png')}
            resizeMode="contain"
            style={styles.icon}
          />
          <TextInput style={styles.ti} onChangeText={() => {}} />
        </View>
      </View>
      <View style={styles.login}>
        <Text style={styles.text}>Signup</Text>
      </View>
      <Text
        style={{
          marginTop: height * 0.03,
          fontSize: scale(15),
          fontWeight: 'bold',
          color: 'black',
        }}>
        Login with social login
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: height * 0.02,
          width: width * 0.25,
          justifyContent: 'space-between',
        }}>
        <Entypo name="facebook" size={scale(40)} color="blue" />
        <AntDesign name="google" size={scale(40)} color="red" />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  bg: {
    width: width,
    height: height,
    alignItems: 'center',
  },
  header: {
    width: width,
    height: height * 0.1,
  },
  log: {
    marginTop: height * 0.02,
    color: 'black',
    fontSize: scale(25),
    fontWeight: 'bold',
  },
  welcome: {
    marginTop: height * 0.02,
    color: 'black',
    fontSize: scale(17),
    fontWeight: 'bold',
  },
  nch: {
    marginTop: height * 0.01,
    color: 'red',
    fontSize: scale(30),
  },
  icon: {
    width: width * 0.05,
    height: height * 0.02,
  },
  con: {
    backgroundColor: 'white',
    borderWidth: scale(1),
    borderColor: 'lightgrey',
    width: width * 0.8,
    height: height * 0.06,
    marginTop: height * 0.01,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ti: {
    width: width * 0.7,
    height: height * 0.05,
  },
  for: {
    marginTop: height * 0.02,
    color: 'black',
    fontSize: scale(15),
    fontWeight: 'bold',
  },
  login: {
    width: width * 0.7,
    height: height * 0.07,
    backgroundColor: 'maroon',
    borderRadius: scale(25),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.01,
  },
  text: {
    color: 'white',
    fontSize: scale(15),
  },
});
