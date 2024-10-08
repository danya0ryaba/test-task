import { combineReducers, configureStore } from '@reduxjs/toolkit'
import usersReducer from './reducers/usersSlice'
import userReducer from './reducers/userSlice'

export const rootReducer = combineReducers({
    usersReducer,
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']