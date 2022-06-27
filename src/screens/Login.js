import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {scale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../assets/loginbg.jpg')}
      style={styles.bg}>
      <Image
        source={require('../assets/image33.jpg')}
        resizeMode="stretch"
        style={styles.header}
      />
      <Text style={styles.log}>Login</Text>
      <Text style={styles.welcome}>Welcome Back to</Text>
      <Text style={styles.nch}>New China Hut</Text>
      <View style={{marginTop: height * 0.02}}>
        <View style={styles.con}>
          <Image
            source={require('../assets/email.png')}
            resizeMode="contain"
            style={styles.icon}
          />
          <TextInput
            style={styles.ti}
            placeholder="Email"
            placeholderTextColor="#888"
            onChangeText={text => setEmail(text)}
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
            placeholderTextColor="#888"
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: height * 0.03}}>
        <Text style={styles.dont}>Don't Have an Account? </Text>
        <Text
          style={styles.su}
          onPress={() => props.navigation.navigate('Signup')}>
          Signup
        </Text>
      </View>
      <Text style={styles.for}>Forgot your password?</Text>
      <TouchableOpacity
        style={styles.login}
        onPress={() => props.navigation.navigate('HomePage')}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <Text
        style={{
          marginTop: height * 0.06,
          fontSize: scale(15),
          fontWeight: 'bold',
          color: 'black',
        }}>
        Login with social account
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: height * 0.02,
          width: width * 0.25,
          justifyContent: 'space-between',
        }}>
        <Entypo name="facebook" size={scale(38)} color="blue" />
        <AntDesign name="google" size={scale(40)} color="red" />
      </View>
    </ImageBackground>
  );
};

export default Login;

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
    marginTop: height * 0.04,
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
    paddingLeft: 15,
    borderRadius: scale(10),
  },
  ti: {
    width: width * 0.7,
    height: height * 0.05,
    fontSize: 16,
    marginLeft: 10,
  },
  for: {
    marginTop: height * 0.04,
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
