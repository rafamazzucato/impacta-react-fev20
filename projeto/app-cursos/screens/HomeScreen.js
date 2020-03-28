import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Página inicial</Text>
      <View style={styles.botao}>
        <Button
          title="Lista de Cursos"
          onPress={() => props.navigation.navigate('Cursos')} />
         <Button
          title="Envie seu contato"
          onPress={() => props.navigation.navigate('Contato')} />
      </View>
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
    fontSize: 20
  },
  botao: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  }  
});
