import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Article } from '../../model/types/article'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSceleton } from '../ArticleListItem/ArticleListItemSceleton'
import cls from './articleList.module.scss'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { ArticleView } from '../../model/const/const'

interface ArticleListProps {
    className?: string
    articles: Article[]
    view?: ArticleView
    isLoading?: boolean
    target?: HTMLAttributeAnchorTarget
}

const getSceletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSceleton view={view} key={index} />
        ))
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props
    const { t } = useTranslation('article')

    const mods: Mods = {}
    const additionals: Additionals = [className, cls[view]]

    const renderArtiles = (article: Article) => {
        return (
            <ArticleListItem
                target={target}
                article={article}
                view={view}
                key={article.id}
            />
        )
    }

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.articleList, mods, additionals)}>
                <Text text={t('Статтю не знайдено')} size={TextSize.L} />
            </div>
        )
    }

    return (
        <div className={classNames(cls.articleList, mods, additionals)}>
            {articles.length ? articles.map(renderArtiles) : null}
            {isLoading && getSceletons(view)}
        </div>
    )
})
