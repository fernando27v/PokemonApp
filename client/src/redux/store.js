import { configureStore } from '@reduxjs/toolkit'
import reducer from './slices/pokeSlice'

const store = configureStore({
  reducer:{
    pokeReducer: reducer
  }
})

export default store