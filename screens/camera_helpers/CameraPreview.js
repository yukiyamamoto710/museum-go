import React from 'react';
import { ImageBackground, View, StyleSheet, Text, Pressable } from 'react-native';

const CameraPreview = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: props.photo}}
        style={{
          flex: 1
        }}>
      </ImageBackground>
      <Pressable>
        <Text style={styles.retake}
          onPress={props.retakePicture}>Retake</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.save}
          onPress={props.savePhoto}>Save</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  retake: {
    position: 'absolute',
    bottom: 75,
    left: 50,
    fontSize: 18,
    color: 'white',
  },
  save: {
    position: 'absolute',
    bottom: 75,
    left: 325,
    fontSize: 18,
    color: 'white',
  }
})

export default CameraPreview;
