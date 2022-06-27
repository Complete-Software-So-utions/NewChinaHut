import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const [filterCat, setFilter] = React.useState([]);
  const [modalDat, setModalDat] = React.useState([]);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [categories, setCategories] = React.useState([
    {name: 'Appetizers', highlight: true},
    {name: 'Soups', highlight: false},
  ]);

  let menu = [
    {
      category: 'Appetizers',
      items: [
        {
          name: 'Vegetable Egg Rolls',
          description:
            'Egg Roll, B.B.Q Pork, Crabmeat Rangoon, Beef Teriyaki Stick & Cantonese Fried Shrimp',
          singlePrice: 3.85,
        },
        {
          name: 'Pot Stickers',
          doublePrice: {
            small: 3.45,
            large: 5.25,
          },
        },
        {
          name: 'Cantonese Fried Chips',
          doublePrice: {
            small: 6.85,
            large: 'N/A',
          },
        },
        {
          name: 'Beef Teriyaki Sticks',
          doublePrice: {
            small: 'N/A',
            large: 8.35,
          },
        },
      ],
    },
    {
      category: 'Soups',
      items: [
        {
          name: 'Shrimp Almond Ding',
          description:
            'Egg Roll, B.B.Q Pork, Crabmeat Rangoon, Beef Teriyaki Stick & Cantonese Fried Shrimp',
          singlePrice: 3.85,
        },
        {
          name: 'Chicken Noodle Soup',
          doublePrice: {
            small: 3.45,
            large: 5.25,
          },
        },
        {
          name: 'Chicken Sizzling Rice',
          doublePrice: {
            small: 6.85,
            large: 'N/A',
          },
        },
        {
          name: 'Chicken Teriyaki Sticks',
          doublePrice: {
            small: 'N/A',
            large: 8.35,
          },
        },
      ],
    },
  ];

  const handleFocus = itm => {
    const arr = menu.filter(item => item.category == itm);
    setFilter(arr);
    let cat = [...categories];
    for (let x = 0; x < cat.length; x++) {
      if (cat[x].highlight == true) {
        cat[x] = {...cat[x], highlight: false};
      } else if (cat[x].highlight == false) {
        cat[x] = {...cat[x], highlight: true};
      }
    }
    setCategories(cat);
  };

  const getItem = itm => {
    setModalDat(itm);
    setModalVisible(true);
  };

  return (
    <>
      <ImageBackground
        source={require('../assets/homebg.png')}
        resizeMode="stretch"
        style={styles.bg}>
        <Image
          source={require('../assets/image33.jpg')}
          style={styles.header}
        />
        <View style={styles.main}>
          <Text style={styles.are}>{`Are you ready,\nfor something new?`}</Text>
          <Text style={styles.des}>
            We mix Southeast Asian Flavors with a Western flair with Japanese
            cooking techniques to create a unique inspired menu
          </Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{marginTop: height * 0.03}}
            horizontal={true}>
            {categories.map((item, index) => (
              <TouchableOpacity
                onPress={() => handleFocus(item.name)}
                style={[
                  styles.zontal,
                  {
                    backgroundColor:
                      item.highlight == true ? 'maroon' : 'white',
                  },
                ]}
                key={index}>
                <Text
                  style={[
                    styles.cat,
                    {color: item.highlight == true ? 'white' : 'black'},
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {filterCat.length < 1 ? (
            <Text>{menu[0].category}</Text>
          ) : (
            <Text>{filterCat[0].category}</Text>
          )}
          <ScrollView>
            {filterCat.length < 1
              ? menu[0].items.map((i, index) => (
                  <TouchableOpacity
                    onPress={() => getItem(i)}
                    style={{
                      flexDirection: 'row',
                      width: width * 0.9,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: height * 0.01,
                      backgroundColor: 'white',
                      elevation: scale(5),
                      borderRadius: scale(7),
                      borderWidth: scale(1),
                      borderColor: 'lightgrey',
                      padding: width * 0.04,
                    }}
                    key={index}>
                    <Text
                      style={{
                        fontSize: scale(15),
                        fontWeight: 'bold',
                        color: '#000',
                      }}>
                      {i.name}
                    </Text>
                    {i.singlePrice && !i.doublePrice ? (
                      <Text style={{marginRight: width * 0.02}}>
                        ${i.singlePrice}
                      </Text>
                    ) : i.doublePrice.small !== 'N/A' &&
                      i.doublePrice.large !== 'N/A' ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          width: width * 0.25,
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}>
                        <View style={{alignItems: 'center'}}>
                          <Text>Small</Text>
                          <Text>${i.doublePrice.small}</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                          <Text>Large</Text>
                          <Text>${i.doublePrice.large}</Text>
                        </View>
                      </View>
                    ) : i.doublePrice.small !== 'N/A' &&
                      i.doublePrice.large == 'N/A' ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          width: width * 0.25,
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}>
                        <View style={{alignItems: 'center'}}>
                          <Text>Small</Text>
                          <Text>${i.doublePrice.small}</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                          <Text>Large</Text>
                          <Text>{i.doublePrice.large}</Text>
                        </View>
                      </View>
                    ) : i.doublePrice.small == 'N/A' &&
                      i.doublePrice.large !== 'N/A' ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          width: width * 0.25,
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}>
                        <View style={{alignItems: 'center'}}>
                          <Text>Small</Text>
                          <Text>{i.doublePrice.small}</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                          <Text>Large</Text>
                          <Text>${i.doublePrice.large}</Text>
                        </View>
                      </View>
                    ) : null}
                  </TouchableOpacity>
                ))
              : filterCat[0].items.map((i, index) => (
                  <TouchableOpacity
                    onPress={() => getItem(i)}
                    style={{
                      flexDirection: 'row',
                      width: width * 0.9,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: height * 0.01,
                      backgroundColor: 'white',
                      elevation: scale(5),
                      borderRadius: scale(7),
                      borderWidth: scale(1),
                      borderColor: 'lightgrey',
                      padding: width * 0.04,
                    }}
                    key={index}>
                    <Text style={{fontSize: scale(15), fontWeight: 'bold'}}>
                      {i.name}
                    </Text>
                    {i.singlePrice && !i.doublePrice ? (
                      <Text style={{marginRight: width * 0.02}}>
                        ${i.singlePrice}
                      </Text>
                    ) : i.doublePrice.small !== 'N/A' &&
                      i.doublePrice.large !== 'N/A' ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          width: width * 0.25,
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}>
                        <View style={{alignItems: 'center'}}>
                          <Text>Small</Text>
                          <Text>${i.doublePrice.small}</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                          <Text>Large</Text>
                          <Text>${i.doublePrice.large}</Text>
                        </View>
                      </View>
                    ) : i.doublePrice.small !== 'N/A' &&
                      i.doublePrice.large == 'N/A' ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          width: width * 0.25,
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}>
                        <View style={{alignItems: 'center'}}>
                          <Text>Small</Text>
                          <Text>${i.doublePrice.small}</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                          <Text>Large</Text>
                          <Text>{i.doublePrice.large}</Text>
                        </View>
                      </View>
                    ) : i.doublePrice.small == 'N/A' &&
                      i.doublePrice.large !== 'N/A' ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          width: width * 0.25,
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}>
                        <View style={{alignItems: 'center'}}>
                          <Text>Small</Text>
                          <Text>{i.doublePrice.small}</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                          <Text>Large</Text>
                          <Text>${i.doublePrice.large}</Text>
                        </View>
                      </View>
                    ) : null}
                  </TouchableOpacity>
                ))}
          </ScrollView>
        </View>
      </ImageBackground>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <View style={styles.popup}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                alignItems: 'flex-end',
              }}>
              <FontAwesome name="close" color="maroon" size={scale(20)} />
            </TouchableOpacity>
            {!modalDat.singlePrice ? (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={styles.tab}>
                  <Text style={styles.text}>Small</Text>
                  <Text style={styles.text}>
                    ${modalDat?.doublePrice?.small}
                  </Text>
                </View>
                <View style={styles.tab}>
                  <Text style={styles.text}>Large</Text>
                  <Text style={styles.text}>
                    ${modalDat?.doublePrice?.large}
                  </Text>
                </View>
              </View>
            ) : (
              <View
                style={{
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: scale(25),
                    color: 'black',
                  }}>
                  ${modalDat.singlePrice}
                </Text>
              </View>
            )}
            <View style={{alignSelf: 'center', marginTop: height * 0.01}}>
              <Text style={styles.text}>{modalDat.name}</Text>
            </View>
            {modalDat.description ? (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={[
                    styles.text,
                    {textAlign: 'center', marginTop: height * 0.01},
                  ]}>
                  {modalDat.description}
                </Text>
              </View>
            ) : null}
            <View
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: height * 0.01,
              }}>
              <Ionicons name="add-circle" color="maroon" size={scale(30)} />
              <Text>1</Text>
              <FontAwesome5
                name="minus-circle"
                color="maroon"
                size={scale(25)}
              />
            </View>
            <View
              style={[
                styles.tab,
                {
                  backgroundColor: 'maroon',
                  alignSelf: 'center',
                  marginTop: height * 0.03,
                  height: height * 0.07,
                },
              ]}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: scale(15),
                }}>
                Add to Cart
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'white',
    width: width,
    height: height,
  },
  header: {
    width: width,
    height: height * 0.1,
    marginTop: height * 0.02,
  },
  are: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color: '#000',
    marginTop: height * 0.05,
  },
  main: {
    width: width * 0.9,
    alignSelf: 'center',
  },
  cat: {
    fontSize: scale(15),
  },
  zontal: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
  },
  des: {
    marginTop: height * 0.01,
    fontSize: scale(15),
    color: '#000',
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: scale(1),
  },
  popup: {
    width: width * 0.9,
    height: height * 0.4,
    backgroundColor: 'white',
    borderRadius: scale(10),
    padding: width * 0.03,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: scale(2),
    width: width * 0.4,
    borderColor: 'maroon',
    borderRadius: scale(8),
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: scale(15),
  },
});
