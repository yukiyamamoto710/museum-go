import React from 'react';
import { StyleSheet, Button, Text, SafeAreaView, ScrollView } from 'react-native';
import dammyData from './data/dammyData.js';
import HomeScreen from './HomeScreen.js';
import CameraView from './CameraView.js';
import WorkEntry from './WorkEntry.js';
import Form from './camera_helpers/Form.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: dammyData,
      view: false,
      photo: ''
    }
    this.addToList = this.addToList.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  addToList(art) {
    let updated = [...this.state.list];
    updated.unshift(art);
    this.setState({
      list: updated,
      view: false
    })
  }

  renderForm(photo) {
    this.setState({
      view: 'form',
      photo: photo
    });
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
            {this.state.list.map((art) => {
              return <WorkEntry key={art.photo} art={art}/>
            })}
          </ScrollView>
        </SafeAreaView>
      )
    } else if (this.state.view === 'camera') {
      return (
        <CameraView renderForm={this.renderForm}/>
      )
    } else if (this.state.view === 'form') {
      return (
        <Form addToList={this.addToList} photo={this.state.photo}/>
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