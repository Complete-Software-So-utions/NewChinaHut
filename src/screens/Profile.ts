import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

const Profile = () => {
  return (
    <ImageBackground
      source={require('../assets/loginbg.jpg')}
      resizeMode="stretch"
      style={styles.bg}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: scale(30),
          color: 'black',
          marginTop: height * 0.02,
        }}>
        Profile
      </Text>
      <Text
        style={{
          fontSize: scale(25),
          color: 'black',
          marginTop: height * 0.02,
        }}>
        Hello John
      </Text>
      <ScrollView style={{marginTop: height * 0.04}}>
        <View style={styles.options}>
          <Image
            source={require('../assets/user.png')}
            resizeMode="contain"
            style={styles.img}
          />
          <Text style={styles.font}>My Account</Text>
        </View>
        <View style={styles.options}>
          <Image
            source={require('../assets/myorders.png')}
            resizeMode="stretch"
            style={styles.img}
          />
          <Text style={styles.font}>My Orders</Text>
        </View>
        <View style={styles.options}>
          <Foundation name="dollar-bill" size={scale(25)} color="maroon" />
          <Text style={styles.font}>Payment Options</Text>
        </View>
        <View style={styles.options}>
          <MaterialIcons
            name="delivery-dining"
            size={scale(25)}
            color="maroon"
          />
          <Text style={styles.font}>Delivery Options</Text>
        </View>
        <View style={styles.options}>
          <Image
            source={require('../assets/support.png')}
            resizeMode="contain"
            style={styles.img}
          />
          <Text style={styles.font}>Support</Text>
        </View>
        <View style={styles.options}>
          <Image
            source={require('../assets/aboutus.png')}
            resizeMode="stretch"
            style={styles.img}
          />
          <Text style={styles.font}>About Us</Text>
        </View>
        <View style={styles.options}>
          <Image
            source={require('../assets/contactus.png')}
            resizeMode="stretch"
            style={styles.img}
          />
          <Text style={styles.font}>Contact Us</Text>
        </View>
        <View style={styles.options}>
          <MaterialCommunityIcons
            name="logout"
            size={scale(25)}
            color="maroon"
          />
          <Text style={styles.font}>Logout</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;

const styles = StyleSheet.create({
  bg: {
    width: width,
    height: height,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  img: {
    width: scale(20),
    height: scale(20),
  },
  options: {
    flexDirection: 'row',
    width: width * 0.8,
    alignItems: 'center',
    height: height * 0.05,
    paddingLeft: width * 0.03,
    borderWidth: scale(1),
    borderColor: 'maroon',
    marginBottom: width * 0.04,
    borderRadius: scale(5),
  },
  font: {
    fontSize: scale(15),
    color: 'darkgrey',
    marginTop: height * 0.02,
    height: height * 0.05,
    marginLeft: width * 0.05,
  },
});
