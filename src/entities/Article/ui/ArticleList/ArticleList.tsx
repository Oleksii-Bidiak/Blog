import { memo } from 'react'
import { Article, ArticleView } from '../../model/types/article'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSceleton } from '../ArticleListItem/ArticleListItemSceleton'
import cls from './articleList.module.scss'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

interface ArticleListProps {
    className?: string
    articles: Article[]
    view?: ArticleView
    isLoading?: boolean
}

const getSceletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSceleton view={view} key={index} />
        ))
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, isLoading, view = ArticleView.SMALL } = props
    const { t } = useTranslation('articles')

    const mods: Mods = {}
    const additionals: Additionals = [className, cls[view]]

    const renderArtiles = (article: Article) => {
        return (
            <ArticleListItem article={article} view={view} key={article.id} />
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
