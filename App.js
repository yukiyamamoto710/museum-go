import React from 'react';
import HomeScreen from './screens/HomeScreen.js';
import Gallery from './screens/Gallery.js';
import Artists from './screens/Artists.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    }
    this.renderArtists = this.renderArtists.bind(this);
    this.renderGallery = this.renderGallery.bind(this);
    this.renderView = this.renderView.bind(this);
  };

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
        <Artists/>
      )
    } else if (this.state.view === 'gallery') {
      return (
        <Gallery/>
      )
    }
  }

  render() {
    return (
      <>
      {this.renderView()}
      </>
    )
  }
}

export default App;