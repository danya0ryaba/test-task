import { createSlice } from "@reduxjs/toolkit"


type InputValue = {
    id: string
}
type State = {
    data: InputValue[]
}

const initialState: State = {
    data: [],
}

export const userSlice = createSlice({
    name: 'data-form',
    initialState,
    reducers: {},
})


// export const { putInArchive, removeUser, activeUser } = usersSlice.actions

export default userSlice.reducer