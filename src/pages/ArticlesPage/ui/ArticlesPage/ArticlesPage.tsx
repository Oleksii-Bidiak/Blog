import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { articlePageReducer } from '../../model/slice/articlePageSlice'
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles'
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters'
import { ArticlePageInfiniteList } from '../ArticlePageInfiniteList/ArticlePageInfiniteList'
import { getArticlesView } from '../../model/selectors/getArticlesView/getArticlesView'
import { Page } from '@/widgets/Page/Page'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader'

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
}

const ArticlesPage = () => {
    const dispatch = useAppDispatch()
    const view = useSelector(getArticlesView)

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticles())
        }
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart}>
                <ArticlePageFilters view={view} />
                <ArticlePageInfiniteList />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
