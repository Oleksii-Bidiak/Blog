import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { canEditArticle } from '../../model/selectors/canEditArticle/canEditArticle'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button'
import cls from './articleDetailsPageHeader.module.scss'
import { getArticleDetailsData } from 'entities/Article'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props
        const { t } = useTranslation('article')
        const navigate = useNavigate()

        const canEdit = useSelector(canEditArticle)
        const article = useSelector(getArticleDetailsData)

        const onBackToList = useCallback(() => {
            navigate(RoutePath.articles)
        }, [navigate])

        const onEditArticle = useCallback(() => {
            navigate(`${RoutePath.article_details}${article?.id}/edit`)
        }, [article?.id, navigate])

        return (
            <div
                className={classNames(cls.articleDetailsPageHeader, {}, [
                    className,
                ])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {`< ${t('Назад до переліку статтів')}`}
                </Button>
                {canEdit && (
                    <Button
                        onClick={onEditArticle}
                        className={cls.editbtn}
                        theme={ButtonTheme.OUTLINE}>
                        {t('Редагувати')}
                    </Button>
                )}
            </div>
        )
    },
)
