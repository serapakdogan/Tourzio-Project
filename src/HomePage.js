import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageButton from './Component/ImageButton';
import ImageButton2 from './Component/ImageButton2';
import ImageButton3 from './Component/ImageButton3';

const {width, height} = Dimensions.get('window');

class HomePage extends Component {
  state = {
    backgroundColor: 'gray',
    pressed: false,
  };

  changeColor() {
    if (!this.state.pressed) {
      this.setState({pressed: true, backgroundColor: 'black'});
    } else {
      this.setState({pressed: false, backgroundColor: 'gray'});
    }
  }
  render() {
    const image = {
      uri: 'https://cdn.pixabay.com/photo/2017/09/02/15/10/lighthouse-2707528_960_720.jpg',
    };
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <ImageBackground
            source={image}
            style={{
              flex: 0.55,
              height: height * 0.55,
              overflow: 'hidden',
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
            resizeMode="cover">
            <View style={{backgroundColor: 'rgba(0,0,0,0.7)', flex: 1}}>
              <View style={{height: height * 0.06}}>
                <Text
                  style={{
                    fontSize: 24,
                    textAlign: 'center',
                    color: '#fff',
                    marginTop: 17,
                    fontFamily: 'cochin',
                  }}>
                  TOURZİO
                </Text>
              </View>

              <View style={style.inputContainer}>
                <Icon
                  name="search"
                  size={26}
                  style={style.icon1}
                  onPress={() => alert('#')}
                />
                <TextInput
                  placeholder=" Destinations, Themes & Categories"
                  style={style.inputstyle}></TextInput>
              </View>
              <View
                style={{
                  justifyContent: 'flex-start',
                  top: 70,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  marginLeft: 15,
                }}>
                <Text style={{color: '#fff9', fontSize: 12}}>TRIP</Text>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 14}}>
                  THEMES
                </Text>
              </View>
              <ScrollView style={style.scroll1} horizontal={true}>
                <ImageButton
                  imageUrl={
                    'https://cdn.pixabay.com/photo/2018/02/09/10/34/face-to-face-3141317_960_720.jpg'
                  }
                  imageName={'HoneyMoon'}
                  resim={style.resim}
                />
                <ImageButton
                  imageUrl={
                    'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__340.jpg'
                  }
                  imageName={'Nature'}
                  resim={style.resim}
                />
                <ImageButton
                  imageUrl={
                    'https://cdn.pixabay.com/photo/2016/11/29/09/49/woman-1868817_960_720.jpg'
                  }
                  imageName={'Adventure'}
                  resim={style.resim}
                />

                <ImageButton
                  imageUrl={
                    'https://cdn.pixabay.com/photo/2019/06/18/11/32/cat-4282123__340.jpg'
                  }
                  imageName={'Animals'}
                  resim={style.resim}
                />
                <ImageButton
                  imageUrl={
                    'https://cdn.pixabay.com/photo/2020/03/24/05/37/family-4962874_960_720.jpg'
                  }
                  imageName={'Family'}
                  resim={style.resim}
                />
                <ImageButton
                  imageUrl={
                    'https://cdn.pixabay.com/photo/2018/02/04/17/11/venice-3130323_960_720.jpg'
                  }
                  imageName={'Europe'}
                  resim={style.resim}
                />
                <ImageButton
                  imageUrl={
                    'https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_960_720.jpg'
                  }
                  imageName={'Hotel'}
                  resim={style.resim}
                />
              </ScrollView>

              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  marginTop: 30,
                }}>
                <Text style={{color: '#fff9', fontSize: 12, marginLeft: 15}}>
                  TRENDING
                </Text>
                <TouchableOpacity onPress={() => Actions.push('Destinations')}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 15,
                      marginLeft: 15,
                    }}>
                    DESTINATIONS
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <ScrollView style={style.scroll2} horizontal={true}>
            <ImageButton2
              imageUrl={
                'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__480.jpg'
              }
              imageName={'Thailand'}
              imageName1={'starting:'}
              imageName2={'$1400/.'}
              resim2={style.resim2}
            />
            <ImageButton2
              imageUrl={
                'https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331__340.jpg'
              }
              imageName={'Greece'}
              imageName1={'starting:'}
              imageName2={'$6020/.'}
              resim2={style.resim2}
            />
            <ImageButton2
              imageUrl={
                'https://cdn.pixabay.com/photo/2019/03/31/14/31/italy-4093227__340.jpg'
              }
              imageName={'Italy'}
              imageName1={'starting:'}
              imageName2={'$7200/.'}
              resim2={style.resim2}
            />
            <ImageButton2
              imageUrl={
                'https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004__340.jpg'
              }
              imageName={'France'}
              imageName1={'starting:'}
              imageName2={'$5000/.'}
              resim2={style.resim2}
            />
            <ImageButton2
              imageUrl={
                'https://cdn.pixabay.com/photo/2020/09/18/21/12/buildings-5582974_960_720.jpg'
              }
              imageName={'Holland'}
              imageName1={'starting:'}
              imageName2={'$4500/.'}
              resim2={style.resim2}
            />
          </ScrollView>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexDirection: 'column',
              marginTop: 30,
            }}>
            <Text
              style={{
                color: 'gray',
                fontSize: 12,
                marginLeft: 15,
                fontWeight: 'bold',
              }}>
              {' '}
              SPECİAL{' '}
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 15,
              }}>
              {' '}
              OFFERS{' '}
            </Text>
          </View>
          <ScrollView style={style.scroll3}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <ImageButton3
                imageUrl={
                  'https://cdn.pixabay.com/photo/2020/09/18/21/12/buildings-5582974_960_720.jpg'
                }
                resim3={style.resim3}
              />
              <ImageButton3
                imageUrl={
                  'https://i.pinimg.com/236x/76/ae/8c/76ae8cc35b12dca088b264d60237a394.jpg'
                }
                resim3={style.resim3}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <ImageButton3
                imageUrl={
                  'https://i.pinimg.com/564x/ec/38/dc/ec38dc98a555dd13fbfec3a9c8501d5c.jpg'
                }
                resim3={style.resim3}
              />

              <ImageButton3
                imageUrl={
                  'https://i.pinimg.com/236x/ae/83/fc/ae83fc7891a836d5f184f2c5eb4e8379.jpg'
                }
                resim3={style.resim3}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 10,
                marginTop: 10,
              }}>
              <ImageButton3
                imageUrl={
                  'https://i.pinimg.com/236x/98/42/d9/9842d9a940ef70d5ab34b9aacede5571.jpg'
                }
                resim3={style.resim3}
              />
              <ImageButton3
                imageUrl={
                  'https://i.pinimg.com/236x/f4/f2/8f/f4f28f15493ba1870e3524910e0ca8f8.jpg'
                }
                resim3={style.resim3}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 10,
                marginTop: 10,
              }}>
              <ImageButton3
                imageUrl={
                  'https://cdn.pixabay.com/photo/2018/02/04/17/11/venice-3130323__340.jpg'
                }
                resim3={style.resim3}
              />
              <ImageButton3
                imageUrl={
                  'https://cdn.pixabay.com/photo/2019/06/18/11/32/cat-4282123__340.jpg'
                }
                resim3={style.resim3}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 10,
                marginTop: 10,
              }}>
              <ImageButton3
                imageUrl={
                  'https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389__340.jpg'
                }
                resim3={style.resim3}
              />
              <ImageButton3
                imageUrl={
                  'https://i.pinimg.com/236x/f4/f2/8f/f4f28f15493ba1870e3524910e0ca8f8.jpg'
                }
                resim3={style.resim3}
              />
            </View>
          </ScrollView>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: height * 0.08,
            borderTopColor: 'black',
            borderTopWidth: 4,
          }}>
          <View style={{marginLeft: 20}}>
            <TouchableOpacity onPress={() => Actions.push('HomePage')}>
              <Icon
                name="home"
                style={{
                  fontSize: 29,
                  marginTop: 8,
                  color: this.state.backgroundColor,
                }}
                onPress={() => this.changeColor()}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  marginLeft: 1,
                  color: this.state.backgroundColor,
                }}>
                Home
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: 15, marginRight: -10}}>
            <TouchableOpacity onPress={() => Actions.push('')}>
              <Icon
                name="star"
                style={{
                  fontSize: 29,
                  marginTop: 8,
                  color: this.state.backgroundColor,
                }}
                onPress={() => this.changeColor()}></Icon>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  marginLeft: 5,
                  color: this.state.backgroundColor,
                }}>
                Trip
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: width / 2,
              backgroundColor: '#fff',
              borderColor: 'black',
              borderWidth: 4,
              alignItems: 'center',
              bottom: 37,
              marginLeft: 15,
            }}>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: width / 2,
                  backgroundColor: '#000',
                  justifyContent: 'center',
                  margin: 6,
                }}>
                <Icon
                  name="search"
                  size={40}
                  style={{
                    alignItems: 'center',
                    color: 'white',
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginLeft: 5,
                    color: '#fff',
                  }}>
                  Search
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <TouchableOpacity onPress={() => Actions.push('')}>
              <Icon name="favorite" style={{fontSize: 29, marginTop: 8}} />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: -7,
                }}>
                Favourites
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginRight: 20}}>
            <TouchableOpacity onPress={() => Actions.push('')}>
              <Icon name="people" style={{fontSize: 29, marginTop: 6}} />
              <Text
                style={{fontSize: 10, fontWeight: 'bold', textAlign: 'center'}}>
                Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  icon: {
    bottom: 30,
    paddingLeft: 10,
  },
  inputContainer: {
    height: 43,
    width: '94%',
    backgroundColor: '#fff',
    borderRadius: 20,
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
  },
  icon1: {
    textAlign: 'right',
    paddingRight: 10,
    marginTop: 5,
  },
  inputstyle: {
    fontSize: 13,
    bottom: 32,
    paddingLeft: 15,
  },
  scroll1: {
    width: width,
    maxHeight: height * 0.15,
    borderRadius: 20,
    marginTop: 70,
  },
  resim: {
    width: 60,
    height: 60,
    borderRadius: width / 2,
    marginTop: -25,
  },
  scroll2: {
    width: width,
    height: height * 0.25,
    borderRadius: 20,
    marginTop: -80,
  },
  resim2: {
    width: 120,
    height: 130,
    borderRadius: 10,
  },
  scroll3: {
    width: width,
    height: height,
    borderRadius: 20,
    marginTop: 18,
  },

  resim3: {
    width: 180,
    height: 140,
    borderRadius: 10,
  },
});

export default HomePage;
