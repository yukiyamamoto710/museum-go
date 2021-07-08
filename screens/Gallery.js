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
    let updated = [...this.state.list];
    updated.push(art);
    this.setState({
      list: updated,
      view: false
    })
  }

  renderPage() {
    if (!this.state.view) {
      return (
        <SafeAreaView>
          <ScrollView style={styles.container}>
            <Button title="Back"
              onPress={this.props.renderHome}></Button>
            <Button title="Add"
              onPress={()=>this.setState({view: 'camera'})}></Button>
            {this.state.list.forEach((art) => {
              console.log('hey');
              return(<WorkEntry/>)
            })}
            <WorkEntry/>
            <WorkEntry/>
            <WorkEntry/>
          </ScrollView>
        </SafeAreaView>
      )
    } else {
      return (
        <CameraView addArt={this.addArt}/>
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