import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import ArtistsPage from './ArtistsPage.js';
import Artists from './Artists.js';

const HomeScreen = (props) => {
  return (
    <ImageBackground
      source={require('../assets/mondrian.jpg')}
      style={styles.background}>
      <View style={styles.title}>
        <Text style={styles.titleText}>MUSEUM GO</Text>
        <AwesomeButton
          progress
          onPress={props.renderGallery}
          backgroundColor='black'
          height={75}
          width={300}
          textSize={24}
          textFontFamily="Georgia"
          style={styles.myGallery}>
          My Gallery
        </AwesomeButton>
        <AwesomeButton
          progress
          onPress={props.renderArtists}
          backgroundColor='black'
          height={75}
          width={300}
          textSize={24}
          textFontFamily="Georgia"
          style={styles.viewArtists}>
          View Artists
        </AwesomeButton>
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
  },
  title: {
    position: 'absolute',
    top: -285,
    left: 0,
    right: -100,
    bottom: 0,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    top: 20,
    right: -165,
    fontFamily: 'Georgia',
  },
  myGallery: {
    position: 'relative',
    top: 50,
    left: 115,
    right: -300,
    height: 75,
  },
  viewArtists: {
    position: 'relative',
    top: 150,
    left: 115,
    right: -300,
    height: 75,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    right: -65,
  },
});

export default HomeScreen;

