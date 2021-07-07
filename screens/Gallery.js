import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import WorkEntry from './WorkEntry.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
        <WorkEntry/>
        <WorkEntry/>
        <WorkEntry/>
        <WorkEntry/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'black',
  },
});

export default Gallery;