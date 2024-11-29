import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiUrl from '../config/apiUrl.js'; // URL da API

export default LoginView = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      return Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }

    setIsLoading(true);

    try {
      console.log('Dados enviados:', { email, senha });

      const response = await fetch(apiUrl + "/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();
      console.log('Status da resposta:', response.status);
      console.log('Resposta completa:', data);

      if (response.ok) {
        await AsyncStorage.setItem('userToken', data.token);
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('Dashboard');
      } else {
        Alert.alert('Erro', data.error || 'Credenciais inválidas.');
      }
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível se conectar ao servidor.');
      console.error(err);
    } finally {
      setIsLoading(false);
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
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      {isLoading ? (
        <ActivityIndicator size="large" color="#2C6BED" />
      ) : (
        <Button title="Entrar" onPress={handleLogin} color="#2C6BED" />
      )}

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
