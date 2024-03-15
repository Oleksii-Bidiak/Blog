import { createSelector } from '@reduxjs/toolkit'
import { getArticles } from '../getArticles/getArticles'
import { ArticlesPageSchema } from '../../types/articlePageSchema'
import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticlesLimit = createSelector(
    getArticles,
    (articles: ArticlesPageSchema | undefined) => articles?.limit,
)
