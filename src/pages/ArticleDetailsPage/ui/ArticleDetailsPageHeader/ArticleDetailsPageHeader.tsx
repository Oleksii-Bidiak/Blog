import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { canEditArticle } from '../../model/selectors/canEditArticle/canEditArticle'
import { getArticleDetailsData } from 'entities/Article'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { HStack } from 'shared/ui/Stack'

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
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {`< ${t('Назад до переліку статтів')}`}
                </Button>
                {canEdit && (
                    <Button onClick={onEditArticle} theme={ButtonTheme.OUTLINE}>
                        {t('Редагувати')}
                    </Button>
                )}
            </HStack>
        )
    },
)
