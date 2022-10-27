import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert
} from 'react-native';

import { auth } from '../firebaseConfig';
import db from '../firebaseConfig'

export default function cadastro({ navigation }) {
    const [nomeUsuario, setnomeUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

      Cadastrar = () => {
    if(email == "" || senha == "" || confirmaSenha == "" || nomeUsuario == ""){
      Alert.alert("Um ou mais campos em branco");
    }else if(senha != confirmaSenha){
      Alert.alert("As senhas não batem")
    }else{
      auth
      .createUserWithEmailAndPassword(email, senha)
      .then(userCredentials => {

        db.collection('Contas').add({
          Nome: nomeUsuario,
          Email: email

    })
        Alert.alert("Usuario criado com sucesso");
        navigation.navigate('Login')
      })
      .catch(error => alert(error.message))
    }
  }
return(
    <View style={estilos.tela}>
          <TextInput style={estilos.input} placeholder="Nome de usuario" onChangeText={text => setnomeUsuario(text)} value={nomeUsuario}/>
      <TextInput style={estilos.input} placeholder="Email" onChangeText={text => setEmail(text)}
        value={email}/>
      <TextInput style={estilos.input} secureTextEntry={true} placeholder="Senha" onChangeText={text => setSenha(text)}
        value={senha}/>
       <TextInput style={estilos.input} secureTextEntry={true} placeholder="Confirma a senha" onChangeText={text => setConfirmaSenha(text)}
        value={confirmaSenha}/>


      <TouchableOpacity style={estilos.botao} onPress={() => Cadastrar(this)}>
      <Text style={estilos.botaoText}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}
const estilos = StyleSheet.create({
  tela:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#2c3e50"
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
      padding: 10
    },
    botao:{
      width: 300,
      height: 42,
      backgroundColor: "#3498db",
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
      color: 'orange',
      fontSize: 17,
      padding: 5,
      },
})

