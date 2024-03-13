import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartScreen = ({ route }) => {
  const navigation = useNavigation(); // Obtenir l'objet de navigation

  // Vérifiez si route.params est défini et contient les données du panier
  const cartItems = route.params && route.params.cart ? route.params.cart : [];

  // Fonction pour supprimer un élément du panier
  const removeFromCart = index => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    // Mise à jour des paramètres de la route avec le nouveau panier
    navigation.setParams({ cart: updatedCart });
  };

  useEffect(() => {
    // Mettre à jour les paramètres de la route lorsque le panier change
    navigation.setParams({ cart: cartItems });
  }, [cartItems, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pokédex</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeFromCart(index)}>
              <Text style={styles.removeButton}>Enlever</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
});

export default CartScreen;