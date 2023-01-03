import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    ImageBackground,
    image,
    Text,
    View,
  } from 'react-native';

  const {width, height} = Dimensions.get('window');

class Write extends Component {
    render() {
        const image = {
          uri: 'https://www.oyakgrupsigorta.com/Content/img/blog-content/tamamlayici-saglik-sigortasi-nedir-oyak-grup-sigorta-1.jpg',
        };
        return (

          <View style={{flex: 1}}>
       
          <ImageBackground
            source={image}
            style={{
              height: height * 1,
              overflow: 'hidden',
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
            resizeMode="cover">
                
    
    
               <View style= {{ justifyContent: 'space-between', height: height* 0.14, borderRadius:10, width: width*0.6, backgroundColor:'white', alignSelf: 'center', marginTop:20 }}>
                <Text style={{ fontSize: 15, paddingLeft: 10, color: '#000', textAlign:'center' }}>MR CİHAZI</Text>
               <Text style= {{ justifyContent:'flex-end',  fontSize: 12, bottom : 10, paddingLeft: 10, color: '#000', }}>  Canlıların iç yapısını görüntüleme amacıyla{"\n"}daha çok tıpta kullanılan bir yöntemdir.{"\n"}Yüksek düzeyde manyetizmayla canlı doku,{"\n"}yansıtma yöntemiyle görüntülenir </Text>
               </View>
               <View style= {{ justifyContent: 'space-between', height: height* 0.12, borderRadius:10, width: width*0.6, backgroundColor:'white', marginTop: 15, alignSelf:'center' }}>
                <Text style={{ fontSize: 15, paddingLeft: 10, color: '#000'}}>Defibrilatör Cihazı</Text>
               <Text style= {{ justifyContent:'flex-end',  fontSize: 12, bottom:10, paddingLeft: 10, color: '#000', }}>  Defibrilatör, fibrilasyona girmiş bir kalbin{"\n"}normal ritmini geri kazanabilmesi için kalbe kısa sureli yüksek değerde{"\n"}akım veren cihazdır. </Text>
               </View>
               <View style= {{ justifyContent: 'space-between', height: height* 0.139, borderRadius:10, width: width*0.6, backgroundColor:'white', marginTop: 20,  alignSelf:'center' }}>
                <Text style={{ fontSize: 15, paddingLeft: 10, color: '#000', }}>Gamma Knife</Text>
               <Text style= {{ justifyContent:'flex-end',  fontSize: 12, paddingLeft: 10, color: '#000', }}>  Gamma knife, stereotaktik radyocerrahi adı verilen{"\n"}bir teknik kullanarak uygulanır ve{"\n"}koordinatları belirlenmiş hastalıklı beyin dokusunun,{"\n"}gamma ışınları ile yok edilmesini sağlar </Text>
               </View>
               <View style= {{ justifyContent: 'space-between', height: height* 0.135, borderRadius:10, width: width*0.6, backgroundColor:'white', marginTop: 20,  alignSelf:'center' }}>
                <Text style={{ fontSize: 15, paddingLeft: 10, color: '#000', }}>Mamografi</Text>
               <Text style= {{ justifyContent:'flex-end',  fontSize: 12, paddingLeft: 10, color: '#000', }}>  Memede, muayene ile saptanamayacak kadar küçük{"\n"}anormalliklerin tespit edilmesi amacıyla uygulanan mamografi yönteminde elde edilen sonuç, meme kanseri tanısında büyük önem taşımaktadır. </Text>
               </View>
               <View style= {{ justifyContent: 'space-between', height: height* 0.138, borderRadius:10, width: width*0.6, backgroundColor:'white', marginTop: 20,  alignSelf:'center' }}>
                <Text style={{ fontSize: 15, paddingLeft: 10, color: '#000', }}>X-Ray Cihazı</Text>
               <Text style= {{ justifyContent:'flex-end',  fontSize: 12, paddingLeft: 10, color: '#000', }}>  X-ray, vücudunuzdaki yapıların, özellikle de kemiklerin görüntülerini üreten hızlı, ağrısız bir testtir. X-ışınları vücudunuzun içinden geçer ve geçirdikleri malzemenin yoğunluğuna bağlı olarak farklı miktarlarda emilirler. </Text>
               </View>
               <View style= {{ justifyContent: 'space-between', height: height* 0.135, borderRadius:10, width: width*0.6, backgroundColor:'white', marginTop: 20,  alignSelf:'center' }}>
                <Text style={{ fontSize: 15, paddingLeft: 10, color: '#000', }}>Floroskopi</Text>
               <Text style= {{ justifyContent:'flex-end',  fontSize: 12, paddingLeft: 10, color: '#000', bottom: 18}}>  Floroskopi, floroskop adı verilen cihaz yardımı ile hastanın gerçek zamanlı görüntülerinin alınması için kullanılan tıbbi görüntüleme tekniğidir. </Text>
               </View>
               
               
               
               
               
               </ImageBackground>
              </View>
        );
    }
}
export default Write;
