import React from 'react';
import { StyleSheet, Button, Text, SafeAreaView, ScrollView } from 'react-native';
import HomeScreen from './HomeScreen.js';
import CameraView from './CameraView.js';
import WorkEntry from './WorkEntry.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      view: false
    }
    this.renderPage = this.renderPage.bind(this);
  }

  renderPage() {
    if (!this.state.view) {
      return (
        <SafeAreaView>
          <ScrollView style={styles.container}>
            <Button title="Back" onPress={()=>this.setState({view: 'home'})}></Button>
            <Button title="Add" onPress={()=>this.setState({view: 'camera'})}></Button>
            <WorkEntry/>
            <WorkEntry/>
            <WorkEntry/>
            <WorkEntry/>
          </ScrollView>
        </SafeAreaView>
      )
    } else if (this.state.view ==='camera') {
      return (
        <CameraView/>
      )
    } else if (this.state.view === 'home') {
      return (
        <HomeScreen/>
      )
    }
  }

  render() {
    return(
      <>
      {this.renderPage()}
      </>
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