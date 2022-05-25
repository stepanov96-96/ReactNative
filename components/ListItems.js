import React from 'react';
import { StyleSheet,TouchableOpacity,Text, Alert  } from 'react-native';

export default function ListItems({el, deleteHandler}) {
  const handleButtonDelete = () => Alert.alert("Delete Task", "Are you sure you want to delete the task ?",[
    {text: " Yes", onPress: () => deleteHandler(el.key)},
    {text: "No"}

  ])

  return (
    <TouchableOpacity onPress = {handleButtonDelete}>
        <Text style = {styles.text}>{el.text}</Text>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
   text: {
       padding: 20,
       textAlign: 'center',
       borderRadius: 5,
       backgroundColor:'#2E8B57',
       borderWidth:1,
       marginTop:20,
       width:'60%',
       marginLeft:'20%'
   }
});