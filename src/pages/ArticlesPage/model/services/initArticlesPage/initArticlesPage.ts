import { getArticlesInited } from '../../selectors/getArticlesInited/getArticlesInited'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { articlePageActions } from '../../slice/articlePageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, ThungApi) => {
    const { dispatch, getState } = ThungApi
    const _inited = getArticlesInited(getState())

    if (!_inited) {
        dispatch(articlePageActions.initState())
        dispatch(fetchArticleList({ page: 1 }))
    }
})
