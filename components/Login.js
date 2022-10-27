import React, {useState} from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Alert,Image } from 'react-native'

import { auth } from '../firebaseConfig';

export default function login({navigation}){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  ValidarEmail = () => {
    if(email == "" || senha == ""){
      Alert.alert("Um ou mais campos em branco");
    }else{
      auth
      .signInWithEmailAndPassword(email, senha)
      .then(userCredentials => {
        navigation.navigate('telaPrincipal', {paramKey: email,})
      })
      .catch(error => alert(error.message))
    }
  }
  return(
    <View style={estilos.tela}>
      <Text style={estilos.logo}> <Image
            source={require('../assets/logoProjeto.png')}
            style={estilos.img}
          /></Text>

      <TextInput style={estilos.input} placeholder="Email" onChangeText={text => setEmail(text)}
        value={email}/>
      <TextInput style={estilos.input} secureTextEntry={true} placeholder="Senha" onChangeText={text => setSenha(text)}
        value={senha}/>

      <TouchableOpacity style={estilos.botao} onPress={() => ValidarEmail(this)}>
      <Text style={estilos.botaoText} onPress={() => ValidarEmail(this)}>Login</Text>
      </TouchableOpacity>

      <Text style={estilos.cadastre} onPress = { () => navigation.navigate('Cadastro')}>Cadastre- se</Text>
    </View>
  );
}
const estilos = StyleSheet.create({
  tela:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
    },
    img:{
      width:140,
      height:90,
    },
    logo:{
      width: 150,
      height: 150,
      backgroundColor: 'white',
      fontSize: 25,
      textAlign: 'center',
    },
    input:{
      marginTop: 10,
      backgroundColor: "white",
      width: 300,
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 3,
      borderWidth: 1,
      borderColor: "#9900cc",
      padding: 10
    },
    botao:{
      width: 300,
      height: 42,
      backgroundColor: "#9900cc",
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center'
    },
    botaoText:{
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
    },
    cadastre:{
      marginTop: 10,
      fontWeight:'bold',
      color: 'black',
      fontSize: 17,
      padding: 5,
      },
})







