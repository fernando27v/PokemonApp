import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPokemons = createAsyncThunk(
  "poke/getAllPokemons",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        "https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getPokemon = createAsyncThunk(
  "poke/getPokemon",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://pokemon-pichincha.herokuapp.com/pokemons/${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deletePokemon = createAsyncThunk(
  "poke/deletePokemon",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://pokemon-pichincha.herokuapp.com/pokemons/${id}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const newPokemon = createAsyncThunk(
  "poke/newPokemon",
  async (pokemon, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1",
        pokemon
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const modifyPokemon = createAsyncThunk(
  "poke/modifyPokemon",
  async (pokemon, thunkAPI) => {
    try {
      const response = await axios.put(
        `https://pokemon-pichincha.herokuapp.com/pokemons/${pokemon.id}`,
        pokemon
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const pokeSlice = createSlice({
  name: "pokeSlice",
  initialState: {
    allPokemons: [],
    searchPokemons: [],
    pokemon: {
      id: "",
      name: "",
      image: "",
      attack: 50,
      defense: 50,
      idAuthor: 1,
      type: "fire",
      hp: 100,
    },
  },
  reducers: {
    search(state, action) {
      if (action.payload.length > 0) {
        state.searchPokemons = state.allPokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else {
        state.searchPokemons = [];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPokemons.fulfilled, (state, action) => {
      state.allPokemons = action.payload;
    });
    builder.addCase(deletePokemon.fulfilled, (state, action) => {
      state.allPokemons = state.allPokemons.filter(
        (pokemon) => pokemon.id !== action.payload.id
      );
    });
    builder.addCase(newPokemon.fulfilled, (state, action) => {
      state.allPokemons = [...state.allPokemons, action.payload];
    });
    builder.addCase(modifyPokemon.fulfilled, (state, action) => {
      state.allPokemons = state.allPokemons.map((pokemon) =>
        pokemon.id === action.payload.id ? action.payload : pokemon
      );
    });
    builder.addCase(getPokemon.fulfilled, (state, action) => {
      state.pokemon = action.payload;
    });
  },
});

const { actions, reducer } = pokeSlice;

export const { search } = actions;

export default reducer;
