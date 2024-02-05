import { createSelector } from '@reduxjs/toolkit'
import { getArticles } from '../getArticles/getArticles'
import { ArticlesPageSchema } from '../../types/articlePageSchema'
import { ArticleSortField } from 'entities/Article'

export const getArticlesPageSort = createSelector(
    getArticles,
    (articles: ArticlesPageSchema | undefined) =>
        articles?.sort ?? ArticleSortField.CREATED,
)
