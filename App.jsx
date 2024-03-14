import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import PokeList from './components/PokeList';
import CartScreen from './components/CartScreen';
import { AppProvider } from './contexts/AppContext';
import { Provider } from 'react-redux';
import store from './store';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Tab.Navigator 
      screenOptions={() => ({
        tabBarIcon: () => null,
      })}
      >
        <Tab.Screen name="Pokemon" component={PokeList} />
        <Tab.Screen name="Pokedex" component={CartScreen} />
      </Tab.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;