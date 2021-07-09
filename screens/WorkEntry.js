import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

const WorkEntry = (props) => {
  var photo;
  if (typeof props.art.photo === 'string') {
    photo = {uri: `${props.art.photo}`};
  } else {
    var photo = props.art.photo;
  }
  return (
    <View style={styles.container}>
      <Image
        source={photo}
        style={styles.image}/>
      <Text style={styles.title}>{props.art.title}</Text>
      <Text style={styles.small}>{props.art.name}</Text>
      <Text style={styles.small}>{props.art.year}</Text>
      <Text style={styles.small}>{props.art.location}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Georgia'
  },
  small: {
    fontFamily: 'Georgia'
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default WorkEntry