import { memo, useCallback, useMemo } from 'react'
import { articlePageActions } from '../../model/slice/articlePageSlice'
import {
    ArticleSortField,
    ArticleSortSelect,
    ArticleView,
    ArticleViewSelector,
} from '@/entities/Article'
import {
    Additionals,
    Mods,
    classNames,
} from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import cls from './articlePageFilters.module.scss'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/Card/Card'
import { Input } from '@/shared/ui/Input/Input'
import { SortOrder } from '@/shared/types'
import { useSelector } from 'react-redux'
import { getArticlesPageOrder } from '../../model/selectors/getArticlesOrder/getArticlesOrder'
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort'
import { getArticlesPageSearch } from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch'
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList'
import { useDebounce } from '@/shared/lib/hooks/useDebounce'
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs'
import { ArticleType } from '@/entities/Article'
import { getArticlesPageType } from '../../model/selectors/getArticlesPageType/getArticlesPageType'

interface ArticlePageFiltersProps {
    className?: string
    view?: ArticleView
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
    const { className, view } = props
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const order = useSelector(getArticlesPageOrder)
    const sort = useSelector(getArticlesPageSort)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)

    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const typeTabs = useMemo<TabItem<ArticleType>[]>(
        () => [
            { value: ArticleType.ALL, content: t(`${ArticleType.ALL}`) },
            { value: ArticleType.IT, content: t(`${ArticleType.IT}`) },
            {
                value: ArticleType.SCIENCE,
                content: t(`${ArticleType.SCIENCE}`),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t(`${ArticleType.ECONOMICS}`),
            },
        ],
        [t],
    )

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view))
        },
        [dispatch],
    )

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlePageActions.setOrder(order))
            dispatch(articlePageActions.setPage(1))
            fetchData()
        },
        [dispatch, fetchData],
    )

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(newSort))
            dispatch(articlePageActions.setPage(1))
            fetchData()
        },
        [dispatch, fetchData],
    )

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePageActions.setSearch(search))
            dispatch(articlePageActions.setPage(1))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData],
    )

    const onChangeType = useCallback(
        (tab: TabItem<ArticleType>) => {
            dispatch(articlePageActions.setType(tab.value))
            dispatch(articlePageActions.setPage(1))
            fetchData()
        },
        [fetchData, dispatch],
    )

    const mods: Mods = {}
    const additionals: Additionals = [className]

    return (
        <div className={classNames(cls.articlePageFilters, mods, additionals)}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelect
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Пошук')}
                />
            </Card>
            <Tabs tabs={typeTabs} value={type} onTabClick={onChangeType} />
        </div>
    )
})
