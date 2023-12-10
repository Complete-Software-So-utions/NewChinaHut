import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

const Signup = props => {
  return (
    <ImageBackground
      source={require('../assets/loginbg.jpg')}
      resizeMode="stretch"
      style={styles.bg}>
      <Image
        source={require('../assets/image33.jpg')}
        resizeMode="stretch"
        style={styles.header}
      />
      <ScrollView
        style={{width: width}}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: height * 0.05,
        }}>
        <Text style={styles.log}>Signup</Text>
        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.nch}>New China Hut</Text>
        <View style={{marginTop: height * 0.02}}>
          <View style={styles.con}>
            <Image
              source={require('../assets/user.png')}
              resizeMode="contain"
              style={styles.icon}
            />
            <TextInput
              style={styles.ti}
              placeholder="First Name"
              onChangeText={() => {}}
            />
          </View>
          <View style={styles.con}>
            <Image
              source={require('../assets/user.png')}
              resizeMode="contain"
              style={styles.icon}
            />
            <TextInput
              style={styles.ti}
              placeholder="Last Name"
              onChangeText={() => {}}
            />
          </View>
          <View style={styles.con}>
            <Image
              source={require('../assets/email.png')}
              resizeMode="contain"
              style={styles.icon}
            />
            <TextInput
              style={styles.ti}
              placeholder="Email"
              onChangeText={() => {}}
            />
          </View>
          <View style={styles.con}>
            <MaterialCommunityIcons
              name="cellphone"
              size={scale(20)}
              color="maroon"
            />
            <TextInput
              style={styles.ti}
              placeholder="Phone Number"
              onChangeText={() => {}}
            />
          </View>
          <View style={styles.con}>
            <Image
              source={require('../assets/pass.png')}
              resizeMode="contain"
              style={styles.icon}
            />
            <TextInput
              style={styles.ti}
              placeholder="Password"
              onChangeText={() => {}}
            />
          </View>
          <View style={styles.con}>
            <Image
              source={require('../assets/pass.png')}
              resizeMode="contain"
              style={styles.icon}
            />
            <TextInput
              style={styles.ti}
              placeholder="Confirm Password"
              onChangeText={() => {}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: height * 0.01}}>
          <Text style={styles.dont}>Already Have an Account?</Text>
          <Text
            style={styles.su}
            onPress={() => props.navigation.navigate('Login')}>
            Login
          </Text>
        </View>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: height * 0.01,
            fontSize: scale(15),
            color: 'black',
          }}>
          Signup with social account
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: height * 0.01,
          }}>
          <Image
            source={require('../assets/google.png')}
            resizeMode="contain"
            style={{width: width * 0.2, height: height * 0.05}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
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
    marginTop: height * 0.02,
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
    color: 'maroon',
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
    borderRadius: scale(10),
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
  dont: {
    color: 'black',
    fontSize: scale(15),
    fontWeight: 'bold',
  },
  su: {
    color: 'maroon',
    fontSize: scale(15),
    fontWeight: 'bold',
  },
});
