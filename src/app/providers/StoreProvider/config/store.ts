import { StateSchema } from './StateSchema'
import {
    configureStore,
    DeepPartial,
    ReducersMapObject,
} from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReduser } from 'entities/User'
import { createReducerManager } from './reducerManager'

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => {
    const rootRedusers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReduser,
    }

    const reducerManager = createReducerManager(rootRedusers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

    //  @ts-ignore
    store.reducerManager = reducerManager

    return store
}
