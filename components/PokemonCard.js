import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const PokemonCard = ({ name, image, onSelect }) => (
  <TouchableOpacity onPress={onSelect} style={styles.card}>
    <Text style={styles.name}>{name}</Text>
    <Image source={{ uri: image }} style={styles.image} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 20,
    margin: 10,
    width: '45%',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default PokemonCard;
