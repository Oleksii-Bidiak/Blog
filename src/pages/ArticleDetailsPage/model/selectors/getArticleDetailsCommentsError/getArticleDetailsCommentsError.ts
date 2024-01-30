import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetailsComments } from '../getArticleDetailsComments/getArticleDetailsComments'
import { articleDetailsCommentSchema } from '../../types/articleDetailsCommentSchema'

export const getArticleDetailsCommentsError = createSelector(
    getArticleDetailsComments,
    (comments: articleDetailsCommentSchema | undefined) => comments?.error,
)
