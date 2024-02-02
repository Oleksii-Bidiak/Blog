import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import {
    articlePageActions,
    articlePageReducer,
    getArticles,
} from '../../model/slice/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList'
import { useSelector } from 'react-redux'
import { getArticlesLoading } from '../../model/selectors/getArticlesLoading/getArticlesLoading'
import { getArticlesError } from '../../model/selectors/getArticlesError/getArticlesError'
import { getArticlesView } from '../../model/selectors/getArticlesView/getArticlesView'

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
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesLoading)
    const error = useSelector(getArticlesError)
    const view = useSelector(getArticlesView)

    const mods: Mods = {}
    const additionals: Additionals = [className]

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view))
        },
        [dispatch],
    )

    useInitialEffect(() => {
        dispatch(fetchArticleList())
        dispatch(articlePageActions.initState())
    })

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', mods, additionals)}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
