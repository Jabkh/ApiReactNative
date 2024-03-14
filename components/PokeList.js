import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons,addPokedex } from '../slices/pokemonSlice';
import PokemonCard from './PokemonCard';

const PokeList = ({ navigation }) => {
  const dispatch = useDispatch();
  const pokemonData = useSelector(state => state.pokemon.pokemons);
  const loading = useSelector(state => state.pokemon.loading);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const handleSelect = pokemon => {
    dispatch(addPokedex(pokemon));
    console.log('Pokemon selected:', pokemon);
  };

  return (
    <View style={styles.container}>
      <Button title="Pokedex" onPress={() => navigation.navigate('Pokedex')} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.row}>
            {pokemonData && pokemonData.map((pokemon, index) => (
              <PokemonCard
                key={index}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                onSelect={() => handleSelect(pokemon)}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  scrollView: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default PokeList;
