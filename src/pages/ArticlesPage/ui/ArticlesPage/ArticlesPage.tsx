import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleList } from 'entities/Article'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import {
    articlePageReducer,
    getArticlesSelectors,
} from '../../model/slice/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { useSelector } from 'react-redux'
import { getArticlesLoading } from '../../model/selectors/getArticlesLoading/getArticlesLoading'
import { getArticlesError } from '../../model/selectors/getArticlesError/getArticlesError'
import { getArticlesView } from '../../model/selectors/getArticlesView/getArticlesView'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters'
import { useSearchParams } from 'react-router-dom'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticlesSelectors.selectAll)
    const isLoading = useSelector(getArticlesLoading)
    const error = useSelector(getArticlesError)
    const view = useSelector(getArticlesView)
    const [searchParams] = useSearchParams()

    const mods: Mods = {}
    const additionals: Additionals = [className]

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticles())
        }
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames('', mods, additionals)}>
                <ArticlePageFilters view={view} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
