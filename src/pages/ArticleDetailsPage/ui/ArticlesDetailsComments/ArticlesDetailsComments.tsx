import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleDetailsCommentsLoading } from '../../model/selectors/getArticleDetailsCommentsLoading/getArticleDetailsCommentsLoading'
import { getArticleComments } from '../../model/slice/ArticleDetailsCommentSlice/ArticleDetailsCommentSlice'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/addCommentForm'
import { CommentList } from 'entities/Comment'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { VStack } from 'shared/ui/Stack'

interface ArticlesDetailsCommentsProps {
    id: string
}

export const ArticlesDetailsComments = memo(
    (props: ArticlesDetailsCommentsProps) => {
        const { id } = props
        const { t } = useTranslation('article')
        const dispatch = useAppDispatch()

        const comments = useSelector(getArticleComments.selectAll)
        const isLoading = useSelector(getArticleDetailsCommentsLoading)

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text))
            },
            [dispatch],
        )

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id))
        })

        return (
            <VStack gap="8" max>
                <Text size={TextSize.L} title={t('Коментарі')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </VStack>
        )
    },
)
