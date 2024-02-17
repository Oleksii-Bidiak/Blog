import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useArticleRecommendationsList } from '../../api/articlesRecommendationsApi'
import { ArticleList } from 'entities/Article'
import { VStack } from 'shared/ui/Stack'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleRecommendationsListProps {
    className?: string
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props
        const { t } = useTranslation()
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(3)

        if (isLoading || error || !articles) {
            return null
        }

        return (
            <VStack gap="8" className={classNames('', {}, [className])}>
                <Text size={TextSize.L} title={t('Рекомендуємо')} />
                <ArticleList articles={articles} target="_blank" />
            </VStack>
        )
    },
)
