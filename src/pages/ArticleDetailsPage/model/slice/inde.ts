import { combineReducers } from '@reduxjs/toolkit'
import { ArticleDetailsPageSchema } from '../types'
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentSlice/ArticleDetailsCommentSlice'
import { ArticleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice/articleDetailsRecommendationsSlice'

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        comments: articleDetailsCommentsReducer,
        recomendations: ArticleDetailsRecommendationsReducer,
    })
