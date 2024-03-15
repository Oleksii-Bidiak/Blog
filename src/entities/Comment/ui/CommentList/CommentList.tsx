import { memo, useMemo } from 'react'
import {
    Additionals,
    Mods,
    classNames,
} from '@/shared/lib/classNames/classNames'
import { Comment } from '../../model/types/comment'
import { Text } from '@/shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { VStack } from '@/shared/ui/Stack'

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props
    const { t } = useTranslation('article')

    const mods: Mods = {}
    const additionals: Additionals = [className]

    const commentList = useMemo(() => {
        return comments?.map(comment => (
            <CommentCard
                isLoading={isLoading}
                key={comment.id}
                comment={comment}
            />
        ))
    }, [comments, isLoading])

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', mods, additionals)}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        )
    }

    return (
        <VStack gap="16" max className={classNames('', mods, additionals)}>
            {comments?.length ? (
                commentList
            ) : (
                <Text text={t('Коментарі відсутні')} />
            )}
        </VStack>
    )
})
