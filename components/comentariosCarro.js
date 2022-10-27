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

import { auth } from '../firebaseConfig';

export default function comentariosCarro({ navigation }) {
  return (
    <View style={estilos.tela}>
      <View style={estilos.caixa}>
        <Text style={estilos.titulo}> COMENTÁRIOS</Text>

        <View style={estilos.comentarios}>
          <ScrollView>
            <View style={estilos.caixaComentario}>
              <Text style={estilos.tituloComentario}>COMENTARIO - DATA</Text>
              <Text style={estilos.conteudoComentario}>
                SERVIÇO FODA
              </Text>
            </View>

            <View style={estilos.caixaComentario}>
              <Text style={estilos.tituloComentario}>COMENTARIO - DATA</Text>
              <Text style={estilos.conteudoComentario}>
                SERVIÇO FODA
              </Text>
            </View>

            <View style={estilos.caixaComentario}>
              <Text style={estilos.tituloComentario}>COMENTARIO - DATA</Text>
              <Text style={estilos.conteudoComentario}>
                 SERVIÇO FODA
              </Text>
            </View>
          </ScrollView>

          <View style={estilos.enviarComentario}>
            <TextInput
              style={estilos.input}
              placeholder="Digite seu comentário..."
            />
            <TouchableOpacity style={estilos.enviar}>
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
    color:'white'
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
    width:200,
    padding: 5,
    marginLeft:25
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
    backgroundColor:'#9900cc',
    color:'white',
    marginTop:3,
    marginRight:5
  },
  enviarComentario: {
    flexDirection: 'row',
    borderWidth:2,
    borderRadius:2,
    borderColor:'#d9d9d9',
    backgroundColor:'#d9d9d9',
    marginTop:10,
    height:40

  
  },
  enviar: {},
});
