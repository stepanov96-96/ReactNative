import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const handleTextPress = () => console.log('Text pressed'); 
  const handlebuttonText = () => alert('jopa');

  return (
    <View style={styles.container}>
      <Text style = {styles.text} onPress = {handleTextPress} > Макс </Text>
      <Button title = {'syka vsd'} onPress = {handlebuttonText}/>
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
});
