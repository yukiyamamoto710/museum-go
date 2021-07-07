import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';

const CameraPreview = ({photo}: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: photo}}
        style={{
          flex: 1
        }}/>
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
})

export default CameraPreview;
