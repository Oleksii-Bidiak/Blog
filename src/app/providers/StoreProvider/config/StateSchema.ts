import {
    AnyAction,
    CombinedState,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit'
import { UserSchema } from 'entities/User'
import { CounterSchema } from 'entities/Counter'
import { LoginSchema } from 'features/AuthByUsername'
import { EnhancedStore } from '@reduxjs/toolkit'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    //  Асинхронні редюсери
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManeger extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
