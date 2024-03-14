import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../slices/pokemonSlice'; // Assurez-vous d'importer la bonne action

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.pokemon.cart); // Utilisez le sélecteur approprié pour extraire les éléments du panier

  const handleRemoveFromCart = index => {
    dispatch(removeFromCart(index)); // Dispatch l'action pour supprimer un élément du panier
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pokédex</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleRemoveFromCart(index)}>
              <Text style={styles.removeButton}>Enlever</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* Bouton de retour */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.goBackButton}>Retour</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  removeButton: {
    color: 'red',
    marginLeft: 10,
  },
  goBackButton: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
});

export default CartScreen;
