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
import ImageButton4 from './Component/ImageButton4';

const {width, height} = Dimensions.get('window');

class Destination extends Component {
  render() {
    const image = {
      uri: 'https://www.oyakgrupsigorta.com/Content/img/blog-content/tamamlayici-saglik-sigortasi-nedir-oyak-grup-sigorta-1.jpg',
    };
    return (
      <View style={{flex: 1}}>
       
          <ImageBackground
            source={image}
            style={{
              height: height * 0.55,
              overflow: 'hidden',
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
            resizeMode="cover">
            <View style={{backgroundColor: 'rgba(0,0,0,0.7)' , flex:1}}>
              <View style={{height: height * 0.06}}>
                <Text style={style.text}> Device </Text>
                <Icon
                  name="sort"
                  size={28}
                  color="#fff"
                  style={{bottom: 30, paddingLeft: 10}}
                  onPress={() => alert('#')}
                />
              </View>
              <View style={style.inputContainer}>
                <Icon
                  name="search"
                  size={26}
                  style={{textAlign: 'right', paddingRight: 10, marginTop: 5}}
                  onPress={() => alert('#')}
                />
                <TextInput
                  placeholder=" Find your Device"
                  style={{
                    fontSize: 13,
                    bottom: 32,
                    paddingLeft: 15,
                  }}></TextInput>
              </View>
              </View>
              </ImageBackground>
            <View style={{ height: '85%'}}>
              <ScrollView style={{ bottom: 330
                 }}>
              <View
            style={{
              justifyContent: 'center',
             
              justifyContent: 'space-between',
             
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: 10,
                marginTop:25 ,
              }}>
              <ImageButton4
                imageUrl={
                  'https://cdn.pixabay.com/photo/2017/10/03/20/01/mri-2813899__480.jpg'
                }
                resim4={style.resim4}
                imageName1={'MR '} >
                </ImageButton4>
               
              
              <ImageButton4
                imageUrl={
                  'https://sesanltd.com.tr/wp-content/uploads/2020/08/monitorlu-defibrilator-bexen-reanibex-700-484.jpg'
                }
                resim4={style.resim4}
                imageName1={'Defibrilatör'}
                imageName2={'$1400/.'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: 10,
                marginTop: 60,
              }}>
              <ImageButton4
                imageUrl={
                  'https://1.bp.blogspot.com/-H_d9c5GfJnA/Un6mEfRobXI/AAAAAAAACEY/p5IkZA4hCfg/s1600/2013-11-09+Gamma+Camera.jpg'
                }
                resim4={style.resim4}
                imageName1={'Gama'}
                imageName2={'$1400/.'}
              />
              <ImageButton4
                imageUrl={
                  'https://cdn.pixabay.com/photo/2017/06/18/19/34/mammography-2416942__480.jpg'
                }
                resim4={style.resim4}
                imageName1={'Mamografi'}
                imageName2={'$1400/.'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: 10,
                marginTop: 60,
              }}>
              <ImageButton4
                imageUrl={
                  'https://cdn.pixabay.com/photo/2014/11/11/22/21/x-ray-machine-527618__340.jpg'
                }
                resim4={style.resim4}
                imageName1={'X-Ray'}
                imageName2={'$1400/.'}
              />
              <ImageButton4
                imageUrl={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZuk4M2Zb7Q646pMZcn-FrMUxEGuksAAOYpw&usqp=CAU'
                }
                resim4={style.resim4}
                imageName1={'Floroskopi'}
                imageName2={'$1400/.'}
              />
            </View>
          </View>
          </ScrollView>
          </View>
            </View>
          

        
      
    );
  }
}

const style = {
  inputContainer: {
    height: 43,
    width: '94%',
    backgroundColor: '#fff',
    borderRadius: 20,
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginTop: 17,
    fontFamily: 'AmericanTypewriter-Bold',
  },
  resim4: {
    width: 180,
    height: 150,
    borderRadius: 10,
  },
};

export default Destination;
