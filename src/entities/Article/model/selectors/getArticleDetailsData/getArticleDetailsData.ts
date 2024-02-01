import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetails } from '../getArticleDetails/getArticleDetails'
import { ArticleDetailsSchema } from '../../types/articleDetailsSchema'

export const getArticleDetailsData = createSelector(
    getArticleDetails,
    (article: ArticleDetailsSchema | undefined) => article?.data,
)
