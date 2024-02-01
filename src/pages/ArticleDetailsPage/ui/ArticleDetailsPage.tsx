import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import cls from './articleDetailsPage.module.scss'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../model/slice/ArticleDetailsCommentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleDetailsCommentsLoading } from '../model/selectors/getArticleDetailsCommentsLoading/getArticleDetailsCommentsLoading'
import { getArticleDetailsCommentsError } from '../model/selectors/getArticleDetailsCommentsError/getArticleDetailsCommentsError'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { AddCommentForm } from 'features/addCommentForm'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props
    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()
    const dispatch = useDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleDetailsCommentsLoading)
    const error = useSelector(getArticleDetailsCommentsError)

    const mods: Mods = {}
    const additionals: Additionals = [className]

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text))
        },
        [dispatch],
    )

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
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
            <div
                className={classNames(
                    cls.articleDetailsPage,
                    mods,
                    additionals,
                )}>
                <ArticleDetails className={cls.article} id={id} />
                <Text className={cls.title} title={t('Коментарі')} />
                <AddCommentForm
                    className={cls.coomentForm}
                    onSendComment={onSendComment}
                />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
