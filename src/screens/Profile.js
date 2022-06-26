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

const {width, height} = Dimensions.get('window');

const Profile = () => {
  const list = [
    {
      name: 'My Account',
      icon: require('../assets/myacc.png'),
    },
    {
      name: 'Payment Options',
    },
    {
      name: 'Delivery Address',
    },
    {
      name: 'About Us',
      icon: require('../assets/aboutus.png'),
    },
    {
      name: 'Contact Us',
      icon: require('../assets/contactus.png'),
    },
    {
      name: 'Support',
      icon: require('../assets/support.png'),
    },
    {
      name: 'My Orders',
      icon: require('../assets/myorders.png'),
    },
    {
      name: 'Logout',
    },
  ];

  return (
    <View style={styles.bg}>
      <Text>Profile</Text>
      <Text>Hello John</Text>
      <ScrollView>
        {list.map((item, index) => (
          <View key={index}>
            <Image source={item.icon} resizeMode="contain" />
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  bg: {
    width: width,
    height: height,
  },
});
