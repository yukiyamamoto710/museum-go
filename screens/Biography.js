import React from 'react';
import { SafeAreaView, ScrollView, Text, Image, StyleSheet, Pressable } from 'react-native';

const Biography = (props) => {
  const bio = JSON.parse(props.bio);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{url: `${bio._links.thumbnail.href}`}} style={styles.image}/>
      <Text style={styles.name}>{bio.name}</Text>
      <Text style={styles.small}>{bio.birthday}-{bio.deathday}</Text>
      <Text style={styles.small}>{bio.nationality}</Text>
      <ScrollView style={styles.scroll}>
        <Text style={styles.bio}>{bio.biography}</Text>
      </ScrollView>
      <Pressable
        style={styles.back}
        onPress={props.renderSearchBar}>
        <Text>Back</Text>
      </Pressable>
    </SafeAreaView>
  )
}

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
  },
  small: {
    fontSize: 16,
    right: -50,
    paddingVertical: 5,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 5,
    color: 'black',
  },
  back: {
    height: 40,
    width: 200,
    left: 20,
    marginTop: 5,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor: 'black',
    marginBottom: 10,
  }
})
export default Biography;