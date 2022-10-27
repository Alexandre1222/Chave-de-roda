import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

export default function telaPrincipal({ navigation, route }) {
  return (
    <View style={estilos.tela}>
      <View style={estilos.caixa}>
        <TouchableOpacity style={estilos.botao} onPress = { () => navigation.navigate('Carro')}>
          <Image
            source={require('../assets/carro.png')}
            style={estilos.imgCarro}
          />
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress = { () => navigation.navigate('Moto')}>
          <Image
            source={require('../assets/moto.png')}
            style={estilos.imgMoto}
          />
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress = { () => navigation.navigate('Bicicleta')}>
          <Image source={require('../assets/bct.png')} style={estilos.imgBct}/>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress = { () => navigation.navigate('Diversos')}>
          <Image source={require('../assets/diversos.png')} style={estilos.imgDiv}/>
        </TouchableOpacity>

      </View>
    </View>
  );
}
const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  caixa:{
    justifyContent:'center',
    padding:80,
  },
  botao:{
    justifyContent:'center',
    borderWidth:3,
    borderRadius:10,
    borderColor:'#9900cc',
    alignItems:'center',
    backgroundColor:'white',
    width:'100%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 5,
    width:200,
    height:100,
  },
  imgBct:{
    margin: 'auto',
    width:100,
    height:70,
    
  },
  imgMoto:{
    margin: 'auto',
    width:140,
    height:70,
    
  },
  imgCarro:{
    margin: 'auto',
    width:90,
    height:72,
    
  },
  imgDiv:{
    margin: 'auto',
    width:135,
    height:50,
    
  },
  palavrasServicos:{
    fontSize: 15
  }
});
