import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'

export const fetchArticleList = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>('articlesPage/fetchArticleList', async (_, ThunkApi) => {
    const { extra, rejectWithValue } = ThunkApi

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
            },
        })
        console.log('response')
        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (e) {
        return rejectWithValue('error')
    }
})
