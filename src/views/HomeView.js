import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HomeView = () => {  // Defina a função diretamente
  return (
    <View style={styles.container}>
      <Text>Home View</Text>
    </View>
  );
};

export default HomeView;  // Exporte o componente após a definição

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
