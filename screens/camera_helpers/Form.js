import React from 'react';
import { StyleSheet, TextInput, Image, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      year: '',
      medium: '',
      location: ''
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={{url: `${this.props.photo}`}} style={styles.image}/>
        <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.keyboard}>
          <ScrollView style={styles.form}>
            <TextInput
              value={this.state.name}
              onChangeText={(name) => this.setState({ name })}
              placeholder={'Name'}
              style={styles.input}/>
            <TextInput
              value={this.state.title}
              onChangeText={(title) => this.setState({ title })}
              placeholder={'Title'}
              style={styles.input}/>
            <TextInput
              value={this.state.year}
              onChangeText={(year) => this.setState({ year })}
              placeholder={'Year'}
              style={styles.input}/>
            <TextInput
              value={this.state.medium}
              onChangeText={(medium) => this.setState({ medium })}
              placeholder={'Medium'}
              style={styles.input}/>
            <TextInput
              value={this.state.location}
              onChangeText={(location) => this.setState({ location })}
              placeholder={'Location'}
              style={styles.input}/>
            <AwesomeButton
              progress
              onPress={() => {
                this.props.addToList({...this.state, ...{photo: this.props.photo}})
              }}
              backgroundColor='black'
              height={40}
              width={120}
              textFontFamily="Georgia"
              style={styles.button}>
              Add Artwork
            </AwesomeButton>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboard: {
    flex: 1,
  },
  image: {
    height: 300,
    resizeMode: 'contain',
  },
  form: {
    position: 'relative',
    left: 105,
    top: 30,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    fontFamily: 'Georgia'
  },
  button: {
    position: 'relative',
    right: -40,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});

export default Form;