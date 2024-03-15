import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getArticlesError } from '../../model/selectors/getArticlesError/getArticlesError'
import { getArticlesLoading } from '../../model/selectors/getArticlesLoading/getArticlesLoading'
import { getArticlesView } from '../../model/selectors/getArticlesView/getArticlesView'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { getArticlesSelectors } from '../../model/slice/articlePageSlice'
import { ArticleList } from '@/entities/Article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import { Text } from '@/shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

export const ArticlePageInfiniteList = memo(() => {
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()

    const articles = useSelector(getArticlesSelectors.selectAll)
    const isLoading = useSelector(getArticlesLoading)
    const error = useSelector(getArticlesError)
    const view = useSelector(getArticlesView)

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    if (error) {
        return <Text title={t('Виникла помилка при завантаженні')} />
    }
    return <ArticleList isLoading={isLoading} view={view} articles={articles} />
})
