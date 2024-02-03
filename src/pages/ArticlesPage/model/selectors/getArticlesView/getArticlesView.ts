import { createSelector } from '@reduxjs/toolkit'
import { ArticleView } from 'entities/Article'
import { ArticlesPageSchema } from '../../types/articlePageSchema'
import { getArticles } from '../getArticles/getArticles'

export const getArticlesView = createSelector(
    getArticles,
    (articles: ArticlesPageSchema | undefined) =>
        articles?.view || ArticleView.SMALL,
)
