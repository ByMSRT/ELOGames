import {
    configureStore,
} from '@reduxjs/toolkit'
import { gameReducer } from './slices/gameSlice'
 
const store = configureStore({
    reducer: {
        games : gameReducer
    }
})

export default store