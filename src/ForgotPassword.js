import React, { Component } from 'react';
import { Text, TextInput, View, Dimensions, ImageBackground } from 'react-native';
import { Button} from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';


const { width, height} = Dimensions.get("window");


class ForgotPassword extends Component {

    render() {
        const { stylesinput, stylesicon } = styles
        const image = { uri: 'https://cdn.pixabay.com/photo/2014/02/05/22/09/paris-259510_960_720.jpg' }
        return (
            <View style={{flex: 1}}>
            <ImageBackground source={image} resizeMode="cover" style={{ flex:1, justifyContent:'center'}}>
                <View style={{ height: height*0.18,  justifyContent:'space-around', marginLeft: 25, bottom:110}}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#555'}}>Forgot{"\n"}Password </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#555'   }}>Select which contact details should we{"\n"} use to reset your password</Text>
                </View>
                <View style={{ height: height*0.09, 
                    width: width*0.9, 
                    borderStyle:'solid', 
                    borderColor: '#fff', 
                    borderWidth: 1, 
                    borderRadius: 5,
                    alignSelf:'center',
                    bottom:49
                     }}>
            
                    <Icon
                    name= 'phone-iphone'
                    style={stylesicon}
                    size={33}
                        >                         
                    </Icon>
                    <Text style={{ fontSize: 16, left: 90, bottom: 50, color:'#fff', fontWeight:'bold', marginTop: 12}}> Via SMS</Text>
                    <TextInput
                        secureTextEntry
                        placeholder= '+91 ***** ***89'
                        placeholderTextColor='#fff'
                        style={stylesinput}
                        textContentType= 'telephoneNumber'
                        
                    ></TextInput>
                </View>

                <View style={{
                    height: height*0.09, 
                    width: width*0.9, 
                    borderStyle:'solid', 
                    borderColor: '#fff', 
                    borderWidth: 1, 
                    borderRadius: 5,
                    alignSelf:'center',
                    bottom: 35
                }}>
                <Icon
                    name= 'email'
                    style={stylesicon}
                    type='MaterialIcons'
                    size={33}>                         
                    </Icon>
                    <Text style={{ fontSize: 16, left: 90, bottom: 50, color:'white', fontWeight:'bold', marginTop: 12}}> Via E-MAİL</Text>
                    <TextInput
                        secureTextEntry
                        placeholder= '************@gmail.com'
                        placeholderTextColor='#fff'
                        style={stylesinput}
                        textContentType= 'telephoneNumber'
                        
                    ></TextInput> 
                </View>
                <View style={{ height: height*0.068, width: "93%", marginTop: 10, alignSelf:'center', bottom: 20}}>
                <Button > SEND </Button>
                </View>

                </ImageBackground>
                </View>

        );
    }
}

const styles={
    stylesicon:{
        marginLeft: 30,
        color:'#fff',
        marginTop: 10
    },
    stylesinput: {
        fontSize: 15,
        bottom: 50,
        padding: 10,
        color: 'white',
        height: height *0.045,
        width: '80%',
        left: 85,



}
}







export default ForgotPassword;