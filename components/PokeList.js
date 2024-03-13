import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokeList = ({ navigation }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const pokemonList = response.data.results;
        const pokemonDetails = await Promise.all(
          pokemonList.map(async pokemon => {
            const pokemonResponse = await axios.get(pokemon.url);
            return {
              name: pokemonResponse.data.name,
              image: pokemonResponse.data.sprites.front_default,
            };
          })
        );
        setPokemonData(pokemonDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  const handleSelect = pokemon => {
    setCart([...cart, pokemon]);
  };

  // Fonction pour naviguer vers l'écran du panier
  const navigateToCart = () => {
    navigation.navigate('Pokedex', { cart });
  };

  return (
    <View style={styles.container}>
    <Button title="Pokedex" onPress={navigateToCart} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollView} horizontal={false}>
          <View style={styles.row}>
            {pokemonData.map((pokemon, index) => (
              <PokemonCard
                key={index}
                name={pokemon.name}
                image={pokemon.image}
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
