import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetails } from '../getArticleDetails/getArticleDetails'
import { ArticleDetailsShema } from '../../types/articleDetailsShema'

export const getArticleDetailsError = createSelector(
    getArticleDetails,
    (article: ArticleDetailsShema | undefined) => article?.error,
)
