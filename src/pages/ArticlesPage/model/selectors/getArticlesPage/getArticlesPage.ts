import { createSelector } from '@reduxjs/toolkit'
import { getArticles } from '../getArticles/getArticles'
import { ArticlesPageSchema } from '../../types/articlePageSchema'

export const getArticlesPage = createSelector(
    getArticles,
    (articles: ArticlesPageSchema | undefined) => articles?.page || 1,
)
