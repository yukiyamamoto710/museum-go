import React from 'react';
import { SafeAreaView, ScrollView, Text, Image, Pressable, StyleSheet } from 'react-native';

const Biography = (props) => {
  const bio = JSON.parse(props.bio);
  // if using Artsy API, use bio._links.thumbnail.href instead on LINE 10
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{url: `${bio.image}`}}
        style={styles.image}/>
      <Text style={styles.name}>{bio.name}</Text>
      <Text style={styles.small}>{bio.birthday}-{bio.deathday}</Text>
      <Text style={styles.small}>{bio.nationality}</Text>
      <ScrollView style={styles.scroll}>
        <Text style={styles.bio}>{bio.biography}</Text>
      </ScrollView>
      <Pressable
        onPress={props.renderSearchBar}
        style={styles.back}>
        <Text style={{fontFamily: 'Georgia'}}>Back</Text>
      </Pressable>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 24,
    right: -50,
    fontFamily: 'Georgia'
  },
  back: {
    fontSize: 16,
    right: -190,
    paddingVertical: 5,
    fontFamily: 'Georgia'
  },
  small: {
    fontSize: 16,
    right: -50,
    paddingVertical: 5,
    fontFamily: 'Georgia'
  },
  bio: {
    fontFamily: 'Georgia',
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 5,
    color: 'black',
  },
});

export default Biography;