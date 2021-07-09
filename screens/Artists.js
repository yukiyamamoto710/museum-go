import React from 'react';
import { View, Image, TextInput, Pressable, Text, StyleSheet, Button, Alert } from 'react-native';
import axios from 'axios';
import AwesomeButton from "react-native-really-awesome-button";

import HomeScreen from './HomeScreen.js';
import Biography from './Biography.js';

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      bio: false,
      filteredSuggestions: [],
      showSuggestions: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.renderSearchBar = this.renderSearchBar.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  renderSuggestions() {
    const filteredSuggestions = this.props.suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(this.state.artist.toLowerCase()) > -1
    );
    if(this.state.showSuggestions && this.state.artist) {
      if (filteredSuggestions.length) {
        return filteredSuggestions.map((suggestion) => {
          return <Button onPress={this.handleClick} title={suggestion}></Button>
        })
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  handleClick(e) {
    // this.setState({
    //   artist: e.currentTarget.innerText
    // });
  };

  renderBio() {
    if (!this.state.bio) {
      return (
        <View style={styles.container}>
          <Image
            source={require('../assets/mondrian2.jpg')}
            style={styles.image}/>
          <TextInput
            value={this.state.artist}
            onChangeText={(artist) =>
              this.setState({artist, showSuggestions: true})}
            placeholder={'Artist'}
            style={styles.input}/>
          <View>
            {this.renderSuggestions()}
          </View>
          <AwesomeButton
            progress
            onPress={this.handleSearch}
            backgroundColor='black'
            height={40}
            width={120}
            textFontFamily="Georgia">
            Search
          </AwesomeButton>
          <Pressable
            onPress={this.props.renderHome}
            style={styles.back}>
            <Text style={{fontFamily: 'Georgia'}}>Back</Text>
          </Pressable>
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
};

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
    marginBottom: 20,
    fontFamily: 'Georgia',
  },
  back: {
    color: 'black',
    fontSize: 14,
    marginTop: 10,
  }
});

export default Artists;