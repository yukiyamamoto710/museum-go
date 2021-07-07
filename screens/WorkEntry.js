import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

const WorkEntry = (props) => {
  return (
    <View>
      <Image
        source={require('../assets/mondrian2.jpg')}
        style={styles.image}/>
      <Text>Artist's Name</Text>
      <Text>Title</Text>
      <Text>Year</Text>
      <Text>Location</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
  },
});

export default WorkEntry