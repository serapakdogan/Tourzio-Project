import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { Button} from './Button';

const { width, height} = Dimensions.get("window");


class Register extends Component {

    render() {
        const { inputStyle } = styles
        const image = { uri: 'https://cdn.pixabay.com/photo/2014/02/05/22/09/paris-259510_960_720.jpg' }
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={image} resizeMode="cover" style={{ flex:1, justifyContent:'center'}}>
                <View style={{ height: height* 0.1, justifyContent: 'flex-start',  bottom: 30 }}>
                    <Text style={{ textAlign: 'center', color: "black", fontSize: 25 }}> TOURZIO </Text>
                    <Text style={{ textAlign: 'center', color: "black", fontSize: 15 }}> We  Stay  For  You. </Text>
                </View>

                <View style={{  height: height*0.078, justifyContent:'flex-start', bottom: 5}}>
                <View style={{ justifyContent:'space-evenly', flexDirection: 'row'}}>   
                    <TextInput 
                        placeholder="FIRST NAME"
                        placeholderTextColor= '#fff'
                        style={{ height: height*0.078 , 
                            width: "40%", 
                            backgroundColor: 'transparent',
                            borderColor: '#fff',
                            borderWidth: width* 0.003,
                            borderRadius: 5,
                            paddingLeft: 12,
                            fontSize: 12,
                            marginLeft: 18
                        }}
                    />             
                    <TextInput 
                        placeholder="LAST NAME"
                        placeholderTextColor= '#fff'
                        style={{ height: height*0.078 ,
                            width: "40%", 
                            borderColor: '#fff',
                            backgroundColor: 'transparent', 
                            borderWidth: width* 0.003,
                            borderRadius: 5,
                            paddingLeft: 12,
                            fontSize: 12,
                            marginRight: 18
                         }}
                    />
                    </View>
                    </View>
                    <View style={{ height: height* 0.38, justifyContent: 'space-around', bottom: 2 }}>
                        <TextInput 
                            placeholder="EMAIL ADDRESS"
                            placeholderTextColor= '#fff'
                            style={inputStyle}
                        />
                        <TextInput 
                        placeholder="MOBILE NUMBER"
                        placeholderTextColor= '#fff'
                        style={inputStyle}
                        />
                        <TextInput 
                        placeholder="PASSWORD"
                        placeholderTextColor= '#fff'
                        style={inputStyle}
                        />
                        <TextInput 
                        placeholder="CONFIRM PASSWORD"
                        placeholderTextColor= '#fff'
                        style={inputStyle}
                        />
                    </View>
                    <View style={{  height: height*0.068, width: "86%", marginTop: 20, alignSelf:'center' }}>
                        <Button> REGISTER </Button>
                    </View>
                    <View style ={{ alignItems:'center',  marginTop:18}} >
                    <Text style ={{ width: width * 0.82, textAlign:'center', alignItems:'center', color: '#fff'}} > By clicking Register, you accept our Terms of Use and Privacy Policy. </Text>
                    <View style ={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: width * 0.07, alignItems: 'center', marginTop:18}} >
                    <Text style={{ width: width* 0.50, textAlign:'right', color: '#fff',  }}> Already have an Account ? </Text>
                    <TouchableOpacity>
                    <Text style ={{ width: width* 0.20, color: '#fff', alignItems:'center', fontWeight:'bold',}}>LogIn</Text>
                    </TouchableOpacity>
                    </View>
                </View>















                </ImageBackground>
            </View>
    );
    }
    }


    const styles = {
        inputStyle: {
            color: '#fff',
            borderColor: "white",
            borderWidth: width* 0.003,
            paddingRight: 12,
            paddingLeft: 12,
            width: "84%",
            marginRight: 33,
            marginLeft:33,
            marginTop:5,
            fontSize: 12,
            borderRadius: 5,
            height: height*0.078,
            backgroundColor: 'transparent' ,
            
        },
    }
    export default Register;