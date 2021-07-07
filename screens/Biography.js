import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

const Biography = (props) => {
  const bio = JSON.parse(props.bio);
  console.log({url: `${bio._links.thumbnail.href}`});

  return (
    <SafeAreaView>
      <Image source={{url: `${bio._links.thumbnail.href}`}} style={styles.image}/>
      <Text>{bio.name}</Text>
      <Text>{bio.birthday}-{bio.deathday}</Text>
      <Text>{bio.nationality}</Text>
      <Text>{bio.biography}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    position: 'relative',
    top: 55,
    right: 0,
    left: 0,
    justifyContent: 'center',
    width: 350,
    height: 200,
  }
})
export default Biography;