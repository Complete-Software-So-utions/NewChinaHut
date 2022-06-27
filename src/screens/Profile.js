import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

const Profile = () => {
  return (
    <View style={styles.bg}>
      <Text>Profile</Text>
      <ScrollView>
        <Text>Hello John</Text>
        <View>
          <Image
            source={require('../assets/myacc.png')}
            resizeMode="contain"
            style={styles.img}
          />
          <Text>My Account</Text>
        </View>
        <View>
          <Image
            source={require('../assets/myorders.png')}
            resizeMode="contain"
          />
          <Text>My Orders</Text>
        </View>
        <View>
          <Foundation name="dollar-bill" size={scale(15)} color="maroon`" />
          <Text>Payment Options</Text>
        </View>
        <View>
          <MaterialIcons
            name="delivery-dining"
            size={scale(15)}
            color="maroon"
          />
          <Text>Delivery Options</Text>
        </View>
        <View>
          <Image
            source={require('../assets/support.png')}
            resizeMode="contain"
          />
          <Text>Support</Text>
        </View>
        <View>
          <Image
            source={require('../assets/aboutus.png')}
            resizeMode="contain"
          />
          <Text>About Us</Text>
        </View>
        <View>
          <Image
            source={require('../assets/contactus.png')}
            resizeMode="contain"
          />
          <Text>Contact Us</Text>
        </View>
        <View>
          <Image
            source={require('../assets/contactus.png')}
            resizeMode="contain"
          />
          <Text>Logout</Text>
        </View>
      </ScrollView>
    </View>
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
    width: scale(15),
    height: scale(15),
  },
});
