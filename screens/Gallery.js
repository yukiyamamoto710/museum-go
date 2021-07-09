import React from 'react';
import { SafeAreaView, ScrollView, View, Button, StyleSheet } from 'react-native';
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
    (async () => {
      try {
        const list = await AsyncStorage.getItem('list')
        if (list) {
          let updated = [...this.state.list];
          updated.unshift(JSON.parse(list));
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
        await AsyncStorage.mergeItem('list', JSON.stringify(art))
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
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Gallery;