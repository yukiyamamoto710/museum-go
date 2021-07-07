import React from 'react';
import { Pressable, Text, TextInput, View, StyleSheet } from 'react-native';

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    };
  }

  handleSearch() {
    const { artist } = this.state;
    console.log(artist);
  }

  render() {
    return (
      <View style={styles.container}>
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