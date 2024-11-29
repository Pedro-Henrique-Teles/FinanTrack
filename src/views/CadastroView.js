import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import apiUrl from '../config/apiUrl.js'

export default CadastroView = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    // Verificar se os campos estão preenchidos
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return; // Impede o envio dos dados vazios
    }

    try {
      const response = await fetch(apiUrl + "/usuario", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
      } else {
        const errorData = await response.json();
        Alert.alert('Erro', errorData.error || 'Erro ao cadastrar usuário.');
      }
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível se conectar ao servidor.');
      console.error(err);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Button title="Cadastrar" onPress={handleCadastro} color="#2C6BED" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C6BED',
    textAlign: 'center',
    marginBottom: 30,
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
});
