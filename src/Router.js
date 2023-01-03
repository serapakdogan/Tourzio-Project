import React from 'react';
import {Dimensions, View} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Tabs,
  Tab1,
  Stack,
  Drawer,
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import ForgotPassword from './ForgotPassword';
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import Register from './Register';
import Destination from './Destination';
import DrawerMenu from './DrawerMenu';
import Write from './Write';

const {width, height} = Dimensions.get('window');

const RouterComponent = () => {
  return (
    <Router sceneStyle={{marginTop: 65}}>
      <Stack key="main">
        <Scene
          key="loginScreen"
          component={LoginForm}
          titleStyle={{textAlign: 'center'}}
          title=" Giriş Ekranı "
          hideNavBar="true"
        />

        <Scene
          key="registerScreen"
          component={Register}
          titleStyle={{textAlign: 'center'}}
          title=" Kayıt Ekranı "
          hideNavBar="true"
          initial
        />

        <Scene
          key="forgotpasswordScreen"
          component={ForgotPassword}
          titleStyle={{textAlign: 'center'}}
          title=" Şifre Yenileme Ekranı"
          hideNavBar={true}
          
        />

        <Drawer
          key="drawerMenuScreen"
          contentComponent={DrawerMenu}
          navTransparent
          titleStyle={{color: 'transparent'}}
          drawerWidth={width * 0.65}
          drawerPosition="left"
          drawerType='slide'
          
          hideNavBar={false}
          title=" Drawer ekranı"
          drawerIcon={
            <View style={{height: height * 0.07, justifyContent: 'center'}}>
              <Icon
                name="menu"
                size={width * 0.08}
                style={{color: '#fafafa', alignSelf: 'center'}}
              />
            </View>
          }
         >
          <Scene
            key="homeScreen"
            component={HomePage}
            titleStyle={{textAlign: 'center', color: 'transparent'}}
            title="Anasayfa"
            hideNavBar="false"
            onRight={() => Actions.LoginForm()}
          />

        </Drawer>
        <Scene
            key="destinationScreen"
            component={Destination}
            titleStyle={{textAlign: 'center'}}
            title=" Destination ekranı"
            hideNavBar={true} initial
            
          />
                  <Scene
            key="writeScreen"
            component={Write}
            titleStyle={{textAlign: 'center'}}
            title=" Write ekranı"
            hideNavBar={true} 
            
          />
      </Stack>
    </Router>
  );
};
export default RouterComponent;
