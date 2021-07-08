import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

const WorkEntry = (props) => {
  var photo;
  if (props.art.photo.indexOf('Application') !== -1) {
    photo = {uri: `${props.art.photo}`};
  } else {
    photo = require("../assets/van-gogh.jpg");
  }
  return (
    <View style={styles.container}>
      <Image
        source={photo}
        style={styles.image}/>
      <Text>{props.art.name}</Text>
      <Text>{props.art.title}</Text>
      <Text>{props.art.year}</Text>
      <Text>{props.art.location}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default WorkEntry