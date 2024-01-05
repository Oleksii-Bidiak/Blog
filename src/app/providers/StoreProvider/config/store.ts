import { StateSchema } from './StateSchema'
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReduser } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

export const createReduxStore = (initialState?: StateSchema) => {
    const rootRedusers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReduser,
        loginForm: loginReducer,
    }
    return configureStore<StateSchema>({
        reducer: rootRedusers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
