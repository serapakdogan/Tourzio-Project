import React, {Component} from 'react';
import { TouchableOpacity, Image, Dimensions, View, ImageBackground, Text, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';


const {width, height} = Dimensions.get('window');

class ImageButton2 extends Component {
    render() {
      return (
            <View style ={{ width: 120,height: 185, borderBottomEndRadius: 10, borderTopRightRadius:10, elevation: 10, borderTopLeftRadius:10,borderBottomLeftRadius:10, backgroundColor: '#fff', marginLeft: width*0.04,  }}>
                <TouchableOpacity onPress={() => Actions.push(" ")} activeOpacity={0.8}>
                        <Image style = {this.props.resim2} source={{ uri: this.props.imageUrl}} />
                        <View style={{  width: 110, marginTop:8}}>
                        <Text style ={{ textAlign: 'left', color:'#000', fontWeight:'700', marginLeft: 5}}> {this.props.imageName}</Text>
                        <Text style ={{ textAlign: 'left',  color:'gray', fontWeight:'600',  marginLeft:7, fontSize:13 }}> {this.props.imageName1}</Text>
                        <Text style ={{ textAlign: 'right',  fontWeight:'600', color:'green', bottom:18, left: 5 }}> {this.props.imageName2}</Text>
                    </View>
                </TouchableOpacity>
            </View>





      )  
    }
    
    
}

export default ImageButton2;