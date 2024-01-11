import {
    AnyAction,
    CombinedState,
    Dispatch,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit'
import { UserSchema } from 'entities/User'
import { CounterSchema } from 'entities/Counter'
import { LoginSchema } from 'features/AuthByUsername'
import { EnhancedStore } from '@reduxjs/toolkit'
import { ProfileSchema } from 'entities/Profile'
import { AxiosInstance } from 'axios'
import { NavigateOptions, To } from 'react-router-dom'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    //  Асинхронні редюсери
    loginForm?: LoginSchema
    profile?: ProfileSchema
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

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}
