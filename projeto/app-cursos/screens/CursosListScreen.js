import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function CursosListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Lista de Cursos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
