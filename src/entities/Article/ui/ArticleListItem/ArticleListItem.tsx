import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import {
    Article,
    ArticleBlockType,
    ArticleTextBlok,
    ArticleView,
} from '../../model/types/article'
import { ArticleTextBlokComponent } from '../ArticleTextBlokComponent/ArticleTextBlokComponent'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import cls from './articleListItem.module.scss'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view } = props
    const { t } = useTranslation('article')
    const navigate = useNavigate()

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id)
    }, [article.id, navigate])

    const types = <Text text={article.type.join(', ')} className={cls.types} />
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    )

    const mods: Mods = {}
    const additionals: Additionals = [className, cls[view]]

    if (view === ArticleView.BIG) {
        let textBlock = article.blocks.find(
            block => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlok

        return (
            <div className={classNames(cls.articleListItem, mods, additionals)}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar
                            src={article.user.avatar}
                            alt={article.user.username}
                            size={30}
                        />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text text={article.createdAt} className={cls.data} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    {textBlock && (
                        <ArticleTextBlokComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onOpenArticle}>
                            {t('Більше...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(cls.articleListItem, mods, additionals)}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    )
})
