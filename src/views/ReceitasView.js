import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Button, Alert, TouchableOpacity } from 'react-native';
import apiUrl from '../config/apiUrl';

export default function ReceitasView({ navigation }) {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const response = await fetch(apiUrl + '/receita');
        const data = await response.json();
        setReceitas(data);  // Armazena as receitas no estado
      } catch (err) {
        Alert.alert('Erro', 'Não foi possível carregar as receitas.');
        console.error(err);
      }
    };

    fetchReceitas();  // Carrega as receitas ao carregar a tela
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Receitas</Text>
      
      {/* Lista de receitas */}
      <FlatList
        data={receitas}
        keyExtractor={(item) => item.id.toString()}  // Usa o id como chave
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.nome}</Text>
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>Valor: R$ {item.valor.toFixed(2)}</Text>
              <Text style={styles.itemText}>Data: {item.data}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>Ainda não há receitas cadastradas.</Text>
        }
      />

      {/* Botão para adicionar nova receita */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AdicionarReceita')}  // Navegar para a tela de adicionar receita
      >
        <Text style={styles.addButtonText}>Adicionar Receita</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C6BED',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // Sombra em dispositivos Android
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#2C6BED',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
    marginTop: 20,
  },
});
