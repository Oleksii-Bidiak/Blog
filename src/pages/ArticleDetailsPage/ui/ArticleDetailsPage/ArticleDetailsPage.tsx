import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { articleDetailsPageReducer } from '../../model/slice/inde'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticlesDetailsComments } from '../ArticlesDetailsComments/ArticlesDetailsComments'
import { Page } from 'widgets/Page/Page'
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList'
import { ArticleDetails } from 'entities/Article'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { VStack } from 'shared/ui/Stack'
import cls from './articleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props
    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()

    const mods: Mods = {}
    const additionals: Additionals = [className]

    if (!id) {
        return (
            <div className={classNames('', mods, additionals)}>
                {t('Статтю не знайдено')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(
                    cls.articleDetailsPage,
                    mods,
                    additionals,
                )}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader className={cls.back} />
                    <ArticleDetails className={cls.article} id={id} />
                    <ArticleRecommendationsList />
                    <ArticlesDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
