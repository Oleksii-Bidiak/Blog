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
import { ProfileSchema } from 'entities/Profile'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage'
import { AddCommentFormSchema } from 'features/addCommentForm'
import { ArticlesPageSchema } from 'pages/ArticlesPage'
import { ScrollSaveSchema } from 'features/ScrollSave'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    scrollSave: ScrollSaveSchema

    //  Асинхронні редюсери
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
    articleDetailsPage?: ArticleDetailsPageSchema
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
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
