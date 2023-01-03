import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

export default class DrawerMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{
            width: width * 0.65,
            height: height * 0.21,
            position: 'absolute',
          }}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945__340.jpg',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: height * 0.21,
          }}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: width / 2,
            }}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113__340.png',
            }}></Image>
          <Text
            style={{
              flexDirection: 'row',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000',
            }}>
            {' '}
            David Beckham{' '}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            elevation: 0.5,
            justifyContent: 'space-between',
          }}>
          <View style={{height: height * 0.05, flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => Actions.homeScreen({type: 'replace'})}>
              <Text style={styles.title}> Home </Text>

              <Icon
                name="home"
                size={width > 600 ? width * 0.035 : width * 0.06}
                style={{
                  color: '#000',
                  paddingLeft: 35,
                  bottom: 20,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => Actions.destinationScreen()}>
              <Text style={styles.title}> Destination </Text>
              <Icon
                name="earth"
                size={width > 600 ? width * 0.035 : width * 0.06}
                style={{
                  color: '#000',
                  paddingLeft: 35,
                  bottom: 15,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => Actions.page3()}>
              <Text style={styles.title}> Trip Detail </Text>
              <Icon
                name="md-list"
                size={width > 600 ? width * 0.035 : width * 0.06}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  paddingLeft: 35,
                  bottom: 15,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => Actions.drawerClose()}>
              <Text style={styles.title}> TripCollections </Text>
              <Icon
                name="md-images-sharp"
                size={width > 600 ? width * 0.035 : width * 0.06}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  paddingLeft: 35,
                  bottom: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => Actions.drawerClose()}>
              <Text style={styles.title}> Register </Text>
              <Icon
                name="lock-closed"
                size={width > 600 ? width * 0.035 : width * 0.06}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  paddingLeft: 35,
                  bottom: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => Actions.drawerClose()}>
              <Text style={styles.title}> Sign In </Text>
              <Icon
                name="log-in"
                size={width > 600 ? width * 0.035 : width * 0.06}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  paddingLeft: 35,
                  bottom: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => Actions.drawerClose()}>
              <Text style={styles.title}> About </Text>
              <Icon
                name="information-circle-sharp"
                size={width > 600 ? width * 0.035 : width * 0.06}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  paddingLeft: 35,
                  bottom: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => Actions.drawerClose()}>
              <Text style={styles.title}> Contact </Text>
              <Icon
                name="mail"
                size={width > 600 ? width * 0.035 : width * 0.06}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  paddingLeft: 35,
                  bottom: 15,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: height * 0.2,
            justifyContent: 'space-between',
            marginBottom: 40,
            bottom: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 10,
              paddingLeft: 35,
              color: '#000',
            }}>
            {' '}
            Member{' '}
          </Text>
          <View
            style={{alignItems: 'center', marginTop: 10, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => Actions.drawerClose()}>
              <Text style={styles.title}> Dashboard </Text>
              <Icon
                name="home"
                size={width > 600 ? width * 0.035 : width * 0.06}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  paddingLeft: 35,
                  bottom: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => Actions.drawerClose()}>
              <Text style={styles.title}> Settings </Text>
              <Icon
                name="settings"
                size={width > 600 ? width * 0.035 : width * 0.06}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  paddingLeft: 35,
                  bottom: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => Actions.drawerClose()}>
              <Text style={styles.title}> Logout </Text>
              <Icon
                name="md-log-out"
                size={width > 600 ? width * 0.035 : width * 0.06}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  paddingLeft: 35,
                  bottom: 15,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    left: 80,
  },

  title: {
    fontSize: 13,
    left: 85,
    color: '#000',
    fontWeight: 'bold',
    flexDirection: 'row',
    top: 7,
  },
});
