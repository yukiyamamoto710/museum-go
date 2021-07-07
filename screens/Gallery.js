import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Gallery = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'black',
  },
});

export default Gallery;