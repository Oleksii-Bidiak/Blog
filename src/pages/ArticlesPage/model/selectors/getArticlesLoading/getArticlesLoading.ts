import { createSelector } from '@reduxjs/toolkit'
import { getArticles } from '../getArticles/getArticles'
import { ArticlesPageSchema } from '../../types/articlePageSchema'

export const getArticlesLoading = createSelector(
    getArticles,
    (articles: ArticlesPageSchema | undefined) => articles?.isLoading || false,
)
