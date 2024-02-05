import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPage } from '../../selectors/getArticlesPage/getArticlesPage'
import { getArticlesHasMore } from '../../selectors/getArticlesHasMore/getArticlesHasMore'
import { getArticlesLoading } from '../../selectors/getArticlesLoading/getArticlesLoading'
import { articlePageActions } from '../../slice/articlePageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

export const fetchNextArticles = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlesPage/fetchNextArticles', async (_, ThungApi) => {
    const { dispatch, getState } = ThungApi
    const page = getArticlesPage(getState())
    const hasMore = getArticlesHasMore(getState())
    const isLoading = getArticlesLoading(getState())

    if (hasMore && !isLoading) {
        dispatch(articlePageActions.setPage(page + 1))
        dispatch(fetchArticleList({}))
    }
})
