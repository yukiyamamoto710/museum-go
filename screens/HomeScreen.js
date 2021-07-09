import React from 'react';
import { ImageBackground, View, Text, Pressable, StyleSheet } from 'react-native';

const HomeScreen = (props) => {
  return (
    <ImageBackground
      source={require('../assets/mondrian.jpg')}
      style={styles.background}>
      <View style={styles.title}>
        <Text style={styles.titleText}>MUSEUM GO</Text>
        <Pressable
          style={styles.myGallery}
          onPress={props.renderGallery}>
          <Text style={styles.text}>My Gallery</Text>
        </Pressable>
        <Pressable
          style={styles.viewArtists}
          onPress={props.renderArtists}>
          <Text style={styles.text}>View Artists</Text>
        </Pressable>
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
    fontSize: 45,
    fontWeight: 'bold',
    right: -115,
  },
  myGallery: {
    position: 'relative',
    top: 50,
    left: 115,
    right: -300,
    height: 75,
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  viewArtists: {
    position: 'relative',
    top: 150,
    left: 105,
    right: -300,
    height: 75,
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: 'black',
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

