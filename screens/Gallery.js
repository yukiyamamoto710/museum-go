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
    this.addArt = this.addArt.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  addArt(art) {
    console.log(art);
    this.setState({
      list: [art, ...this.state.list]
    })
  }

  renderPage() {
    if (!this.state.view) {
      console.log(this.state.list)
      return (
        <SafeAreaView>
          <ScrollView style={styles.container}>
            <Button title="Back"
              onPress={()=>this.setState({view: 'home'})}></Button>
            <Button title="Add"
              onPress={()=>this.setState({view: 'camera'})}></Button>
            {this.state.list.map((art) => {
              (<WorkEntry/>)
            })}
          </ScrollView>
        </SafeAreaView>
      )
    } else if (this.state.view ==='camera') {
      return (
        <CameraView addArt={this.addArt}/>
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