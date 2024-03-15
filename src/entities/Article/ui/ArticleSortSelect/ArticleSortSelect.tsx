import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleSortField } from '../../model/const/const'
import { Select, SelectOption } from '@/shared/ui/Select/Select'
import { SortOrder } from '@/shared/types'
import {
    Additionals,
    Mods,
    classNames,
} from '@/shared/lib/classNames/classNames'
import cls from './articleSortSelect.module.scss'

interface ArticleSortSelectProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeSort: (newSort: ArticleSortField) => void
    onChangeOrder: (newOrder: SortOrder) => void
}

export const ArticleSortSelect = memo((props: ArticleSortSelectProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props
    const { t } = useTranslation('article')

    const mods: Mods = {}
    const additionals: Additionals = [className]

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('зростанню'),
            },
            {
                value: 'desc',
                content: t('спаданню'),
            },
        ],
        [t],
    )

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('по даті'),
            },
            {
                value: ArticleSortField.TITILE,
                content: t('по заголовку'),
            },
            {
                value: ArticleSortField.VIEW,
                content: t('по кількості переглядів'),
            },
        ],
        [t],
    )

    return (
        <div className={classNames(cls.articleSortSelect, mods, additionals)}>
            <Select
                options={sortFieldOptions}
                label={t('Сортувати по')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    )
})
