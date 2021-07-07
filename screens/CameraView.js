import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';
import CameraPreview from './camera_helpers/CameraPreview.js';

const CameraView = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (!this.camera) return
    const photo = await this.camera.takePictureAsync()
    console.log(photo)
    setPreviewVisible(true)
    setCapturedImage(photo)
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (previewVisible && capturedImage) {
    return  <CameraPreview photo={capturedImage.uri}/>;
  } else {
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} ref={(ref) => { this.camera = ref }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.icon}
              onPress={takePicture}/>
          </View>
        </Camera>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  icon: {
    position: 'absolute',
    right: 150,
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
});

export default CameraView;
