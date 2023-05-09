import {createSlice } from '@reduxjs/toolkit';
import { getGames } from '../CRUD/game';

export const gameSlice = createSlice({

    name: 'game',
    initialState: {
        games: {},
    },
    reducers: {
        initializeGames: (state) => {
            state.games = []
            const allGames = getGames()
            state.games = allGames
            console.log(allGames)

            // state.games.push
        }
        
    }

})
// export const 
export const { initializeGames  } = gameSlice.actions

export default gameSlice.reducer