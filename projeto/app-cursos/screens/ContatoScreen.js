import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, Button } from 'react-native';
import axios from 'axios';

const URL = 'http://192.168.0.2:3200/api/contatos';

export default function ContatoScreen(props) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');

  const enviarContato = () =>{
    if(nome === '' || nome === undefined 
      || email === '' || email === undefined 
      || assunto === '' || assunto === undefined){
      Alert.alert(
        'Contatos',
        'Favor preencher todos os campos',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      );
      return;
    }

    const body = {nome:nome, email:email, assunto:assunto, data: new Date().toISOString()};
    console.log(body);
    axios.post(URL, body).then(_ => {
      Alert.alert(
        'Contatos',
        'Contato enviado com sucesso.',
        [
          {text: 'Voltar para home', onPress: () => props.navigation.navigate('Home')},
        ],
        { cancelable: false }
      );
    }).catch(error => {
      console.log(error)
      Alert.alert(
        'Contatos',
        'Erro ao enviar contato.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      );
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Envie seu contato</Text>
      <TextInput placeholder="Digite seu nome" style={styles.input} 
        value={nome} onChangeText={text => setNome(text)}/>
      <TextInput placeholder="Digite seu email" style={styles.input} 
        value={email} onChangeText={text => setEmail(text)}/>
      <TextInput placeholder="Informe o assunto" style={[styles.input, styles.area]} 
        value={assunto} onChangeText={text => setAssunto(text)}/>
      <Button title="Enviar Contato" onPress={enviarContato}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    alignItems: "center",
    fontSize: 30,
    margin: 20,
    color: '#FF0000',
  },
  input: {
    width: '90%',
    height: 40,
    padding: 10,
    margin: 10,
    borderColor: '#dcda44',
    borderWidth: 1
  },
  area : {
    height: 150
  }
});
