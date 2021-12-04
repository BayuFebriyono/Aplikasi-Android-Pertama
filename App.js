import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#3498db'}} />
      <Text>Halo</Text>
      <World />
      <Text>Bang</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const World = () => {
  return <Text> World!</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/1000/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};
export default App;
