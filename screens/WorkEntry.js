import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

const WorkEntry = (props) => {
  var photo;
  if (props.art.photo.indexOf('Application') !== -1) {
    photo = {uri: `${props.art.photo}`};
  } else {
    photo = require("../assets/hokusai.jpeg");
  }
  return (
    <View style={styles.container}>
      <Image
        source={photo}
        style={styles.image}/>
      <Text style={styles.name}>{props.art.name}</Text>
      <Text>{props.art.title}</Text>
      <Text>{props.art.year}</Text>
      <Text>{props.art.location}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  name: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default WorkEntry