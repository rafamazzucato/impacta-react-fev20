import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';

const URL = 'http://192.168.0.2:3200/api/cursos';

export default function CursosListScreen() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const listarCursos = async _ =>{
    setLoading(true);
    const response = await axios.get(URL);
    setData(response.data);
    setLoading(false);
  }

  useEffect(() => {
    listarCursos();
  },[])

  return (
    <View style={styles.container}>
      <View>
        <SafeAreaView>
          <Text style={styles.texto}>Lista de Cursos</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <View style={styles.item}>
                  <Text style={styles.conteudo}>{item.codigo}</Text>
                  <Text style={styles.conteudo}>{item.descricao}</Text>
                  <Text style={styles.conteudo}>{item.cargaHoraria}</Text>
                  <Text style={styles.conteudo}>{item.preco}</Text>
                  <Text style={styles.conteudo}>{item.categoria}</Text>
                </View>)
            }}
            keyExtractor={(_, index) => index.toString()}
            refreshing={loading}
            onRefresh={() => listarCursos()}
          />
        </SafeAreaView>
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
  conteudo: {
    fontSize: 15,
    color: "#333333"
  },
  texto: {
    alignItems: "center",
    fontSize: 30,
    margin: 20,
    color: '#FF0000',
  }, item: {
    alignItems: "center",
    backgroundColor: "#dcda44",
    flexGrow: 1,
    margin: 4,
    padding: 20
  }
});
