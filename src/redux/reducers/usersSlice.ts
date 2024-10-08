import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BASE_URL } from "../../constants/constants"
import { allUserState, UserType } from "../../types/types"
import { isError } from "../../utils/is-error"

const initialState: allUserState = {
    users: [],
    usersArchive: [],
    isLoading: false,
    error: null
}

export const fetchUsers = createAsyncThunk<UserType[], undefined, { rejectValue: string }>(
    'users/fetchUsers', async (_, { rejectWithValue }) => {

        const response = await fetch(`${BASE_URL}?_limit=6&_page=1`)

        if (!response.ok) {
            return rejectWithValue('Server error!')
        }

        return await response.json()
    }
)


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        putInArchive: (state, { payload }) => {
            const user = state.users.find(user => user.id === payload)
            if (user) {
                user.active = true
                state.usersArchive.push(user)
            }
            state.users = state.users.filter(user => user.id !== payload)
        },
        removeUser: (state, { payload }) => {
            state.users = state.users.filter(user => user.id !== payload)
        },
        activeUser: (state, { payload }) => {
            const user = state.usersArchive.find(user => user.id === payload)
            state.usersArchive = state.usersArchive.filter(user => user.id !== payload)
            if (user) {
                user.active = false
                state.users.push(user)
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, { payload }) => {
                state.users = payload.map(user => ({ ...user, active: false }))
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



export const { putInArchive, removeUser, activeUser } = usersSlice.actions

export default usersSlice.reducer