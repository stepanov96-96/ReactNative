import React from 'react';
import { StyleSheet,View,Text  } from 'react-native';

export default function Header() {
  return (
    <View style ={styles.main}>
        <Text style = {styles.text}> Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main: { 
        padingTop: 60,
        height: 100, 
        backgroundColor: 'silver'

    },
    text: {
      fontSize: 18,
      color: 'red',
      fontStyle: 'italic',
      textAlign: 'center',
      top: '50%'
      
    }

});