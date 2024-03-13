import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const CartScreen = ({ route }) => {
  // Vérifiez si route.params est défini et contient les données du panier
  const cartItems = route.params && route.params.cart ? route.params.cart : [];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pokédex</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
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
});

export default CartScreen;
