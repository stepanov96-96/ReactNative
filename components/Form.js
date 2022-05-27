import React , {useState}from 'react';
import { StyleSheet,TextInput,Text, Button,View  } from 'react-native';
import { clear } from 'react-native/Libraries/LogBox/Data/LogBoxData';

export default function Form({addHandler}) {

    const [text, setValue] = useState('');

    const onChange =(text)=>{

        setValue(text);
        TextInput.clear('');
    };

    const Test = ()=> {
        addHandler(text);
        
    }


  return (
    <View>
        <TextInput  style ={styles.input} onChangeText = {onChange}  placeholder = 'Type in task'/> 
        <View style ={styles.buttonStyle}>
            <Button color = {'#32CD32'} onPress={Test} title = 'Add task'/>  
        </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 2,        
        padding: 10, 
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    },
    buttonStyle:{
       width: '50%',
       left: '25%',   

    } 

});