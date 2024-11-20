import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default ReceitasView = ()=>{

    return(
        <View style={styles.container}>
            <Text>Receitas</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  