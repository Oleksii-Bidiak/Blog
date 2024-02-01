import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { getAuthUserData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDetailsPage/addCommentForArticle', async (text, ThunkApi) => {
    const { extra, getState, rejectWithValue, dispatch } = ThunkApi

    const userData = getAuthUserData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) {
        return rejectWithValue('no data')
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text,
        })

        if (!response.data) {
            throw new Error()
        }

        dispatch(fetchCommentsByArticleId(article.id))

        return response.data
    } catch (e) {
        return rejectWithValue('error')
    }
})
