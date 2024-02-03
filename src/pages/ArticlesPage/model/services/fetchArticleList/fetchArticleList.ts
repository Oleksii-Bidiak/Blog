import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { getArticlesLimit } from '../../selectors/getArticlesLimit/getArticlesLimit'

interface FetchArticleListProps {
    page?: number
}

export const fetchArticleList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticleList', async (args, ThunkApi) => {
    const { page = 1 } = args
    const { extra, rejectWithValue, getState } = ThunkApi
    const limit = getArticlesLimit(getState())

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
            },
        })

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (e) {
        return rejectWithValue('error')
    }
})
