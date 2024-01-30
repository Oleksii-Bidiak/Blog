import { createSelector } from '@reduxjs/toolkit'
import { ArticleDetailsShema } from '../../types/articleDetailsShema'
import { getArticleDetails } from '../getArticleDetails/getArticleDetails'

export const getArticleDetailsData = createSelector(
    getArticleDetails,
    (article: ArticleDetailsShema | undefined) => article?.data,
)
