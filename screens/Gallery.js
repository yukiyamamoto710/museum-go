import React from 'react';
import { SafeAreaView, ScrollView, View, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import dummyData from './dummyData.js';
import HomeScreen from './HomeScreen.js';
import CameraView from './CameraView.js';
import WorkEntry from './WorkEntry.js';
import Form from './camera_helpers/Form.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: dummyData,
      view: false,
      photo: ''
    }
    this.addToList = this.addToList.bind(this);
    this.storeData = this.storeData.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount() {
    (async () => {
      try {
        const list = await AsyncStorage.getItem('list')
        if (list) {
          let updated = [...this.state.list];
          JSON.parse(list).forEach((item) => {
            updated.unshift(JSON.parse(item))
          })
          this.setState({ list: updated })
        }
      } catch(e) {
        console.log(e)
      }
    })();
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
    (async () => {
      try {
        let list = await AsyncStorage.getItem('list')
        let added = JSON.stringify(art);
        if (!list) {
          await AsyncStorage.setItem('list', JSON.stringify([added]))
        } else {
          let updated = JSON.parse(list)
          updated.push(added)
          await AsyncStorage.setItem('list', JSON.stringify(updated))
          // await AsyncStorage.removeItem('list')
        }
      } catch (e) {
        console.log(e)
      }
    })();
  }

  renderForm(photo) {
    this.setState({
      view: 'form',
      photo: photo
    });
  }

  renderList() {
    this.setState({ view: false })
  }

  renderPage() {
    if (!this.state.view) {
      return (
        <SafeAreaView>
          <View style={styles.container}>
            <Button
              onPress={this.props.renderHome}
              title="Back"
              color="black"/>
            <Button
              onPress={()=>this.setState({view: 'camera'})}
              title="Add"
              color="black"/>
          </View>
          <ScrollView>
            {this.state.list.map((art, i) => {
              return <WorkEntry key={i} art={art}/>
            })}
          </ScrollView>
        </SafeAreaView>
      )
    } else if (this.state.view === 'camera') {
      return (
        <CameraView
          renderForm={this.renderForm}
          renderList={this.renderList}/>
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
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Gallery;