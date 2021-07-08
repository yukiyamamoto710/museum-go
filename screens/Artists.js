import React from 'react';
import { View, Image, TextInput, Pressable, Text, StyleSheet, Button, Alert } from 'react-native';
import axios from 'axios';

import HomeScreen from './HomeScreen.js';
import Biography from './Biography.js';

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      bio: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.renderSearchBar = this.renderSearchBar.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.renderBio = this.renderBio.bind(this);
  }

  handleSearch() {
    const { artist } = this.state;
    axios.get(`https://application-mock-server.loca.lt/artist?artist=${artist}`)
      .then((res) => {
        this.setState({bio: JSON.stringify(res.data)})
      })
      .catch((err) => {
        this.showAlert();
      })
  }

  renderSearchBar() {
    this.setState({ bio: false });
  }

  showAlert() {
    Alert.alert("Artist Not Found");
  }

  renderBio() {
    if (!this.state.bio) {
      return (
        <View style={styles.container}>
          <Image
            source={require('../assets/mondrian2.jpg')}
            style={styles.image}/>
          <TextInput
            value={this.state.artist}
            onChangeText={(artist) => this.setState({ artist })}
            placeholder={'Artist'}
            style={styles.input}/>
          <Pressable
            style={styles.button}
            onPress={this.handleSearch}>
            <Text style={styles.text}>Search</Text>
          </Pressable>
          <Button
            onPress={this.props.renderHome}
            title="Back"
            color="black"/>
        </View>
      )
    } else {
      return (
        <Biography
          bio={this.state.bio}
          renderSearchBar={this.renderSearchBar}/>
      )
    }
  }

  render() {
    return (
      <>
      {this.renderBio()}
      </>
    )
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
    top: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    marginBottom: 10,
  },
  button: {
    height: 40,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 10,
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