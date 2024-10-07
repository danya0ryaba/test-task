import { createAsyncThunk, createSlice, PayloadAction, UnknownAction } from "@reduxjs/toolkit"
import { BASE_URL } from "../../constants/base-url"


type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export type State = {
    users: User[],
    isLoading: boolean,
    error: null | string
}


const initialState: State = {
    users: [],
    isLoading: false,
    error: null
}

export const fetchUsers = createAsyncThunk<User[], undefined, { rejectValue: string }>(
    'users/fetchUsers', async (_, { rejectWithValue }) => {

        const response = await fetch(`${BASE_URL}`)

        if (!response.ok) {
            return rejectWithValue('Server error!')
        }

        return await response.json()
    }
)


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, { payload }) => {
                state.users = payload
                state.error = null
                state.isLoading = false
            })
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

function isError(action: UnknownAction) {
    return action.type.endsWith("rejected")
}

export default usersSlice.reducer