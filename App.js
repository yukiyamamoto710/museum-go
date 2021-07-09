import React from 'react';

import HomeScreen from './screens/HomeScreen.js';
import Gallery from './screens/Gallery.js';
import Artists from './screens/Artists.js';

import Autocomplete from './screens/Autocomplete.js';

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

    this.renderAutocomplete = this.renderAutocomplete.bind(this);
  };

  renderHome() { this.setState({ view: 'home' })}
  renderArtists() { this.setState({ view: 'artists' }) }
  renderGallery() { this.setState({ view: 'gallery' })}

  renderAutocomplete() { this.setState({ view: 'autocomplete' })}

  renderView() {
    if (this.state.view === 'home') {
      return (
        <HomeScreen
          renderGallery={this.renderGallery}
          renderArtists={this.renderArtists}
          renderAutocomplete={this.renderAutocomplete}/>
      )
    } else if (this.state.view === 'artists') {
      return (
        <Artists renderHome={this.renderHome}
        suggestions={['apple', 'orange', 'peach']}/>
      )
    } else if (this.state.view === 'gallery') {
      return (
        <Gallery renderHome={this.renderHome}/>
      )
    // } else if (this.state.view === 'autocomplete') {
    //   return (
    //     <Autocomplete suggestions={['apple', 'orange', 'peach']}/>
    //   )
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