import { createSlice, configureStore, createAsyncThunk} from '@reduxjs/toolkit'
import { getGames } from './CRUD/game'

const fetchGames = createAsyncThunk(
    'games/fetchGames',
    async () => {
        const response = await getGames()
        return response.data
    }
)

const gameSlide = createSlice({
    name: 'game',
    initialState: {
        games: []
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchGames.fulfilled, (state, action )=> {
            state.games = action.payload
            console.log(action.payload);
        })
    }
})


export const store = configureStore({
    reducer: {
        games: gameSlide.reducer
    }
})