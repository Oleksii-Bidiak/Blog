import { getArticlesInited } from '../../selectors/getArticlesInited/getArticlesInited'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { articlePageActions } from '../../slice/articlePageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'
import { SortOrder } from '@/shared/types'
import { ArticleSortField, ArticleType } from '@/entities/Article'

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, ThungApi) => {
    const { dispatch, getState } = ThungApi
    const _inited = getArticlesInited(getState())

    if (!_inited) {
        const orderFromURL = searchParams.get('order') as SortOrder
        const sortFromURL = searchParams.get('sort') as ArticleSortField
        const searchFromURL = searchParams.get('search')
        const typeFromURL = searchParams.get('type') as ArticleType

        if (orderFromURL) {
            dispatch(articlePageActions.setOrder(orderFromURL))
        }
        if (sortFromURL) {
            dispatch(articlePageActions.setSort(sortFromURL))
        }
        if (searchFromURL) {
            dispatch(articlePageActions.setSearch(searchFromURL))
        }
        if (typeFromURL) {
            dispatch(articlePageActions.setType(typeFromURL))
        }

        dispatch(articlePageActions.initState())
        dispatch(fetchArticleList({}))
    }
})
