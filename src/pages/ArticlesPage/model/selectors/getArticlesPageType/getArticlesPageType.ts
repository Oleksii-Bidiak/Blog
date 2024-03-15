import { createSelector } from '@reduxjs/toolkit'
import { getArticles } from '../getArticles/getArticles'
import { ArticlesPageSchema } from '../../types/articlePageSchema'
import { ArticleType } from '@/entities/Article'

export const getArticlesPageType = createSelector(
    getArticles,
    (articles: ArticlesPageSchema | undefined) =>
        articles?.type ?? ArticleType.ALL,
)
