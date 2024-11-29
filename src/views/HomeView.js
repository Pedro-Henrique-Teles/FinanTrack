import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  // Ícones para botões
import { useNavigation } from '@react-navigation/native';  // Para navegação entre telas

const HomeView = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo ao FinanTrack!</Text>
      <Text style={styles.subtitle}>Gerencie suas receitas e despesas de forma simples e eficiente.</Text>

      {/* Botões de navegação */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dashboard')}  // Exemplo de navegação
      >
        <Icon name="dashboard" size={24} color="#fff" />
        <Text style={styles.buttonText}>Visitar Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Receitas')}
      >
        <Icon name="monetization-on" size={24} color="#fff" />
        <Text style={styles.buttonText}>Minhas Receitas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Despesas')}
      >
        <Icon name="attach-money" size={24} color="#fff" />
        <Text style={styles.buttonText}>Minhas Despesas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Icon name="login" size={24} color="#fff" />
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',  // Cor de fundo suave para uma boa leitura
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C6BED',  // Cor principal do app, azul
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',  // Cor de texto mais escura para boa legibilidade
    textAlign: 'center',
    marginBottom: 40,
    fontStyle: 'italic',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C6BED',  // Cor de fundo azul para os botões
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginBottom: 15,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
