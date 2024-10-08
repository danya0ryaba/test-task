import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currentUserState, UserType } from "../../types/types";
import { BASE_URL } from "../../constants/constants";
import { isError } from "../../utils/is-error";

const initialState: currentUserState = {
    user: [],
    isLoading: false,
    error: null
}

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


// export const { putInArchive, removeUser, activeUser } = usersSlice.actions

export default userSlice.reducer