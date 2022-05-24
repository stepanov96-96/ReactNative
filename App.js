import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const handleTextPress = () => console.log('Text pressed'); 
  const handlebuttonText = () => Alert.alert("Title text", "main title",[
    {text: "Да", onPress: () => console.log('yes button')},
    {text: "Отмена" , onPress: () => console.log('no button')}
  ]);
  const handlebuttonText2 = () => Alert.prompt("Title text", "main title",text => console.log );

  return (
    <View style={styles.container}>
        <View style = {styles.box}>
          <Text style = {styles.textBox}> Click me</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  },

  box: {
    backgroundColor: '#FF6347',
    width: '50%',
    height: '10%',
    borderWidth: 2,
    borderColor: 'black',
    position: "absolute",
    top: '50%',
    
  },

  textBox:{
    fontSize: 20,
    position: "absolute",
    top: '25%',
    left: '25%'
  }
});
