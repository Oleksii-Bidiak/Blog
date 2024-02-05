import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article, ArticleType } from 'entities/Article'
import { getArticlesLimit } from '../../selectors/getArticlesLimit/getArticlesLimit'
import { getArticlesPageOrder } from '../../selectors/getArticlesOrder/getArticlesOrder'
import { getArticlesPageSort } from '../../selectors/getArticlesPageSort/getArticlesPageSort'
import { getArticlesPageSearch } from '../../selectors/getArticlesPageSearch/getArticlesPageSearch'
import { getArticlesPage } from '../../selectors/getArticlesPage/getArticlesPage'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'
import { getArticlesPageType } from '../../selectors/getArticlesPageType/getArticlesPageType'

interface FetchArticleListProps {
    replace?: boolean
}

export const fetchArticleList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticleList', async (args, ThunkApi) => {
    const { extra, rejectWithValue, getState } = ThunkApi
    const limit = getArticlesLimit(getState())
    const order = getArticlesPageOrder(getState())
    const sort = getArticlesPageSort(getState())
    const search = getArticlesPageSearch(getState())
    const page = getArticlesPage(getState())
    const type = getArticlesPageType(getState())
    console.log(type)
    try {
        addQueryParams({
            sort,
            order,
            search,
            type,
        })

        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type,
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
