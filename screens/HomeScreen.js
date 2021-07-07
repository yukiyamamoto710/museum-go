import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Pressable } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';

const HomeScreen = (props) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageBackground source={require('../assets/mondrian.jpg')} style={styles.background}>
        <View style={styles.title}>
          <Text style={{fontSize: 36, fontWeight: 'bold', fontFamily: 'Inter_900Black'}}>MUSEUM GO</Text>
          <Pressable style={styles.myGallery}>
            <Text style={styles.text}>My Gallery</Text>
          </Pressable>
          <Pressable style={styles.viewArtists}>
            <Text style={styles.text}>View Artists</Text>
          </Pressable>
        </View>
      </ImageBackground>
    )
  }
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
    alignItems: 'center',
  },
  myGallery: {
    position: 'relative',
    top: 50,
    left: 0,
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
    left: 0,
    right: -300,
    height: 75,
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Inter_900Black',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default HomeScreen;

