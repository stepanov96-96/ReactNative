import React, {useState} from 'react';
import { StyleSheet,View, Text,FlatList } from 'react-native';

import Header from './components/Header';
import ListItems from './components/ListItems';
import Form from './components/Form';


export default function App() {

  const [listOfItems, setListOfItems] = useState([
    {text: 'buy milk', key:'1'},
    {text: 'write the code', key:'2'},
    {text: 'wash up', key:'3'},
    {text: 'Go to bed early', key:'4'}
  ])

  const addHandler = (text) => {
    setListOfItems((list)=>{
      return[
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })  
  }

  const deleteHandler = (key) => {
    setListOfItems((list)=>{
      return list.filter(listOfItems => listOfItems.key != key)
    });  

  }

  return (
    <View >
        <Header/>
        <Form addHandler = {addHandler}/>
          <View>
            <FlatList  data = {listOfItems} renderItem={({item}) =>(
              <ListItems el = {item} deleteHandler = {deleteHandler}/>
            )}/> 
          </View>        
    </View>
  );
}

const styles = StyleSheet.create({

});
