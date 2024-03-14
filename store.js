import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slices/pokemonSlice"; // Assurez-vous d'importer correctement le reducer Pokemon

export default configureStore({
  reducer: {
    pokemon: pokemonReducer, // Assurez-vous d'utiliser le reducer correctement importé
  },
});
