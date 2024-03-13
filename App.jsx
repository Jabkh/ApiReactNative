import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokeList from './components/PokeList';
import CartScreen from './components/CartScreen';
import { AppProvider } from './contexts/AppContext';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppProvider>
      <Tab.Navigator 
      screenOptions={() => ({
        tabBarIcon: () => null,
      })}
      >
        <Tab.Screen name="Pokemon" component={PokeList} />
        <Tab.Screen name="Pokedex" component={CartScreen} />
      </Tab.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;