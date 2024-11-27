import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import apiUrl from '../config/apiUrl.js'; // Seu arquivo com a URL da API

export default LoginView = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(apiUrl + "/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        const data = await response.json();
        // Se o login for bem-sucedido, armazena o token ou dados do usuário
        // Aqui podemos usar AsyncStorage ou Context API para manter o estado de login
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        // Navega para a tela de Dashboard
        navigation.navigate('Dashboard');
      } else {
        const errorData = await response.json();
        Alert.alert('Erro', errorData.error || 'Credenciais inválidas.');
      }
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível se conectar ao servidor.');
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao FinanTrack</Text>

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

      <Button title="Entrar" onPress={handleLogin} color="#2C6BED" />

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C6BED',
    textAlign: 'center',
    marginBottom: 40,
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
  link: {
    color: '#2C6BED',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});
