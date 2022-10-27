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

export default function Carro({ navigation }) {
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
    servicos.push("Troca de rolamento")
    break;
  }

    switch(opcaoTres){
    case true:
    valorServicos.push(200);
    id.push(22)
    servicos.push("Personalização")
    break;
  }
  for(var i = 0; i < valorServicos.length; i++) {
    soma += valorServicos[i];
}

    function addTask(){

        db.collection('Servicos').add({
          ID: id,
          NomeServico: servicos,
          valorServico: valorServicos

    })
    Alert.alert("Serviços marcados com sucesso!");
    navigation.navigate('telaPrincipal')
    }
  return (
    <View style={estilos.tela}>

    <View style={estilos.caixa}>
        <View style={estilos.ops}>
          <Text style={estilos.texto}> Revisão (R$100)</Text>
          <Checkbox
            status={opcaoUm ? 'checked' : 'unchecked'}
            onPress={() => {
              setopcaoUm(!opcaoUm);
            }}
          />
        </View>

        <View style={estilos.ops}>
          <Text style={estilos.texto}>Troca de rolamento (R$50)</Text>
          <Checkbox
            status={opcaoDois ? 'checked' : 'unchecked'}
            onPress={() => {
              setopcaoDois(!opcaoDois);
            }}
          />
        </View>
        <View style={estilos.ops}>
          <Text style={estilos.texto}>Personalização (R$200)</Text>
          <Checkbox
            status={opcaoTres ? 'checked' : 'unchecked'}
            onPress={() => {
              setopcaoTres(!opcaoTres);
            }}
          />
        </View>
      </View>

      <TouchableOpacity style={estilos.selecionarCaixa} onPress={() => addTask(this)}>
        <Text style={estilos.selecionar}>Selecionar</Text>
        <Text style={estilos.valorTotal}>R$ {soma}</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('comentariosCarro')}>
        <Text style={estilos.textoComentarios}>Avaliações</Text>
      </TouchableOpacity>
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

  ops: {
    justifyContent: 'left',
    flexDirection: 'row-reverse',
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: '1px',
    borderColor: '#9900cc',
    padding: '9px',
    backgroundColor: '#d9d9d9',
    width: '90%',
    height:'30%',
    marginTop: 4,
    marginLeft:17,

  },
  texto: {
    fontSize: '20px',
  },
  valorTotal:{
    fontSize: 16,
    color:'white',
  },
  selecionarCaixa:{
    backgroundColor:'#9900cc',
    borderRadius:10,
    padding: 10,
    width: 250,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
 
  },
  selecionar:{
    fontSize: 16,
    color:'white',
  },
    
  textoComentarios:{
    fontSize: 16,
    color:'bleck',
    fontWeight: 'bold',
    flexDirection:'column',
    marginTop:10,  
    position:"absolut"
  }
});

