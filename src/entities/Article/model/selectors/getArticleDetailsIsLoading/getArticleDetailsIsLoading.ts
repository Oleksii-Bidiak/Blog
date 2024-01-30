import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetails } from '../getArticleDetails/getArticleDetails'
import { ArticleDetailsSchema } from '../../types/articleDetailsSchema'

export const getArticleDetailsIsLoading = createSelector(
    getArticleDetails,
    (article: ArticleDetailsSchema | undefined) => article?.isLoading,
)
