import {PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { getGames } from '../CRUD/game';
import { getGames } from '../../CRUD/game';

export type Game = {
    id: string,
    name: string,
    description: string,
    price: number,
    stock: number,
    duration: string,
    minPlayer: number,
    maxPlayer: number,
}

/**
 * GameSlice
 */
export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        games: [] as Game[]
    },
    reducers: {
        /**
         * init
         * @param state
         * @param action
         */
        
        // init: {
        //     reducer: (state, action: PayloadAction<Game[]>) => {
        //         state.games = action.payload
        //     },
        //     prepare: async () => {
        //         const allGames = getGames()
        //         return {
        //             payload: allGames
        //         }
        //     }
        // }
        // init:  (state, action) => {
        //     state.games = []
        //     const allGames =  getGames()
        //     state.games = allGames
        //     console.log(allGames)
        // }
        
    }

})

const gameReducer = gameSlice.reducer

const { 
    init  
} = gameSlice.actions

export {
    init,
    gameReducer
}