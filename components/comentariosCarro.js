import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import db from '../firebaseConfig';

export default function comentariosCarro({ navigation, route }) {
  const [comentario, setComentario] = useState('');

  db.collection('ComentariosCarro')
    .get()
    .then((querySnapshot) => {
      coments = [];
      usuarioComents = [];
      dataComentario = [];
      querySnapshot.forEach((doc) => {
        const dados = doc.data();

        coments.push(dados.Comentarios);
        usuarioComents.push(dados.Usuario);
        dataComentario.push(dados.Data);
      });
    });

  mesesAno = new Array(
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  );

  enviarComentario = () => {
    const data = new Date();
    db.collection('ComentariosCarro')
      .doc(route.params?.email)
      .set({
        Usuario: route.params?.email,
        Comentarios: comentario,
        Data:
          data.getDate() +
          ' de ' +
          mesesAno[data.getMonth()] +
          ' ás ' +
          data.getHours() +
          ':' +
          data.getMinutes(),
      });
    Alert.alert('Serviços marcados com sucesso!');
    navigation.navigate('telaPrincipal', { email: route.params?.email });
  };

  let i = 0;
  let arr = [];
  let tamanhoArray = usuarioComents.length;
  while (i < tamanhoArray) {
    arr.push(i);
    i++;
  }
  const CriarComentarios = arr.map((c) => (
    <View style={estilos.caixaComentario}>
      <Text style={estilos.tituloComentario}>
        {usuarioComents[c]} - {dataComentario[c]}
      </Text>
      <Text style={estilos.conteudoComentario}>{coments[c]}</Text>
    </View>
  ));
  return (
    <View style={estilos.tela}>
      <View style={estilos.caixa}>
        <Text style={estilos.titulo}>Comentarios</Text>

        <View style={estilos.comentarios}>
          <ScrollView>{CriarComentarios}</ScrollView>

          <View style={estilos.enviarComentario}>
            <TextInput
              style={estilos.input}
              placeholder="Digite seu comentário..."
              onChangeText={(text) => setComentario(text)}
              value={comentario}
            />
            <TouchableOpacity
              style={estilos.enviar}
              onPress={() => enviarComentario(this)}>
              <Text style={estilos.btnEnviar}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  caixa: {
    width: 300,
    height: 400,
    backgroundColor: '#9900cc',
    borderRadius: 15,
    alignItems: 'center',
  },
  comentarios: {
    backgroundColor: 'white',
    width: 260,
    height: 335,
    justifyContent: 'space-between',
  },
  caixaComentario: {
    borderBottomWidth: 1,
    marginBottom: 2,
    width: 200,
    padding: 5,
    marginLeft: 25,
  },
  tituloComentario: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  conteudoComentario: {
    fontSize: 10,
    padding: 3,
  },
  input: {
    borderWidth: 0,
    width: 300,
  },
  btnEnviar: {
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#9900cc',
    color: 'white',
    marginTop: 3,
    marginRight: 5,
  },
  enviarComentario: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#d9d9d9',
    backgroundColor: '#d9d9d9',
    marginTop: 10,
    height: 40,
  },
  enviar: {},
});
