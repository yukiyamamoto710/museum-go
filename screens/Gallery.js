import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

function Gallery(props) {
  return (
    <SafeAreaView>
      <Text>Loading...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    fontSize: 24,
  },
})

export default Gallery;