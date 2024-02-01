import { memo, useMemo } from 'react'
import { Additionals, Mods, classNames } from 'shared/lib/classNames/classNames'
import { Comment } from '../../model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import cls from './commentList.module.scss'

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
                className={cls.comment}
                key={comment.id}
                comment={comment}
            />
        ))
    }, [comments, isLoading])

    if (isLoading) {
        return (
            <div className={classNames(cls.commentList, mods, additionals)}>
                <CommentCard className={cls.comment} isLoading />
                <CommentCard className={cls.comment} isLoading />
                <CommentCard className={cls.comment} isLoading />
            </div>
        )
    }

    return (
        <div className={classNames(cls.commentList, mods, additionals)}>
            {comments?.length ? (
                commentList
            ) : (
                <Text text={t('Коментарі відсутні')} />
            )}
        </div>
    )
})
