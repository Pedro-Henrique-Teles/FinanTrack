import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, Alert, TouchableOpacity } from 'react-native';
import apiUrl from '../config/apiUrl.js';

export default function DespesasView() {
  const [despesas, setDespesas] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const carregarDespesas = async () => {
    try {
      const response = await fetch(apiUrl + '/despesa');
      const data = await response.json();
      setDespesas(data);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível carregar as despesas.');
    }
  };

  const adicionarDespesa = async () => {
    if (!descricao || !valor) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch(apiUrl + '/despesa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ descricao, valor: parseFloat(valor) }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Despesa cadastrada com sucesso!');
        setDescricao('');
        setValor('');
        carregarDespesas(); // Recarregar as despesas
      } else {
        const errorData = await response.json();
        Alert.alert('Erro', errorData.error || 'Erro ao adicionar despesa.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao conectar com o servidor.');
      console.error(error);
    }
  };

  useEffect(() => {
    carregarDespesas();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Despesas</Text>

      {/* Formulário para adicionar despesa */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Descrição da despesa"
          value={descricao}
          onChangeText={setDescricao}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor"
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={adicionarDespesa}>
          <Text style={styles.buttonText}>Adicionar Despesa</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de despesas cadastradas */}
      <FlatList
        data={despesas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.despesaItem}>
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.valor}>R$ {item.valor.toFixed(2)}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>Ainda não há despesas cadastradas.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C6BED',
    textAlign: 'center',
    marginBottom: 30,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#B0BEC5',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#2C6BED',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  despesaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  descricao: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  valor: {
    fontSize: 18,
    color: '#E57373',
    fontWeight: 'bold',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
  },
});
