import React, {Component} from 'react';
import { TouchableOpacity, Image, Dimensions, View, ImageBackground, Text, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';


const {width, height} = Dimensions.get('window');

class ImageButton4 extends Component {
    render() {
      return (
            <View style ={{ justifyContent:'space-between',  paddingRight:10, width: 180, height: 140, marginRight: width*0.02, marginLeft: width*0.04, marginTop: 5,}}>
                <TouchableOpacity onPress={() => Actions.push("writeScreen")} activeOpacity={0.8}>
                <View style={{ flexDirection:'row',}}>
                        <Image style = {this.props.resim4} source={{ uri: this.props.imageUrl}} />
                        <Text style={{ margin: 45 ,top:7, textAlign:'center', fontSize: 18, color:'#000', fontWeight:'bold', position:'absolute'}}>{this.props.imageName1}</Text>
                        
                        </View>     
                </TouchableOpacity>
            </View>





      )  
    }
  
}

export default ImageButton4;