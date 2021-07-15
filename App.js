import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen.js';
import Gallery from './screens/Gallery.js';
import Artists from './screens/Artists.js';
import filtered from './assets/raw-data/moma-artists.js';

const Stack = createStackNavigator();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    }
    this.renderHome = this.renderHome.bind(this);
    this.renderArtists = this.renderArtists.bind(this);
    this.renderGallery = this.renderGallery.bind(this);
    this.renderView = this.renderView.bind(this);
  };

  renderHome() { this.setState({ view: 'home' })}
  renderArtists() { this.setState({ view: 'artists' }) }
  renderGallery() { this.setState({ view: 'gallery' })}

  renderView() {
    if (this.state.view === 'home') {
      return (
        <HomeScreen
          renderGallery={this.renderGallery}
          renderArtists={this.renderArtists}/>
      )
    } else if (this.state.view === 'artists') {
      return (
        <Artists renderHome={this.renderHome}
        suggestions={filtered}/>
      )
    } else if (this.state.view === 'gallery') {
      return (
        <Gallery renderHome={this.renderHome}/>
      )
    }
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Artist" component={Artists} />
          <Stack.Screen name="My Gallery" component={Gallery} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;