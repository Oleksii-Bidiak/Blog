import { memo } from 'react'
import { Article, ArticleView } from '../../model/types/article'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSceleton } from '../ArticleListItem/ArticleListItemSceleton'
import cls from './articleList.module.scss'

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

    const mods: Mods = {}
    const additionals: Additionals = [className, cls[view]]

    const renderArtiles = (article: Article) => {
        return (
            <ArticleListItem article={article} view={view} key={article.id} />
        )
    }

    return (
        <div className={classNames(cls.articleList, mods, additionals)}>
            {articles.length ? articles.map(renderArtiles) : null}
            {isLoading && getSceletons(view)}
        </div>
    )
})
