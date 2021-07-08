import React from 'react';
import { SafeAreaView, ScrollView, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    this.storeData = this.storeData.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount() {
    const getList = async () => {
      try {
        const list = await AsyncStorage.getItem('list')
        if (list) {
          var parsed = JSON.parse(list);
          var updated = [...this.state.list];
          updated.unshift(parsed);
          this.setState({ list: updated })
        }
      } catch(e) {
        console.log(e)
      }
    };
    getList();
  }

  addToList(art) {
    let updated = [...this.state.list];
    updated.unshift(art);
    this.setState({
      list: updated,
      view: false
    }, this.storeData(art))
  }

  storeData(art) {
    const storeList = async () => {
      try {
        await AsyncStorage.mergeItem('list', JSON.stringify(art))
      } catch (e) {
        console.log(e)
      }
    }
    storeList();
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