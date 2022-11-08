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

        db.collection("Contas").doc(email).set({
          Email: email,
          Nome: nomeUsuario
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
    backgroundColor: 'white'
    },

    input:{
      marginTop: 10,
      backgroundColor: "white",
      width: 300,
      fontSize: 16,
      fontWeight: 'bold',
      borderColor:'#9900cc',
      borderWidth:1,
      borderRadius: 3,
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

});

