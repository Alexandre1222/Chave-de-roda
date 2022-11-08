import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import db from '../firebaseConfig'

export default function Carro({ navigation, route }) {
  const [opcaoUm, setopcaoUm] = React.useState(true);
  const [opcaoDois, setopcaoDois] = React.useState(true);
  const [opcaoTres, setopcaoTres] = React.useState(true);

  let valorServicos = [];
  let servicos = [] 
  let id = []
  let soma = 0;


  switch(opcaoUm){
    case true:
    valorServicos.push(100);
    id.push(1222)
    servicos.push("Revisão")
    break;
  }

    switch(opcaoDois){
    case true:
    valorServicos.push(50);
    id.push(13)
    servicos.push("Troca de pneu")
    break;
  }

    switch(opcaoTres){
    case true:
    valorServicos.push(200);
    id.push(22)
    servicos.push("Lavagem e Lubrificação")
    break;
  }
  for(var i = 0; i < valorServicos.length; i++) {
    soma += valorServicos[i];
}

    function addTask(){

        db.collection("Contas").doc(route.params?.email).set({
          ID: id,
          NomeServico: servicos,
          tipoServico: "Carro",
          valorServico: valorServicos,
          horaAgendada: Date()
    }, { merge: true })
    Alert.alert("Serviços marcados com sucesso!");
    navigation.navigate('telaPrincipal', {email: route.params?.email})
    }
  return (
    <View style={estilos.tela}>

    <View style={estilos.caixa}>
        <View style={estilos.ops}>
         <Checkbox
            status={opcaoUm ? 'checked' : 'unchecked'}
            onPress={() => {
              setopcaoUm(!opcaoUm);
            }}
          />
          <Text style={estilos.texto}> Revisão (R$100)</Text>
         
        </View>

        <View style={estilos.ops}>
        <Checkbox
            status={opcaoDois ? 'checked' : 'unchecked'}
            onPress={() => {
              setopcaoDois(!opcaoDois);
            }}
          />
          <Text style={estilos.texto}>Troca de pneu (R$50)</Text>
          
        </View>
        <View style={estilos.ops}>
           <Checkbox
            status={opcaoTres ? 'checked' : 'unchecked'}
            onPress={() => {
              setopcaoTres(!opcaoTres);
            }}
          />
          <Text style={estilos.texto}>Lavagem e Lubrificação (R$200)</Text>
       
        </View>
      </View>

      <TouchableOpacity style={estilos.selecionarCaixa} onPress={() => addTask(this)}>
        <Text style={estilos.selecionar}>Selecionar</Text>
        <Text style={estilos.valorTotal}>R$ {soma}</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('comentariosCarro',  {email: route.params?.email})}>
        <Text style={estilos.textoComentarios}>Avaliações</Text>
      </TouchableOpacity>
    </View>
  );
}
const estilos = StyleSheet.create({
 tela:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'white',
 },
 ops:{
    flexDirection:'row',
    borderWidth:1,
    borderRadius:5,
    borderColor: '#9900cc',
    padding: 9,
    backgroundColor: '#d9d9d9',
    marginTop: 4,
    width: 300,
    height:70,

 },
 texto: {
    fontSize: 20,
    
  },
  valorTotal:{
    fontSize: 20,
    color:'white',
    textAlign:'center'
  },
  selecionarCaixa:{
    backgroundColor:'#9900cc',
    borderRadius:10,
    padding: 5,
    width: 200,
    height: 70,
    marginTop:15,
    
 
  },
   selecionar:{
    fontSize: 20,
    color:'white',
    textAlign:'center'
  },
    
  textoComentarios:{
    fontSize: 16,
    color:'bleck',
    fontWeight: 'bold',
    flexDirection:'column',
    marginTop:20,  
  
  }
});
