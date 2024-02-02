import { articlePageSchema } from '../../types/articlePageSchema'
import { StateSchema } from 'app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'

export const getArticlesError = createSelector(
    [(state: StateSchema) => state.articlesPage],
    (articles: articlePageSchema | undefined) => articles?.error || undefined,
)
