import React from "react";
import { StyleSheet, TextInput, Image, SafeAreaView, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
    this.renderSuggestions = this.renderSuggestions.bind(this);
  }

  renderSuggestions() {
    const filteredSuggestions = this.props.suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(this.state.userInput.toLowerCase()) > -1
    );
    if(this.state.showSuggestions && this.state.userInput) {
      if (filteredSuggestions.length) {
        return filteredSuggestions.map((suggestion) => {
          return <Text>{suggestion}</Text>
        })
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <SafeAreaView>
        <TextInput
          value={this.state.userInput}
          onChangeText={(userInput) =>
            this.setState({userInput, showSuggestions: true})}
          placeholder={'Artist Name'}
          style={styles.input}/>
        <View>
          {this.renderSuggestions()}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    fontFamily: 'Georgia'
  },
})

export default Autocomplete;