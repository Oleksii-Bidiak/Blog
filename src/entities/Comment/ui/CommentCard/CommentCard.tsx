import { memo, useMemo } from 'react'
import {
    Additionals,
    Mods,
    classNames,
} from '@/shared/lib/classNames/classNames'
import { Comment } from '../../model/types/comment'
import cls from './commentCard.module.scss'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Text } from '@/shared/ui/Text/Text'
import { Sceleton } from '@/shared/ui/Sceleton/Sceleton'
import { AppLink } from '@/shared/ui/AppLink'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { VStack } from '@/shared/ui/Stack'

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props

    const mods: Mods = {}
    const additionals: Additionals = [className]

    if (isLoading) {
        return (
            <VStack
                gap="8"
                max
                className={classNames(cls.commentCard, mods, additionals)}>
                <div className={cls.header}>
                    <Sceleton height={30} width={30} borderRadius="50%" />
                    <Sceleton height={16} width={100} />
                </div>
                <Sceleton width="100%" height={50} />
            </VStack>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.commentCard, mods, additionals)}>
            <AppLink
                to={`${RoutePath.profile}${comment.user.id}`}
                className={cls.header}>
                {comment.user.avatar && (
                    <Avatar size={30} alt="avatar" src={comment.user.avatar} />
                )}
                <Text title={comment.user.username} />
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    )
})
