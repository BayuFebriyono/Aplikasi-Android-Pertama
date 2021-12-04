import React, {Component} from 'react';
import {Image, Text, TextInput, View, StyleSheet} from 'react-native';
import macbook from './macbook.jpg';

const App = () => {
  return <StylingReactNativeComponent />;
};

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#3498db'}} />
      <Text>Halo</Text>
      <World />
      <Text>Bang</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Komponen</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#3498db',
          borderWidth: 2,
          borderColor: 'purple',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={macbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 16,
            color: 'black',
          }}>
          New Mac Book Pro
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 12,
            color: '#F2994A',
          }}>
          Rp. 12.000.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 12,
            color: 'black',
          }}>
          Mojokerto
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40,
  },
});

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

class BoxGreen extends Component {
  render() {
    return <Text>Ini Komponen Dari Class Komponen</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/1000/100/nature'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 40}}>Ini Text</Text>
      </View>
    );
  }
}

export default App;
