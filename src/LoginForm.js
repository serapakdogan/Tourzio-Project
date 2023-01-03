import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/Ionicons";
import { Button } from './Button';


const { width, height} = Dimensions.get("window");


class LoginForm extends Component {

    render() {
        const { inputStyle, buttonStyle } = styles
        const image = { uri: 'https://cdn.pixabay.com/photo/2014/02/05/22/09/paris-259510_960_720.jpg' }
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={image} resizeMode="cover" style={{ flex:1, justifyContent:'center'}}>
                <View style={{  height: height* 0.1, justifyContent: 'flex-start', bottom: 70 }}>
                    <Text style={{ textAlign: 'center', color: "black", fontSize: 25 }}> TOURZIO </Text>
                    <Text style={{ textAlign: 'center', color: "black", fontSize: 15 }}> We  Stay  For  You. </Text>
                </View>
                <View style={{ bottom: 45 }}>
                <View style={{ height: height*0.215, justifyContent: 'flex-start', alignContent:'space-around'}}>
                    <TextInput 
                        placeholder="E-mail Address Or Mobile Number"
                        placeholderTextColor= '#fff'
                        style={inputStyle}
                    />
                    <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor= '#fff'
                        style={inputStyle}
                    />
                    <TouchableOpacity onPress ={() => Actions.push("forgotpasswordScreen")}>
                    <Text style={{color: "white", fontSize: 12, marginTop: 13 , textAlign: 'right', right: 37}}> FORGOT PASSWORD! </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{  height: height*0.066, width: "84%", marginTop: 20, alignSelf:'center'}}>
                  
                    <Button 
                    onPress={() => Actions.push("drawerMenuScreen")}
                    > LOG IN </Button>
                    </View>


                     
                <View style= {{ height: height* 0.13, }}>
                    <Text style={{ textAlign: 'center', 
                    color: 'white', 
                    fontWeight: 'bold', 
                    fontSize: 20 ,
                    marginTop: 30
                    
                    }}>
                            OR
                    </Text>
                    <Text style={{ textAlign: 'center', color: 'white',fontSize: 14, marginTop: 25}}>
                            Login with
                    </Text>
                </View>

               <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop:20 , paddingHorizontal:width *0.07, }}>
                   <Icon.Button 
                        name= "md-logo-facebook"
                        backgroundColor="#3b5998"
                        onPress={() => alert( 'LoginwithFacebook')} >
                        FACEBOOK
                    </Icon.Button>

                    <Icon.Button 
                        name= "md-logo-twitter"
                        backgroundColor="#65AAF7"
                        onPress={() => alert( 'Login with Twitter')} >
                        TWİTTER
                    </Icon.Button>

                    <Icon.Button 
                        name= "md-logo-google"
                        backgroundColor="red"
                        onPress={() => alert( 'Login with Google')} >
                        GOOGLE+
                    </Icon.Button>
                    </View>
                <View style ={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: width * 0.07, alignItems: 'center', marginTop:18}} >
                    <Text style ={{ width: width * 0.50, textAlign: 'right', alignItems:'center', color: '#fff'}} > New to Tourzio ? </Text>
                    <TouchableOpacity onPress={() => Actions.push('registerScreen')}>
                    <Text style ={{ width: width* 0.40, textAlign: 'left', color: '#fff', alignItems:'center', fontWeight:'bold' }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
                </View>
                </ImageBackground>
         </View>
        
        )
    };
}

const styles = {
    inputStyle: {
        color: '#fff',
        borderColor: "white",
        borderWidth: width* 0.003,
        paddingRight: 12,
        paddingLeft: 12,
        marginLeft: 38,
        width: "81%",
        marginTop:10,
        fontSize: 17,
        borderRadius: 5,
        height: "36%",
        backgroundColor: 'transparent' , 
        
    },


};

export default LoginForm;