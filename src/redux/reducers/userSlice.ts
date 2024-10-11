import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currentUserState, UserType } from "../../types/types";
import { BASE_URL } from "../../constants/constants";
import { isError } from "../../utils/is-error";

const initialState: currentUserState = {
    user: [],
    isLoading: false,
    error: null
}

// переписать стейт тк получаю один объект
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//     "lat": "-37.3159",
//     "lng": "81.1496"
//     }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//     }
//     }

export const fetchUser = createAsyncThunk<UserType, number, { rejectValue: string }>(
    'user/fetchUser', async (userId: number, { rejectWithValue }) => {

        const response = await fetch(`${BASE_URL}/${userId}`)

        if (!response.ok) {
            return rejectWithValue('Server error!')
        }

        return await response.json()
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state, { payload }) => {
                state.user = [payload]
                state.error = null
                state.isLoading = false
            })
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export default userSlice.reducer