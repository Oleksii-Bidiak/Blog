import { createSelector } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from '../../types/ArticleDetailsSchema'
import { getArticleDetails } from '../getArticleDetails/getArticleDetails'

export const getArticleDetailsData = createSelector(
    getArticleDetails,
    (article: ArticleDetailsSchema | undefined) => article?.data,
)
