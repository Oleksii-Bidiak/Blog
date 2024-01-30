import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetails } from '../getArticleDetails/getArticleDetails'
import { ArticleDetailsSchema } from '../../types/articleDetailsSchema'

export const getArticleDetailsError = createSelector(
    getArticleDetails,
    (article: ArticleDetailsSchema | undefined) => article?.error,
)
