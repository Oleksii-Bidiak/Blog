import { articlePageSchema } from '../../types/articlePageSchema'
import { StateSchema } from 'app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'
import { ArticleView } from 'entities/Article'

export const getArticlesView = createSelector(
    [(state: StateSchema) => state.articlesPage],
    (articles: articlePageSchema | undefined) =>
        articles?.view || ArticleView.SMALL,
)
