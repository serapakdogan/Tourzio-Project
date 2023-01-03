import React, {Component} from 'react';
import { TouchableOpacity, Image, Dimensions, View, ImageBackground, Text, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';


const {width, height} = Dimensions.get('window');

class ImageButton extends Component {
    render() {
      return (
            <View style ={{width: 58,alignItems:'center', marginTop: 95, justifyContent: 'space-between', marginRight: width*0.02, marginLeft: width*0.04}}>
                <TouchableOpacity onPress={() => Actions.push("ForgetPassword")} activeOpacity={0.8}>
                    <View style ={{ width: 58, alignItems:'center', justifyContent:'center', bottom: 40, }}>
                        <Image style = {this.props.resim} source={{ uri: this.props.imageUrl}} />
                        <Text style ={{ textAlign: 'center', width: 80, color:'#fff', fontWeight:'600', marginLeft:3 }}> {this.props.imageName}</Text>
                    </View>
                </TouchableOpacity>
            </View>





      )  
    }
    
    
}

export default ImageButton;