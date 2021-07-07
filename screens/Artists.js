import React from 'react';
import { Pressable, Text, TextInput, View, StyleSheet, Image } from 'react-native';
import axios from 'axios';

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    };
  }

  handleSearch() {
    const { artist } = this.state;
    axios.get(`http://localhost:3000/artist?artist=${artist}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/mondrian2.jpg')} style={styles.image}/>
        <TextInput
          value={this.state.artist}
          onChangeText={(artist) => this.setState({ artist })}
          placeholder={'Artist'}
          style={styles.input}
        />
        <Pressable
          style={styles.button}
          onPress={this.handleSearch.bind(this)}>
          <Text style={styles.text}>Search</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    top: 55,
    width: 325,
    height: 325,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  button: {
    height: 40,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});

export default Artists;