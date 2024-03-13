import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokeList from './components/PokeList';
import CartScreen from './components/CartScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={() => ({
        tabBarIcon: () => null,
      })}
      >
        <Tab.Screen name="Pokémon" component={PokeList} />
        <Tab.Screen name="Pokedex" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
