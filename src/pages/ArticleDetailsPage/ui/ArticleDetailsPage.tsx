import { memo, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleDetailsCommentsLoading } from '../model/selectors/getArticleDetailsCommentsLoading/getArticleDetailsCommentsLoading'
import { getArticleDetailsCommentsError } from '../model/selectors/getArticleDetailsCommentsError/getArticleDetailsCommentsError'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../model/slice/ArticleDetailsCommentSlice/ArticleDetailsCommentSlice'
import { AddCommentForm } from 'features/addCommentForm'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import { Text, TextSize } from 'shared/ui/Text/Text'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import cls from './articleDetailsPage.module.scss'
import { Page } from 'widgets/Page/Page'
import { getArticleRecommendations } from '../model/slice/articleDetailsRecommendationsSlice/articleDetailsRecommendationsSlice'
import {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading,
} from '../model/selectors/getArticleRecommendations/getArticleRecommendations'
import { fetchArticlesRecommendation } from '../model/services/fetchArticlesRecommendation/fetchArticlesRecommendation'
import { articleDetailsPageReducer } from '../model/slice/inde'

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
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleDetailsCommentsLoading)
    const error = useSelector(getArticleDetailsCommentsError)

    const recommendations = useSelector(getArticleRecommendations.selectAll)
    const recommendationsLoading = useSelector(
        getArticleRecommendationsIsLoading,
    )
    const recommendationsError = useSelector(getArticleRecommendationsError)

    const mods: Mods = {}
    const additionals: Additionals = [className]

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text))
        },
        [dispatch],
    )

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchArticlesRecommendation())
    })

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
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onBackToList}
                    className={cls.back}>
                    {`< ${t('Назад до переліку статтів')}`}
                </Button>
                <ArticleDetails className={cls.article} id={id} />
                <Text
                    size={TextSize.L}
                    className={cls.title}
                    title={t('Рекомендуємо')}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsLoading}
                    className={cls.recommendations}
                    target="_blank"
                />
                <Text
                    size={TextSize.L}
                    className={cls.title}
                    title={t('Коментарі')}
                />
                <AddCommentForm
                    className={cls.coomentForm}
                    onSendComment={onSendComment}
                />
                <CommentList isLoading={isLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
