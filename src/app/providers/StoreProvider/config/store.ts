import { StateSchema, ThunkExtraArg } from './StateSchema'
import {
    CombinedState,
    configureStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReduser } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { NavigateOptions, To } from 'react-router-dom'

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

    const extraArg: ThunkExtraArg = {
        api: $api,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    })

    //  @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
